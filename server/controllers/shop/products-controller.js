// server/controllers/shop/products-controller.js
const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    // default to empty strings, not arrays
    const { category = "", brand = "", sortBy = "price-lowtohigh" } = req.query;

    // build Mongo filters
    const filters = {};
    if (category) {
      filters.category = {
        $in: category
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c),
      };
    }
    if (brand) {
      filters.brand = {
        $in: brand
          .split(",")
          .map((b) => b.trim())
          .filter((b) => b),
      };
    }

    // build sort object
    const sort = {};
    switch (sortBy.toLowerCase()) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;
      case "title-ztoa":
        sort.title = -1;
        break;
      default:
        sort.price = 1;
    }

    const products = await Product.find(filters).sort(sort);
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in getFilteredProducts:", error);
    return res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // basic 24‑hex‑char check for a Mongo ObjectId
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Error in getProductDetails:", error);
    return res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

module.exports = {
  getFilteredProducts,
  getProductDetails,
};
