import img from "../../assets/checkout_image.webp";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { clearCart } from "@/store/shop/cart-slice";
import { useTranslation } from "react-i18next";



function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const [formAddress, setFormAddress] = useState({
    address: "",
    city: "",
    // pincode: "",
    phone: "",
    notes: "",
  });

  const [isPaymentStart, setIsPaymentStart] = useState(false);

  const totalCartAmount =
    cartItems?.items?.length > 0
      ? cartItems.items.reduce(
          (sum, item) =>
            sum +
            (item?.salePrice > 0 ? item?.salePrice : item?.price) * item?.quantity,
          0
        )
      : 0;

  async function sendOrderToTelegram(orderData) {
    const TELEGRAM_BOT_TOKEN = "8005795345:AAHpA62G8TqQJ45AOhmiQSaFmXcvSqcCTWA";
    const TELEGRAM_CHAT_ID = "6026141610";

    const message = `
🛒 <b>${t("new_order_received")}!</b>
👤 <b>${t("name_text")}:</b> ${orderData.userName}
📧 <b>${t("form_email_label")}:</b> ${orderData.email}
🏠 <b>${t("address_text")}:</b>
• ${orderData.addressInfo.address}, ${orderData.addressInfo.city}
• ${t("phone_text")}: ${orderData.addressInfo.phone}
• ${t("notes_text")}: ${orderData.addressInfo.notes || "-"}
🛍️ <b>${t("cart_items_text")}:</b>
${orderData.cartItems.map(item => `- ${item.title} x ${item.quantity} = $${item.price * item.quantity}`).join('\n')}
💵 <b>${t("total_amount_text")}:</b> $${orderData.totalAmount}
🕰️ <b>${t("order_time_text")}:</b> ${orderData.orderDate}
`;

    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  }


  async function handleInitiatePayment() {
    if (!cartItems?.items?.length) {
      toast({ title: t("your_cart_is_empty"), variant: "destructive" });
      return;
    }
  
    if (!formAddress.address || !formAddress.city || !formAddress.phone) {
      toast({ title: t("please_fill_all_address_fields"), variant: "destructive" });
      return;
    }
  
    const cleanCartItems = cartItems.items.map(item => ({
      productId: item?.productId,
      quantity: item?.quantity,
    }));
  
    const orderData = {
      userId: user?.id,
      cartItems: cleanCartItems,
      addressInfo: {
        address: formAddress.address,
        city: formAddress.city,
        phone: formAddress.phone,
        notes: formAddress.notes,
      },
      totalAmount: totalCartAmount,
    };
  
    const telegramData = {
      userName: user?.userName,
      email: user?.email,
      cartItems: cartItems.items.map(item => ({
        title: item?.title,
        price: item?.salePrice > 0 ? item?.salePrice : item?.price,
        quantity: item?.quantity,
      })),
      addressInfo: {
        address: formAddress.address,
        city: formAddress.city,
        phone: formAddress.phone,
        notes: formAddress.notes,
      },
      totalAmount: totalCartAmount,
      orderDate: new Date().toLocaleString(),
    };
  
    try {
      await sendOrderToTelegram(telegramData);
  
      const result = await dispatch(createNewOrder(orderData));
      if (result?.payload?.success) {
        toast({ title: "Order created successfully", variant: "success" });
  
        // ✅ NEW: Clear cart from backend after order success
        await axios.delete(import.meta.env.VITE_API_BASE_URL + `/api/shop/cart/clear/${user.id}`);
      } else {
        toast({ title: t("order_created_in_telegram_but_backend_failed"), variant: "destructive" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({ title: t("order_sent_to_telegram_but_backend_crashed"), variant: "destructive" });
    }
  
    // ✅ Clear frontend Redux and storage
    dispatch(clearCart());
    localStorage.removeItem("cartItems");
    sessionStorage.removeItem("cartItems");
    sessionStorage.setItem("checkoutComplete", "true");
  
    setIsPaymentStart(true);
  
    setTimeout(() => {
      navigate("/shop/home");
    }, 500);
  }


  useEffect(() => {
    if (approvalURL) {
      window.location.href = approvalURL;
    }
  }, [approvalURL]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    const checkoutDone = sessionStorage.getItem("checkoutComplete");
  
    if (savedCart && checkoutDone !== "true") {
      dispatch(loadCartFromStorage(JSON.parse(savedCart)));
    }
  
    // Always clear checkoutComplete flag after checking
    sessionStorage.removeItem("checkoutComplete");
  }, []);

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" alt="Checkout Banner" />
      </div>

      {/* Main checkout card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{t("cart_address_summary")}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">

            {/* Cart Items */}
            <div className="flex flex-col gap-3">
              {cartItems?.items?.length > 0
                ? cartItems.items.map((item, idx) => (
                    <UserCartItemsContent key={idx} cartItem={item} />
                  ))
                : <p>{t("no_cart_items")}</p>}
            </div>

            {/* User Address Form */}
            <div className="flex flex-col gap-2 mt-6 p-4 border rounded-lg bg-gray-50">
              <h3 className="font-bold mb-2">{t("enter_shipping_address")}</h3>
              <input
                type="text"
                placeholder={t("address_text")}
                value={formAddress.address}
                onChange={(e) => setFormAddress({ ...formAddress, address: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder={t("city_text")}
                value={formAddress.city}
                onChange={(e) => setFormAddress({ ...formAddress, city: e.target.value })}
                className="border p-2 rounded"
              />
              {/* <input
                type="text"
                placeholder="Pincode"
                value={formAddress.pincode}
                onChange={(e) => setFormAddress({ ...formAddress, pincode: e.target.value })}
                className="border p-2 rounded"
              /> */}
              <input
                type="text"
                placeholder={t("phone_text")}
                value={formAddress.phone}
                onChange={(e) => setFormAddress({ ...formAddress, phone: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder={t("notes_text")}
                value={formAddress.notes}
                onChange={(e) => setFormAddress({ ...formAddress, notes: e.target.value })}
                className="border p-2 rounded"
              />
            </div>

            {/* Total */}
            <div className="flex justify-between mt-4">
              <span className="font-bold">{t("total_amount_text")}:</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>

            {/* Checkout button */}
            <Button onClick={handleInitiatePayment} className="w-full mt-4">
              {isPaymentStart ? t("processing_time_text") : t("checkout_now")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
