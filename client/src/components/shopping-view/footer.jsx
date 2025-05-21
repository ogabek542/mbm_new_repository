import React from 'react'
import { useTranslation } from "react-i18next";
import {Handshake} from "lucide-react";

  const currentYear = new Date().getFullYear();

const Footer = () => {

  const { t, i18n } = useTranslation();

  return (
    <footer className="relative w-full bg-[rgba(15,23,42,1)] h-auto">
    <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="gap-2 w-full grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4  ">
            {/* MAIN NAME  */}
              <div className="flex flex-col gap-2 ">
                {/* business name */}
                <div className="flex items-center gap-1 ">
                  <Handshake className=" text-white" />
                  <p className="text-lg font-semibold inline-block height-auto  text-white">
                    {t("business_name")}
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col items-start  my-1  text-white">
                  <p className="font-semibold text-white">
                    "OOO {t("business_name")}"
                  </p>{" "}
                  <p className=" text-white">
                    {t("your_trusted_business_partner")}
                  </p>
                </div>
                {/* <====  Bottom Side Icon Links ====> */}
                <div className="flex space-x-7 text-gray-600 my-2">
                  {/* Example SVG icons */}
                  {/* telegram */}
                  <a
                    href="https://t.me/Odiljon_3097"
                    className="opacity-75 transition-opacity hover:opacity-100  text-white"
                  >
                    {/* Replace with your own icon */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </a>
                  {/* instagram */}
                  <a
                    href="https://www.instagram.com/odiljon.rasulov.3097/"
                    className="opacity-75 transition-opacity hover:opacity-100  text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  {/* facebook */}
                  <a
                    href="https://www.facebook.com/odiljon.rasulov.2025"
                    className="opacity-75 transition-opacity hover:opacity-100  text-white "
                  >
                    <svg
                      className="h-5 w-5 "
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                  </a>
                  {/* youtube */}
                  <a
                    href="#" /* YouTube manzilingizni yozing */
                    className="opacity-75 transition-opacity hover:opacity-100 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* YouTube SVG ikonka */}
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* MEYNU */}
              <div className="flex flex-col  gap-5">
                <div>
                <h6 className="mb-3 text-lg  text-white uppercase font-semibold">
                  {t("menu_home")}
                  </h6>
                  <ul className=" flex flex-col space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-white transition-colors hover:text-gray-300"
                      >
                        {t("menu_products")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white transition-colors hover:text-gray-300"
                      >
                      {t("menu_aboutme")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white transition-colors hover:text-gray-300"
                      >
                        {t("menu_news")}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition-colors hover:text-gray-300"
                      >
                        {t("menu_connection")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* ABOUT */}
              <div className="flex flex-col  gap-5">
                <div>
                  <h6 className="mb-3 text-lg  text-white uppercase font-semibold">
                    {t("connection_text")}
                  </h6>
                  <ul className=" flex flex-col space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center opacity-75 transition-opacity hover:opacity-100  text-white gap-2"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                        {t("address_first_text")} <br /> {t("address_second_text")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center opacity-75 transition-opacity hover:opacity-100  text-white gap-2"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z" />
                        </svg>
                        {t("real_phone_number_one")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center opacity-75 transition-opacity hover:opacity-100  text-white gap-2"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>
                        {t("gmail_address_text")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* LOCATION DIV */}
              <div className="flex flex-col">
                <p className="text-white font-semibold">
                  {t("location_pointer_text")}
                </p>

                {/* Responsive wrapper */}
                <div className="w-full rounded overflow-hidden">
                  <div className="relative w-full pb-[56.25%]">
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
            {/* Divider */}
            <div className="my-12 border-t border-gray-200"></div>
            {/* <=== Bottom Bar ===> */}
            <div className="flex  items-center justify-center gap-4 md:flex-row md:justify-center">
              <p className="text-sm text-white">
                &copy; 
                {currentYear}{" "}
                <a
                  href="#"
                  className="font-medium  hover:underline text-white mr-1"
                >
                  {t("business_name")}
                </a>
                {t("all_rights_reserved")} | Developed By <span className='font-bold'><a href="https://t.me/Assassin_0221">ASSASSIN</a></span>  
              </p>
            </div>
    </div>
  </footer>
  )
}

export default Footer
