import { useState } from "react";
import React  from 'react';
import { useTranslation } from "react-i18next";


const ConnectionPage = () => {
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState("idle");
  const { t } = useTranslation();



  const BOT_TOKEN  = "8005795345:AAHpA62G8TqQJ45AOhmiQSaFmXcvSqcCTWA";
  const CHAT_ID   = "6026141610";

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");

    const text =
      `<b>${t("reconnection_text")}</b>\n` +
      `<b>🆕 ${t("contact_text")}</b>\n` +
      `<b>${t("name_text")}:</b> ${name}\n` +
      `<b>${t("phone_text")}:</b> ${phone}\n` +
      `<b>${t("message_text")}:</b> ${message}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id:    CHAT_ID,
            parse_mode: "HTML",
            text,
          }),
        }
      );
      const data = await res.json();
      if (data.ok) {
        setStatus("sent");
        setName(""); setPhone(""); setMessage("");
      } else {
        console.error("Telegram error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };



  return (
    <div className="flex flex-col h-auto  bg-[rgba(237,237,237,1)] m-2 ">
      {/* <=== TOP SIDE SVG ICONS DIV ===> */}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-8 bg-white flex flex-col items-center ">
        <p className="text-3xl font-bold mb-6 uppercase">{t("contact_text")} </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {/* LOCATION */}
            <div className='flex flex-col direction-reverse w-auto  border items-center justify-center group gap-2 cursor-pointer p-2  rounded-xl shadow-[-3px_5px_10px_4px_rgba(34,60,80,0.2)]'>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512" 
              className="text-[rgba(240,88,88,1)] fill-current size-[70px] group-hover:animate-jump-up" 
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <p className='text-[rgba(15,23,42,1)] font-bold uppercase'>{t("address_text")}</p> 
                <p className='text-gray-500 font-semibold flex justify-center'>
                  {t("address_first_text")}
                  <br></br>
                  {t("address_second_text")}
                </p>
            </div>
            {/* EMAIL  */}
            <div className='flex flex-col direction-reverse w-auto  border items-center justify-center group gap-2 cursor-pointer p-2 rounded-xl shadow-[-3px_5px_10px_4px_rgba(34,60,80,0.2)]'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                className="text-[rgba(240,88,88,1)] fill-current size-[70px] group-hover:animate-jump-up" 
                >
                  <path d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                <p className='text-[rgba(15,23,42,1)] font-bold uppercase'>{t("form_email_label")}</p> 
                <p className='text-gray-500 font-semibold flex justify-center'>
                  {t("gmail_address_text")}
                </p>
            </div>
            {/* PHONE NUMBER */}
            <div className='flex flex-col direction-reverse w-auto  border items-center justify-center group gap-2 cursor-pointer p-2 rounded-xl shadow-[-3px_5px_10px_4px_rgba(34,60,80,0.2)]'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                className="text-[rgba(240,88,88,1)] fill-current size-[70px] group-hover:animate-jump-up" 
                >
                  <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                <p className='text-[rgba(15,23,42,1)] font-bold uppercase '>{t("phone_number_text")}</p> 
                <p className='text-gray-500 font-semibold flex justify-center'>
                    {t("real_phone_number_one")}
                </p>
            </div>
          </div>
        </div>
        {/* <==== BOTTOM SIDE LOCATION ====> */}
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-8 bg-white flex flex-col items-center">
        <p className="text-3xl font-bold mb-6">{t("reconnection_text")}</p>
            <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {/* <==== FORM ====> */}
              <div className='flex flex-col direction-reverse w-auto  border items-center justify-center group gap-2 cursor-pointer p-2 shadow-[-2px_4px_8px_3px_rgba(34,60,80,0.2)]'>
              <form className="flex flex-col gap-4 w-full p-4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="font-semibold">{t("name_simply_text")}</span>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 p-2 border rounded focus:outline-none focus:ring w-full"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">{t("phone_number_text")}</span>
            <input
              type="tel"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="mt-1 p-2 border rounded focus:outline-none focus:ring"
              placeholder="+998901234567"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">{t("message_text")} </span>
            <textarea
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="mt-1 p-2 border rounded focus:outline-none focus:ring"
              rows={4}
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 py-2 bg-[rgba(15,23,42,1)] text-white font-bold rounded hover:bg-[rgba(15,23,45,1)] disabled:opacity-50"
          >
            {status === "sending" ? t("sending_button_text") : t("send_button_text")}
          </button>

          {status === "sent" && (
            <p className="text-green-600 mt-2"> {t("successfully_sent")} 👍</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">
              {t("something_went_wrong_please_try_again")}
            </p>
          )}
        </form>
              </div>
              {/* <==== MAP ====> */}
              <div className='flex flex-col direction-reverse w-auto  border items-center justify-center group gap-2 cursor-pointer p-2  shadow-[-2px_4px_8px_3px_rgba(34,60,80,0.2)]'>
                <div className="relative w-full h-[95%] pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        title="MBM Business Machinery Location"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1501.0235891991797!2d69.238909!3d41.198945!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1744985379288!5m2!1sru!2sus"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
              </div>

            </div>
        </div>
    </div>
    
  )
}

export default ConnectionPage
