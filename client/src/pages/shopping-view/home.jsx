import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShirtIcon,
  Activity,
  Wrench,
  Package,
  Anvil,
  Armchair,
  Axe,
  Cpu,
  Factory,
  Warehouse,
  AirVent,
  Printer,
  ScrollText,
  Recycle,
  FlaskConical,
  Wand,
  Tractor,
  HandCoins,
  Copyright,
  CircleEllipsis,
  Frame,
  ShieldCheck,
  ChevronLeft, ChevronRight


} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import { Typography } from "@material-tailwind/react";

// <==== import images ====> //
import TenethImg from "../../assets/brand/teneth_brand.png";
import OreeImg from "../../assets/brand/oree_laser_brand.png";
import SengfengImg from "../../assets/brand/senfeng_brand.png";
import AudleyImg from "../../assets/brand/audley_brand.png";
import ReliableImg from "../../assets/brand/reilable_two.png";
import HarsleImg from "../../assets/brand/harsle_brand.jpg";
import KingMachineryImg from "../../assets/brand/king_machinery.jpg";
import ZhaoliImg from "../../assets/brand/zaowei_brand.png";
import CKLASERImg from "../../assets/brand/cklaster_brand.jpg";
import YafeiImg from "../../assets/brand/yafei_brand.webp";
import GuandiaoImg from "../../assets/brand/guan_diao_brand.jpg";
import KingpowerImg from "../../assets/brand/king_power_brand.png";
import BlueSunImg from  "../../assets/brand/blue_sun_brand.webp";
import YidiaoImg from "../../assets/brand/yi_diao_brand.jpg";
import NtekImg from "../../assets/brand/ntek_brand.jpg";
import FunsunImg from "../../assets/brand/fun_sun.png";
import YicaiImg from "../../assets/brand/yicai_brand.jpg";
import WinStarImg from "../../assets/brand/winning_star.jpg";
import PureteImg from "../../assets/brand/purete_two_brand.png";
import AiroImg from "../../assets/brand/airo_brand.png";
import PrefImg from "../../assets/brand/purete_one.jpg";
// Client Image //
import  UzumImg from "../../assets/clints/uzum_market.png";
import  CoronoDoorsImg from "../../assets/clints/korona_doors.webp";
import  VeryNiceImg from "../../assets/clints/very_nice.png";
import  CadyCampImg from "../../assets/clints/caddy_camp.jpg";
import  DashtQurilishImg from "../../assets/clints/dasht_qurilish.png";





function ShoppingHome() {

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const categoriesWithIcon = [
    { id: "medical", label: t("medical_equipment"), icon: Activity },
    {
      id: "construction",
      label:
        t("equipment_production_of_construction_and_building"),
      icon: Wrench,
    },
    { id: "packaging", label: t("packaging_equipment"), icon: Package },
    {
      id: "metal",
      label: t("metal_and_iron_processing_equipment"),
      icon: Anvil,
    },
    {
      id: "furniture",
      label: t("furniture_production_equipment"),
      icon: Armchair,
    },
    { id: "woodworking", label: t("woodworking_equipment"), icon: Axe },
    { id: "processing", label: t("processing_equipment"), icon: Cpu },
    {
      id: "light_industrial",
      label: t("light_industrial_equipment"),
      icon: Factory,
    },
    { id: "warehouse", label: t("warehouse_equipment"), icon: Warehouse },
    {
      id: "cooling_equipment",
      label: t("industrial_cooling_equipment"),
      icon: AirVent,
    },
    { id: "printing", label: t("printing_equipment"), icon: Printer },
    { id: "paper_process", label: t("paper_processing") , icon: ScrollText },
    { id: "weaving_equipment", label: t("weaving_equipment"), icon: ShirtIcon },
    { id: "recycling", label: t("Qayta ishlash"), icon: Recycle },
    {
      id: "laboratory_equipment",
      label: t("laboratory_equipment"),
      icon: FlaskConical,
    },
    { id: "laser_equipment", label: t("laser_equipment"), icon: Wand },
    {
      id: "hardware_windows_frames",
      label: t("hardware_for_windows_and_frames"),
      icon: Frame,
    },
    { id: "agriculture", label: t("agriculture"), icon: Tractor },
    { id: "service_sales", label: t("service_and_sales"), icon: HandCoins },
    { id: "copyright", label: t("copyright"), icon: Copyright },
    { id: "other_equipment", label: t("other_equipment"), icon: CircleEllipsis },
  ];
  
  const brandsWithIcon = [
    { id: "teneth", label: "Teneth", image: TenethImg },
    { id: "oree", label: "Oree", icon: OreeImg },
    { id: "sengfeng", label: "Sengfeng", icon: SengfengImg },
    { id: "audley", label: "Audley", icon: AudleyImg },
    { id: "reliable", label: "Reliable", icon: ReliableImg },
    { id: "harsle", label: "Harsle", icon: HarsleImg },
    { id: "king_machinery", label: "King Machinery", icon:KingMachineryImg  },
    { id: "zhaoli", label: "Zhaoli", icon:ZhaoliImg  },
    { id: "cklaser", label: "CKLASER", icon:CKLASERImg  },
    { id: "yafei", label: "Yafei", icon:YafeiImg  },
    { id: "guandiao", label: "Guandiao", icon:GuandiaoImg },
    { id: "kingpower", label: "King Power", icon:KingpowerImg  },
    { id: "blue_sun", label: "Blue Sun", icon:BlueSunImg  },
    { id: "yidiao", label: "Yidiao", icon:YidiaoImg  },
    { id: "ntek", label: "Ntek", icon:NtekImg },
    { id: "funsun", label: "Funsun", icon:FunsunImg },
    { id: "yicai", label: "Yicai", icon:YicaiImg },
    { id: "win_star", label: "Win Star", icon:WinStarImg  },
    { id: "purete", label: "Purete", icon:PureteImg },
    { id: "airo", label: "Airo", icon:AiroImg  },
    { id: "pref", label: "Pref", icon:PrefImg  },
  ];
  
  const ClientIcon = [
    { id: "uzum", label: "Uzum", image:UzumImg  },
    { id: "corono_doors", label: "Corono Doors", image: CoronoDoorsImg },
    { id: "very_nice", label: "Very Nice", image: VeryNiceImg },
    { id: "cady_camp", label: "Cady Camp", image: CadyCampImg },
    { id: "dasht_qurilish", label: "Dasht Qurilish", image: DashtQurilishImg },
  ];

  const [userSliding, setUserSliding] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userInteracted, setUserInteracted] = useState(false);




  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = { [section]: [getCurrentItem.id] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: t('product_is_added_to_cart'),
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);


  useEffect(() => {
    if (userInteracted) return; // Stop auto-slide if user interacted
  
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureImageList.length);
    }, 5000);
  
    return () => clearInterval(timer);
  }, [featureImageList, userInteracted]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const warehouseProducts = Array.isArray(productList)
    ? productList.filter((p) => p.category === "warehouse")
    : [];

    useEffect(() => {
      const carousel = document.getElementById("feature-products-carousel");
      let interval = null;
  
      if (!userSliding) {
        interval = setInterval(() => {
          if (carousel) {
            carousel.scrollBy({ left: 250, behavior: "smooth" });
          }
        }, 1300);
      }
  
      return () => clearInterval(interval);
    }, [productList, userSliding]);

    useEffect(() => {
      const carousel = document.getElementById("brand-carousel");
      let animationFrameId;
      let scrollAmount = 0;
  
      const step = () => {
        if (carousel) {
          carousel.scrollLeft += 0.9;
          scrollAmount += 0.9;
  
          if (scrollAmount >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
            scrollAmount = 0;
          }
        }
        animationFrameId = requestAnimationFrame(step);
      };
  
      animationFrameId = requestAnimationFrame(step);
  
      return () => cancelAnimationFrame(animationFrameId);
    }, []);

    /* 2) HAMKORLAR — xuddi shu logikani xohlasangiz */
    useEffect(() => {
      const el = document.getElementById("client-carousel"); // <— yangi id
      let id, sx = 0;

      const step = () => {
        if (el) {
          el.scrollLeft += 0.9;
          sx += 0.9;
          if (sx >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
            sx = 0;
          }
        }
        id = requestAnimationFrame(step);
      };
      id = requestAnimationFrame(step);
      return () => cancelAnimationFrame(id);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">

          {/* <===== HEADER CAROUSEL Section  =====> */}
          <section className="py-4 bg-white relative">
            <div className="container mx-auto px-4 relative w-full h-[700px] overflow-hidden rounded-3xl">

              {/* Carousel wrapper */}
              <div className="relative w-full h-full">

                {/* Slides */}
                {featureImageList?.length > 0 &&
                  featureImageList.map((slide, index) => (
                    <img
                      key={index}
                      src={slide?.image}
                      alt={`Slide ${index}`}
                      className={`
                        absolute top-0 left-0 w-full h-full object-cover rounded-3xl
                        border-[5px] border-[rgba(242,245,247,1)]
                        transition-all duration-700 ease-in-out
                        ${index === currentSlide
                          ? "opacity-100 scale-100 brightness-100 z-10"
                          : "opacity-60 scale-75 brightness-125 z-0"
                        }
                      `}
                    />
                  ))}

                {/* Left Arrow */}
                <Button
                  variant="outline"
                  size="icon"
                  className="z-20 absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 ease-in-out rounded shadow-md"
                  onClick={() => {
                    setUserInteracted(true); // stop auto-slide
                    const total = featureImageList?.length ?? 1;
                    setCurrentSlide((prev) => (prev - 1 + total) % total);
                  }}
                >
                  <ChevronLeftIcon className="w-4 h-4 text-black" />
                </Button>

                {/* Right Arrow */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setUserInteracted(true); // stop auto-slide
                    setCurrentSlide((prev) => (prev + 1) % featureImageList.length);
                  }}
                  className="z-20 absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 ease-in-out rounded shadow-md"
                >
                  <ChevronRightIcon className="w-4 h-4 text-black" />
                </Button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
                  {featureImageList.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`size-2.5 rounded-full border transition-all duration-200
                        ${index === currentSlide
                          ? "bg-[rgba(15,23,42,1)] border-white scale-100"
                          : "bg-white/40 border-gray-300 hover:bg-blue-500"}
                      `}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* <==== SHOPPING CATEGORY Section — Mouse Scroll Carousel ====> */}
          <section className="py-12 bg-[rgba(241,244,253,1)] relative">
            <div className="container mx-auto px-4">
              
              <div className="flex items-center justify-center">
                <h2 className="group relative mb-8 flex cursor-pointer items-center md:text-3xl text-[16px] font-bold uppercase">
                    <span className="relative inline-block px-2 
                                    drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)]
                                    group-hover:drop-shadow-[0_6px_4px_rgba(0,0,0,0.45)]">
                          {t("equipment_catalog")}
                      {/* Mavjud underline */}
                      <span className="pointer-events-none absolute left-1/2 -bottom-2 h-[2px] w-12 -translate-x-1/2 transform bg-slate-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h2>
              </div>

              {/* Arrows */}
              <div className="absolute top-[60%] left-[13%] z-10 -translate-y-1/2 hidden lg:block">
                <button
                  onClick={() => document.getElementById("categorycarousel").scrollBy({ left: -300, behavior: "smooth" })}
                  className="
                  p-2 rounded-full
                  bg-white/25                  
                  backdrop-blur-md             
                  backdrop-saturate-150        
                  border border-white/40       
                  shadow-lg                    
                  transition                   
                  hover:bg-white/35           
                "
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-[60%] right-[13%] z-10 -translate-y-1/2 hidden lg:block">
                <button
                  onClick={() => document.getElementById("categorycarousel").scrollBy({ left: 300, behavior: "smooth" })}
                  className="
                  p-2 rounded-full
                  bg-white/25                  
                  backdrop-blur-md             
                  backdrop-saturate-150        
                  border border-white/40       
                  shadow-lg                    
                  transition                   
                  hover:bg-white/35           
                "
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Horizontal scrollable category list */}
              <div
                id="categorycarousel"
                className="flex overflow-x-auto scroll-smooth gap-2 touch-pan-x pb-2"
                style={{ scrollbarWidth: 'none' }}
              >
                {categoriesWithIcon.map((categoryItem, i) => (
                   <Card
                   key={categoryItem.i}
                   onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                   className="   min-w-[200px] max-w-[220px] p-4 cursor-pointer transition-all duration-300
                   hover:shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset]
                   flex-shrink-0 group bg-white hover:bg-[rgba(15,23,42,1)] shadow-[-2px_3px_px_2px_rgba(34,60,80,0.2)] rounded-3xl
                   "
                 >
                   <CardContent className="flex flex-col items-center justify-center p-1">
                     {/* Icon */}
                     <categoryItem.icon
                       className="
                         w-16 h-16 mb-1 text-[rgba(15,23,42,1)]
                         group-hover:text-white transition-colors duration-300
                       "
                     />
                     <span className="font-bold text-center text-sm text-[rgba(15,23,42,1)] group-hover:text-white transition-colors duration-300">
                       {categoryItem.label}
                     </span>
                   </CardContent>
                 </Card>
                  ))}
              </div>
            </div>
          </section> 

          {/* <==== SHOPPING BRAND Section — Continuous Slide ====> */}
          <section className="py-12 bg-[rgba(241,244,253,1)] relative">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <h2 className="group relative mb-8 flex cursor-pointer items-center md:text-3xl text-[16px] font-bold uppercase">
                    <span className="relative inline-block px-2 
                                    drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)]
                                    group-hover:drop-shadow-[0_6px_4px_rgba(0,0,0,0.45)]">
                          {t("brands")}
                      {/* Mavjud underline */}
                      <span className="pointer-events-none absolute left-1/2 -bottom-2 h-[2px] w-12 -translate-x-1/2 transform bg-slate-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h2>
              </div>
          

              <div
                id="brand-carousel"
                className="flex overflow-x-auto scroll-smooth gap-4 touch-pan-x pb-2"
                style={{ scrollbarWidth: 'none' }}
              >
                {brandsWithIcon.concat(brandsWithIcon).map((brandItem, index) => (
                  <Card
                    key={index}
                    onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                    className="min-w-[200px] max-w-[200px] h-[170px] cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 rounded-xl border-2 border-gray-200"
                  >
                    
                    <CardContent className="flex flex-col items-center justify-center p-4 h-[160px]">
                      <img
                        src={brandItem.image  || brandItem.icon } // Make sure image property exists
                        alt={brandItem.label}
                        loading="lazy"
                        className="h-[70px] w-auto object-contain mb-2"
                      />
                      <span className="text-xl font-bold text-center uppercase">{brandItem.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* <==== WAREHOUSE PRODUCTS Carousel ====> */}
          <section className="py-12 relative">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <h2 className="mx-auto cursor-pointer relative inline-block md:text-3xl text-[16px] font-bold justify-center text-center mb-8 uppercase before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:w-full before:bg-[rgba(15,23,42,1)]
                before:origin-left before:scale-x-0
                before:transition-transform before:duration-300
                hover:before:scale-x-100 ">
                  {t("avialable_equipment")}
                </h2>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-[12.5%] -translate-y-1/2 z-10 hidden lg:block">
                    <button
                      onClick={() =>
                        document.getElementById("warehouse-carousel")
                          ?.scrollBy({ left: -300, behavior: "smooth" })
                      }
                      className="w-14 h-14 rounded-full flex items-center justify-center bg-white/25  backdrop-blur-md backdrop-saturate-150  border-[2px] border-gray-100 shadow-lg transition hover:bg-white/35           
                      "
                    >
                      <ChevronLeftIcon className="w-7 h-7 text-black  " />
                    </button>
                  </div>
              <div className="absolute top-[50%] right-[12.5%] z-10 -translate-y-1/2 hidden lg:block">
                <button  onClick={() => document.getElementById('warehouse-carousel').scrollBy({ left: 300, behavior: 'smooth' })}    
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-white/25  backdrop-blur-md backdrop-saturate-150  border-[2px] border-gray-100 shadow-lg transition hover:bg-white/35           
                  ">
                  <ChevronRightIcon className="w-7 h-7 " />
                </button>
              </div>

              <div
                id="warehouse-carousel"
                className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 pb-2 rounded-3xl"
              >
                {warehouseProducts && warehouseProducts.length > 0 &&
                  warehouseProducts.map((productItem, idx) => (
                    <div
                      key={idx}
                      className="min-w-[340px] max-w-sm flex-shrink-0"
                    >
                      <ShoppingProductTile
                        product={productItem}
                        handleGetProductDetails={handleGetProductDetails}
                        handleAddtoCart={handleAddtoCart}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* <=== ALL PRODUCTS AUTOPLAY CAROUSEL ===> */}
          <section className="py-12 bg-[rgba(255,255,255,1)] relative">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <h2 className="mx-auto cursor-pointer relative inline-block md:text-3xl text-[16px]  font-bold justify-center text-center mb-8 uppercase before:absolute before:bottom-0 before:left-0
              before:h-[2px] before:w-full before:bg-[rgba(15,23,42,1)]
              before:origin-left before:scale-x-0
              before:transition-transform before:duration-300
              hover:before:scale-x-100">
                  {t("featured_products")}
                </h2>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-[50%] left-[12.5%] z-10 -translate-y-1/2 hidden lg:block">
                <button
                  onClick={() => document.getElementById("feature-products-carousel").scrollBy({ left: -300, behavior: "smooth" })}
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-white/25  backdrop-blur-md backdrop-saturate-150  border-[2px] border-gray-100 shadow-lg transition hover:bg-white/35           
                  "
                >
                  <ChevronLeftIcon className="w-7 h-7 " />
                </button>
              </div>
              <div className="absolute top-[50%] right-[12.5%] z-10 -translate-y-1/2 hidden lg:block">
                <button
                  onClick={() => document.getElementById("feature-products-carousel").scrollBy({ left: 300, behavior: "smooth" })}
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-white/25  backdrop-blur-md backdrop-saturate-150  border-[2px] border-gray-100 shadow-lg transition hover:bg-white/35           
                  "
                >
                  <ChevronRightIcon className="w-7 h-7  " />
                </button>
              </div>


              <div
                id="feature-products-carousel"
                className="flex overflow-x-auto scroll-smooth gap-6 pb-2 touch-pan-x rounded-3xl"
                style={{ scrollbarWidth: 'none' }}
                onMouseDown={() => setUserSliding(true)}
                onMouseUp={() => setUserSliding(false)}
                onMouseLeave={() => setUserSliding(false)}
                onTouchStart={() => setUserSliding(true)}
                onTouchEnd={() => setUserSliding(false)}
              >
                {productList && productList.length > 0 &&
                  productList.map((productItem, idx) => (
                    <div
                      key={idx}
                      className="min-w-[340px] max-w-sm flex-shrink-0"
                    >
                      <ShoppingProductTile
                        product={productItem}
                        handleGetProductDetails={handleGetProductDetails}
                        handleAddtoCart={handleAddtoCart}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </section>

            {/* <=== ABOUT OUR SERVICES ===> */}
            <section className="py-12 relative bg-[rgba(241,244,253,1)] ">
            <div className="container mx-auto px-4 ">
              <div className="flex items-center justify-center">
                  <h2 className="group relative mb-8 flex cursor-pointer items-center md:text-3xl text-[16px] font-bold uppercase">
                    <span className="relative inline-block px-2 
                                    drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)]
                                    group-hover:drop-shadow-[0_6px_4px_rgba(0,0,0,0.45)]">
                      {t("our_services")}
                      {/* Mavjud underline */}
                      <span className="pointer-events-none absolute left-1/2 -bottom-2 h-[2px] w-12 -translate-x-1/2 transform bg-slate-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h2>
              </div>

              <div className="gap-2 w-full grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4  ">
                {/* MAIN NAME  */}
                <div className="flex flex-col gap-2 justify-evenly  h-[200px] bg-[rgba(255,255,255,1)] items-center cursor-pointer group rounded-lg">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 384 512"
                  className="text-[rgba(15,23,42,1)] fill-current size-[80px] group-hover:animate-jump-up" 
                  >
                  <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>
                        <p className="font-bold text-[rgba(15,23,42,1)]">{t("all_goods_are_certified")} </p>
                </div>

                  {/* MEYNU */}
                  <div className="flex flex-col gap-2 justify-evenly  h-[200px] bg-[rgba(255,255,255,1)] items-center cursor-pointer group rounded-lg">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 576 512"
                  className="text-[rgba(15,23,42,1)] fill-current size-[80px] group-hover:animate-jump-up" 
                  > 
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                  </svg>
                        <p className="font-bold text-[rgba(15,23,42,1)]">{t("delivery_throughout_country")}</p>
                  </div>
                  {/* ABOUT */}
                  <div className="flex flex-col gap-2 justify-evenly  h-[200px] bg-[rgba(255,255,255,1)] items-center cursor-pointer group rounded-lg">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        className="text-[rgba(15,23,42,1)] fill-current size-[80px] group-hover:animate-jump-up" 
                        > 
                        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        <p className="font-bold text-[rgba(15,23,42,1)]">{t("quality_assurance")}</p>
                  </div>
                  {/* LOCATION DIV */}
                  <div className="flex flex-col gap-2 justify-evenly  h-[200px] bg-[rgba(255,255,255,1)] items-center cursor-pointer group  rounded-lg">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 576 512" 
                  className="text-[rgba(15,23,42,1)] fill-current size-[80px] group-hover:animate-jump-up" 
                  > 
                  <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.2-8.4c0 0 0 0 0 0s0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20z"/></svg>
                        <p className="font-bold text-[rgba(15,23,42,1)]">{t("payment_method")}</p>
                  </div>
              </div>
            </div>
          </section>

          {/* <==== OUR CLIENTS  ====> */}
          <section className="py-12 bg-[rgba(241,244,253,1)] relative">
            <div className="container mx-auto px-4">
              {/* top side text */}
                <div className="flex items-center justify-center">
                  <h2 className="group relative mb-8 flex cursor-pointer items-center md:text-3xl text-[16px] font-bold uppercase">
                    <span className="relative inline-block px-2  
                                    drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)]
                                    group-hover:drop-shadow-[0_6px_4px_rgba(0,0,0,0.45)]">
                      {t("our_clients")}
                      {/* Mavjud underline */}
                      <span className="pointer-events-none absolute left-1/2 -bottom-2 h-[2px] w-12 -translate-x-1/2 transform bg-slate-900 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </h2>
                </div>
              {/* conten section */}
              <div
                id="client-carousel"
                className="flex overflow-x-auto scroll-smooth gap-4 touch-pan-x pb-2 border-0"
                style={{ scrollbarWidth: 'none' }}
              >
                {ClientIcon.concat(ClientIcon).map((clientItem, index) => (
                  <Card
                    key={index}
                    className="min-w-[200px] max-w-[200px] cursor-pointer border-0 "
                  >
                    
                    <CardContent className="flex flex-col items-center justify-center p-4 h-auto w-full border-0">
                      <img
                        src={clientItem.image  || clientItem.icon } // Make sure image property exists
                        alt={clientItem.label}
                        loading="lazy"
                        className="h-[100px] w-auto object-contain mb-2  object-center"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <ProductDetailsDialog
            open={openDetailsDialog}
            setOpen={setOpenDetailsDialog}
            productDetails={productDetails}
          />

    </div>
  );
}

export default ShoppingHome;
