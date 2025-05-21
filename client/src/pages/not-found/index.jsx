import { useTranslation } from "react-i18next";




function NotFound() {
   const { t, i18n } = useTranslation();

    return ( 
        <div>
           {t("note_found")}
        </div>
     );
}

export default NotFound;