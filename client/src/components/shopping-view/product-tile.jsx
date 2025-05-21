import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  const { t } = useTranslation();

  return (
    
    <Card
      className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden
              shadow-[-3px_5px_10px_4px_rgba(34,60,80,0.2)] p-[4px] bg-white"
    >
      {/* Karta bosilganda mahsulot tafsilotlari */}
      <div onClick={() => handleGetProductDetails(product?._id)}>
        {/* Rasm */}
        <div className="relative group  overflow-hidden">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-3xl
                   transition-transform duration-300 ease-in-out
                   transform-gpu group-hover:scale-125 "
          />

          {/* Badge’lar */}
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-3 left-3 bg-[rgba(253,93,81,1)] hover:bg-red-600 p-[5px] px-[15px] font-semibold">
              {t("out_of_stock_text")}
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-3 left-3 bg-[rgba(253,93,81,1)] hover:bg-red-600 p-[5px] px-[15px] font-semibold">
              {`${t("only_product_title_text")} ${product?.totalStock} ${t(
                "only_product_recieve_title_text"
              )}`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-3 left-3 bg-[rgba(253,93,81,1)] hover:bg-red-600 p-[5px] px-[15px] text-white font-semibold">
              {t("sale_text")}
            </Badge>
          ) : null}
        </div>

        {/* Kontent – faqat yuqori burchaklar radiusli */}
        <CardContent className="p-4 rounded-t-3xl">
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>

          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-muted-foreground uppercase">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 && (
              <span className="text-lg font-semibold text-primary">
                ${product?.salePrice}
              </span>
            )}
          </div>
        </CardContent>
      </div>

      {/* Footer */}
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            {t("out_of_stock_text")}
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            {t("add_to_cart_text")}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
