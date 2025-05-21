import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";





function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {

  const { t } = useTranslation();



  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>{t("address_text")}: {addressInfo?.address}</Label>
        <Label>{t("city_text")}: {addressInfo?.city}</Label>
        <Label>{t("pincode_text")}: {addressInfo?.pincode}</Label>
        <Label>{t("phone_text")}: {addressInfo?.phone}</Label>
        <Label>{t("notes_text")}: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>{t("edit_text")}</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>{t("delete_text")}</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
