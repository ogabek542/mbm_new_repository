// Updated AdminDashboard.jsx
import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage,
} from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { t } = useTranslation();

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  function handleDeleteImage(imageId) {
    dispatch(deleteFeatureImage(imageId)).then((res) => {
      if (res?.payload?.success) {
        dispatch(getFeatureImages());
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="p-4">
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      />

      <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
        {t("upload_text")}
      </Button>

      {/* All Uploaded Images */}
      <div className="flex flex-col gap-4 mt-5">
      {featureImageList.map((featureImgItem) => (
      <div key={featureImgItem._id} className="relative">
        <img
          src={featureImgItem.image}
          className="w-full h-[500px] object-cover rounded-t-lg"
        />
        <Button
          onClick={() => dispatch(deleteFeatureImage(featureImgItem._id)).then(() => dispatch(getFeatureImages()))}
          className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white"
        >
          {t("delete_text")}
        </Button>
      </div>
    ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
