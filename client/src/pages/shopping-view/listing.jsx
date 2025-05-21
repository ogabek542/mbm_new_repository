import ProductFilter from "@/components/shopping-view/filter";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { sortOptions } from "@/config";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/search-slice";
import { ArrowUpDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];
  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

function ShoppingListing() {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { searchResults } = useSelector((state) => state.shopSearch);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("price-lowtohigh");
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();
  const optionItems = sortOptions(t);
  const scrollRef = useRef(null);

  const categorySearchParam = searchParams.get("category");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [productList.length]);

  useEffect(() => {
    const savedFilters = JSON.parse(sessionStorage.getItem("filters"));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, [categorySearchParam]);

  useEffect(() => {
    if (filters && sort) {
      dispatch(fetchAllFilteredProducts({ filterParams: filters, sortParams: sort }));
    }
  }, [filters, sort, dispatch]);

  useEffect(() => {
    if (keyword.trim().length > 3) {
      const timer = setTimeout(() => {
        dispatch(getSearchResults(keyword));
      }, 500);
      return () => clearTimeout(timer);
    } else {
      dispatch(resetSearchResults());
    }
  }, [keyword]);

  function handleSort(value) {
    setSort(value);
  }

  function handleFilter(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = { ...cpyFilters, [getSectionId]: [getCurrentOption] };
    } else {
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption);
      else
        cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));

    const createQueryString = createSearchParamsHelper(cpyFilters);
    setSearchParams(new URLSearchParams(createQueryString), { replace: true });
  }

  function handleGetProductDetails(id) {
    dispatch(fetchProductDetails(id));
  }

  function handleAddtoCart(id, stock) {
    let items = cartItems.items || [];
    const existingItem = items.find((item) => item.productId === id);
    if (existingItem && existingItem.quantity + 1 > stock) {
      toast({
        title: `${t("only_product_onetext")}${existingItem.quantity}${t("only_product_twotext")}`,
        variant: "destructive",
      });
      return;
    }
    dispatch(addToCart({ userId: user?.id, productId: id, quantity: 1 }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCartItems(user?.id));
          toast({ title: t("product_is_added_to_cart") });
        }
      });
  }

  useEffect(() => {
    if (productDetails !== null) {
      setOpenDetailsDialog(true);
    }
  }, [productDetails]);

  const displayedProducts = searchResults.length > 0 ? searchResults : productList;



  return (
    <div className="container flex flex-col min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 p-1 md:p-1 flex-grow">

        <ProductFilter filters={filters} handleFilter={handleFilter} />

        <div className="bg-background h-full w-full rounded-lg shadow-sm flex flex-col">
          {/* Top Bar */}
          <div className="p-3 border-b flex flex-col md:flex-row md:items-center justify-between gap-2">

            <div className="flex flex-col md:flex-row md:items-center gap-3 w-full justify-between">
              <h2 className="text-lg font-extrabold">{t("all_products_text")}</h2>  
              <Input
                value={keyword}
                name="keyword"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={t("search_products_text")}
                className="max-w-sm"
              />
            </div>
            {/* products number */}
            <div className="flex w-auto items-center gap-3">
              <span className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
              <span>{displayedProducts?.length || 0}</span> <span>{t("products_text")} </span> 
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <ArrowUpDownIcon className="h-4 w-4" />
                    <span className="uppercase">{t("sort_by_text")}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                    {optionItems.map((sortItem) => (
                      <DropdownMenuRadioItem value={sortItem.id} key={sortItem.id}>
                        {sortItem.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Product Grid */}
              <div
                ref={scrollRef}
                className="flex-1 p-2 w-full max-h-[calc(100vh+270px)] overflow-y-auto custom-scrollbar"
              >
                {displayedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2">
                    {displayedProducts.map((productItem) => (
                      <ShoppingProductTile
                        key={productItem.id}
                        handleAddtoCart={handleAddtoCart}
                        product={productItem}
                        handleGetProductDetails={handleGetProductDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    {t("no_products_found_text")}
                  </div>
                )}
              </div>
        </div>
      </div>
      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingListing;
