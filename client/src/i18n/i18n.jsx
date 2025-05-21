import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/translationEnglish";
import ru from "./locales/translationRussian";
import uz from "./locales/translationUzbek";

// Language resources
const resources = {en,ru,uz };

i18n
  .use(initReactI18next) // Connects i18n to React
  .init({
    resources,
    lng: "uz", // Default language
    lng: localStorage.getItem("language") || "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
