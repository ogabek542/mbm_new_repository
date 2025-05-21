import { useTranslation } from "react-i18next";


  export const useRegisterFormControls = () => {
    const { t } = useTranslation();
  
    return [
      {
        name: "userName",
        label: t("form_username_label"),
        placeholder: t("form_username_placeholder"),
        componentType: "input",
        type: "text",
      },
      {
        name: "email",
        label: t("form_email_label"),
        placeholder: t("form_email_placeholder"),
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: t("form_password_label"),
        placeholder: t("form_password_placeholder"),
        componentType: "input",
        type: "password",
      },
    ];
  };

  export const useLoginFormControls = () => {
    const { t } = useTranslation();
  
    return [
      {
        name: "email",
        label: t("login_username_label"),
        placeholder: t("login_username_placeholder"),
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: t("login_password_label"),
        placeholder: t("login_password_placeholder"),
        componentType: "input",
        type: "password",
      },
    ]
  
  };
  
  // <=== add item elemt all of values ===> //
  export const addProductFormElements = () => {
    const { t } = useTranslation();

    return  [
    {
      label: t("title"),
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: t("enter_product_title_text"),
    },
    {
      label: t("description_text"),
      name: "description",
      componentType: "textarea",
      placeholder: t("enter_product_description_text"),
    },
    {
      label: t("category_text"),
      name: "category",
      componentType: "select",
      options: [
        { id: "medical", label: t("medical_equipment") },
        { id: "construction", label: t("equipment_production_of_construction_and_building") },
        { id: "packaging", label: t("packaging_equipment") },
        { id: "metal", label: t("metal_and_iron_processing_equipment") },
        { id: "furniture", label: t("furniture_production_equipment") },
        { id: "woodworking", label: t("woodworking_equipment") },
        { id: "processing", label: t("processing_equipment") },
        { id: "light_industrial", label: t("light_industrial_equipment") },
        { id: "warehouse", label: t("warehouse_equipment") },
        { id: "cooling_equipment", label: t("industrial_cooling_equipment")},
        { id: "printing", label: t("printing_equipment") },
        { id: "paper_process", label: t("paper_processing") },
        { id: "weaving_equipment", label: t("weaving_equipment") },
        { id: "recycling", label: t("recycling") },
        { id: "laboratory_equipment", label: t("laboratory_equipment") },
        { id: "laser_equipment", label: t("laser_equipment") },
        { id: "hardware_windows_frames", label: t("hardware_for_windows_and_frames") },
        { id: "agriculture", label: t("agriculture") },
        { id: "service_sales", label: t("service_and_sales") },
        { id: "copyright", label: t("copyright") },
        { id: "other_equipment", label: t("other_equipment") },
      ],
    },
    {
      label: t("brands"),
      name: "brand",
      componentType: "select",
      options: [
        { id: "teneth", label: "Teneth", },
        { id: "oree", label: "OREE LASER",  },
        { id: "sengfeng", label: "Sengfeng",  },
        { id: "audley", label: "Audley", },
        { id: "reliable", label: "Reliable", },
        { id: "harsle", label: "Harsle", },
        { id: "king_machinery", label: "King Machinery",  },
        { id: "zhaoli", label: "Zhaoli",  },
        { id: "cklaser", label: "CKLASER",  },
        { id: "yafei", label: "Yafei",  },
        { id: "guandiao", label: "Guandiao",  },
        { id: "kingpower", label: "King Power",  },
        { id: "blue_sun", label: "Blue Sun", },
        { id: "yidiao", label: "Yidiao",  },
        { id: "ntek", label: "Ntek", },
        { id: "funsun", label: "Funsun", },
        { id: "yicai", label: "Yicai",  },
        { id: "win_star", label: "Win Star",  },
        { id: "purete", label: "Purete",  },
        { id: "airo", label: "Airo", },
        { id: "pref", label: "Pref", },
      ],
    },
    {
      label: t("price_text"),
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: t("enter_product_price_text"),
    },
    {
      label: t("sale_price_text"),
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: t("enter_sale_price_optional_text"),
    },
    {
      label: t("total_stock_text"),
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: t("enter_total_stock_text"),
    },
  ];

}
  
  export const shoppingViewHeaderMenuItems = (t) => [
    {
      id: "home",
      label: t("menu_home"),
      path: "/shop/home",
    },
    {
      id: "products",
      label: t("menu_products"),
      path: "/shop/listing",
    },
    {
      id: "aboutme",
      label: t("menu_aboutme"),
      path: "/shop/aboutme",
    },
    {
      id: "news",
      label: t("menu_news"),
      path: "/shop/news",
    },
    {
      id: "connection",
      label: t("menu_connection"),
      path: "/shop/connection",
    },
   
  ];
  
  export const categoryOptionsMap = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    news: "Yangiliklar",
    connection: "Aloqa",
  };
  
  export const brandOptionsMap = {
    teneth: "Teneth",
    oree: "OREE LASER",
    sengfeng: "Sengfeng",
    audley: "Audley",
    reliable: "Reliable", 
    harsle: "Harsle",
    king_machinery: "King Machinery",
    zhaoli: "Zhaoli",
    cklaser: "CKLASER",
    yafei: "Yafei",
    guandiao: "Guandiao",
    kingpower: "King Power",
    blue_sun: "Blue Sun",
    yidiao: "Yidiao",
    ntek: "Ntek",
    funsun: "Funsun",
    yicai: "Yicai",
    win_star: "Win Star",
    purete: "Purete",
    airo: "Airo",
    pref: "Pref",

  };
  
  export const filterOptions = (t) =>  
  ({
    category: [
      { id: "medical", label: t("medical_equipment") },
      { id: "construction", label: t("equipment_production_of_construction_and_building") },
      { id: "packaging", label: t("packaging_equipment") },
      { id: "metal", label: t("metal_and_iron_processing_equipment") },
      { id: "furniture", label: t("furniture_production_equipment") },
      { id: "woodworking", label: t("woodworking_equipment") },
      { id: "processing", label: t("processing_equipment") },
      { id: "light_industrial", label: t("light_industrial_equipment") },
      { id: "warehouse", label: t("warehouse_equipment") },
      { id: "cooling_equipment", label: t("industrial_cooling_equipment")},
      { id: "printing", label: t("printing_equipment") },
      { id: "paper_process", label: t("paper_processing") },
      { id: "weaving_equipment", label: t("weaving_equipment") },
      { id: "recycling", label: t("recycling") },
      { id: "laboratory_equipment", label: t("laboratory_equipment") },
      { id: "laser_equipment", label: t("laser_equipment") },
      { id: "hardware_windows_frames", label: t("hardware_for_windows_and_frames") },
      { id: "agriculture", label: t("agriculture") },
      { id: "service_sales", label: t("service_and_sales") },
      { id: "copyright", label: t("copyright") },
      { id: "other_equipment", label: t("other_equipment") },
    ],
    brand: [
      { id: "teneth", label: "Teneth", },
      { id: "oree", label: "OREE LASER",  },
      { id: "sengfeng", label: "Sengfeng",  },
      { id: "audley", label: "Audley", },
      { id: "reliable", label: "Reliable", },
      { id: "harsle", label: "Harsle", },
      { id: "king_machinery", label: "King Machinery",  },
      { id: "zhaoli", label: "Zhaoli",  },
      { id: "cklaser", label: "CKLASER",  },
      { id: "yafei", label: "Yafei",  },
      { id: "guandiao", label: "Guandiao",  },
      { id: "kingpower", label: "King Power",  },
      { id: "blue_sun", label: "Blue Sun", },
      { id: "yidiao", label: "Yidiao",  },
      { id: "ntek", label: "Ntek", },
      { id: "funsun", label: "Funsun", },
      { id: "yicai", label: "Yicai",  },
      { id: "win_star", label: "Win Star",  },
      { id: "purete", label: "Purete",  },
      { id: "airo", label: "Airo", },
      { id: "pref", label: "Pref", },
    ],
  });
  
  export const sortOptions  = (t) => ([
    { id: "price-lowtohigh", label: t("price_low_to_high") },
    { id: "price-hightolow", label: t("price_high_to_low") },
    { id: "title-atoz", label: t("title_a_to_z") },
    { id: "title-ztoa", label: t("title_z_to_a") },
  ]);
  
  export const addressFormControls = [
    {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
    },
    {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
    },
    {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
    },
  ];

