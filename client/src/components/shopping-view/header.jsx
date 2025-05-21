import { HousePlug, LogOut, Menu, ShoppingCart, UserCog,Handshake, LogIn,Globe } from "lucide-react";
import {
  NavLink,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser,loginUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";


function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchCat = new URLSearchParams(location.search).get("category");
  const { t } = useTranslation();
  const menuItems = shoppingViewHeaderMenuItems(t);

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "news"  &&
      getCurrentMenuItem.id !== "aboutme" &&
      getCurrentMenuItem.id !== "connection" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }



  return (
    <nav className="flex flex-col items-start sm:flex-row md:flex-col md:items-start lg:flex-row  flex-wrap  sm:items-center justify-center gap-4 sm:gap-6 mb-4">
    {menuItems.map(item => {
      // compute the `to` URL for this item:
      // - for filterable pages we go to `/listing?category=…`
      // - otherwise just to its static path
      const isFilterable = ![
        "home","products","news","aboutme","connection","search"
      ].includes(item.id);

      const to = isFilterable
        ? `/listing?category=${item.id}`
        : item.path;

      return (
        <NavLink
          key={item.id}
          to={to}
          end={!isFilterable /* only exact-match for static paths */}
          className={({ isActive }) => {
            // also consider “active” if we’re on `/listing` and category matches
            const listingActive =
              location.pathname.startsWith("/listing") &&
              searchCat === item.id;

            const active = isActive || listingActive;

            return `
              relative mt-3 inline-block text-md font-bold iflex items-center  text-white uppercase 
              before:absolute before:bottom-0 before:left-0
              before:h-[2px] before:w-full before:bg-white
              before:origin-left before:transition-transform before:duration-300
              ${active ? "before:scale-x-100 text-white" : "before:scale-x-0"}
              hover:before:scale-x-100
            `;
          }}
        >
          {item.label}
        </NavLink>
      );
    })}
  </nav>
  );
};

function HeaderRightContent() {
  const { user, isAuthenticated } = useSelector((state) => state.auth); // ✅ get isAuthenticated too
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/auth/login"); // ✅ go to login page after logout
  }

  function handleLogIn() {
    dispatch(loginUser());
    navigate("/auth/login"); // ✅ move user to login
  }

  function handleAccountClick() {
    if (isAuthenticated) {
      navigate("/shop/account"); // ✅ if logged in, go to account
    } else {
      navigate("/auth/login");   // ✅ if not logged in, go to login
    }
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCartItems(user?.id));
    }
  }, [dispatch, user?.id]); // ✅ fix dependency to avoid infinite dispatch

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4 ">

        {/* LANGUAGE CHANGE OPTION */}
          <DropdownMenu className="w-6 h-6 ml-[20px]  bg-[rgba(15,23,42,1)]" >
            <DropdownMenuTrigger asChild >
              <Button variant="ghost" size="sm"  className=" mt-4
                    ml-5 flex items-center sm:items-start justify-start gap-1
                    bg-[rgba(15,23,42,1)] text-white    
                    hover:text-white hover:bg-[rgba(15,23,42,0.9)]
                    border-none                         
                    focus-visible:outline-none          
                    focus-visible:ring-0 focus-visible:ring-offset-0
                  " >
                <Globe className="h-6 w-6 text-white" />  {i18n.language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage("uz")}  className="text-sm font-bold hover:bg-muted focus:bg-accent focus:text-accent-foreground">O'zbek</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("en")}  className="text-sm font-bold hover:bg-muted focus:bg-accent focus:text-accent-foreground">English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("ru")}  className="text-sm font-bold hover:bg-muted focus:bg-accent focus:text-accent-foreground">Русский</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    

      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="
                    relative
                    ml-5 flex items-center gap-1
                    bg-[rgba(15,23,42,1)] text-white    
                    hover:text-white hover:bg-[rgba(15,23,42,0.9)]
                    border-none                         
                    focus-visible:outline-none          
                    focus-visible:ring-0 focus-visible:ring-offset-0
                  "
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">{t("user_cart_text")}</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-white">
            <AvatarFallback className="bg-white text-black font-extrabold">
              {user?.userName ? user.userName[0].toUpperCase() : "?"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          {isAuthenticated && user ? (
            <>
              <DropdownMenuLabel>{t("logged_in_as")}  {user.userName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          ) : null}
          <DropdownMenuItem onClick={handleAccountClick}>
            <UserCog className="mr-2 h-4 w-4" />
            {t("account")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {!isAuthenticated && (
            <DropdownMenuItem onClick={handleLogIn}>
              <LogIn className="mr-2 h-4 w-4" />
              {t("login")}
            </DropdownMenuItem>
          )}
          {isAuthenticated && (
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              {t("login_out")}
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40  border-b  py-3  bg-[rgba(15,23,42,1)]">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 flex h-16 items-center justify-between ">
        <Link to="/shop/home" className="flex  items-center gap-2">
        {/* <Handshake /> */}
          <Handshake className="h-6 w-6 text-white" />
          <span className="font-bold text-white">MBM BUSINESS MACHINERY</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden ">
              <Menu className="h-6 w-6" />
              {/* <span className="sr-only">Toggle header menu</span> */}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-[rgba(15,23,42,1)]">
            <MenuItems  />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden font-bold  uppercase lg:block">
          <MenuItems className="font-bold uppercase text-xl "/>
        </div>
        {/* RIGHT CONTETN MENU */}
        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}



export default ShoppingHeader;