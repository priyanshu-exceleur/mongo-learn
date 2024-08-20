const Product = require("../model/product");

const createProducts = async (req, res) => {
    try {
        const creatingProduct = new Product(req.body);

        const newCreatePro = await creatingProduct.save();

        res.json(newCreatePro);

        console.log(newCreatePro);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
        console.error("Error creating product:", error);
    }
};

module.exports = {
    createProducts,
};
