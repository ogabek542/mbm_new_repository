const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
  deleteFeatureImage,
  editFeatureImage,
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);
router.delete("/delete/:id", deleteFeatureImage); // add this route
router.put("/edit/:id", editFeatureImage); // ✅ edit route

module.exports = router;
