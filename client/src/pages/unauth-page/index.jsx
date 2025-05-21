import { useTranslation } from "react-i18next";




function UnauthPage() {
    const { t } = useTranslation();

    return ( 
        <div>
            <h1>{t("you_dont_have_access_to_view_this_page_text")}</h1>
        </div>
     );
}

export default UnauthPage;