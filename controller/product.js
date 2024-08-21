const Product = require("../model/product");

const createProducts = async (req, res) => {
    try {
        const creatingProduct = new Product(req.body);
        const newCreatePro = await creatingProduct.save();
        res.status(201).json(newCreatePro)
        console.log(newCreatePro);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
        console.error("Error creating product:", error);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const AllProd = await Product.find({})
        res.status(200).json(AllProd)
    } catch (error) {
        res.status(500).json({ message: "Error Getting product", error: error.message });
        console.error("Error Getting product:", error);
    }
};

const getProduct = async (req, res) => {
    try {
        const proName = req.query
        console.log(proName)
        const specificPro = await Product.findOne(proName)
        res.json(specificPro)

    } catch (error) {
        res.status(500).json({ message: "Error Getting specific product", error: error.message });
        console.error("Error Getting specific product:", error);
    }
}

module.exports = {
    createProducts,
    getAllProducts,
    getProduct
};
