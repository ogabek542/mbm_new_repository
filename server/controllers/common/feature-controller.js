const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.body;

    console.log(image, "image");

    const featureImages = new Feature({
      image,
    });

    await featureImages.save();

    res.status(201).json({
      success: true,
      data: featureImages,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const images = await Feature.find({});

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const deleteFeatureImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Feature.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    res.json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const editFeatureImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image } = req.body;

    const updated = await Feature.findByIdAndUpdate(
      id,
      { image },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while updating image",
      error: error.message,
    });
  }
};

module.exports = { addFeatureImage, getFeatureImages,deleteFeatureImage, editFeatureImage};
