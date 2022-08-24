// IMPORT MODEL
const Product = require("../models/product.model");

// CREATE
const createNewProduct = (req, res) => {
  console.log("CHECK OUT THAT BODY!", req.body);
  Product.create(req.body)
    .then((newProduct) => {
      res.status(201).json(newProduct);
    })
    .catch((err) => {
      console.log("ERROR IN CREATE", err);
      req.status(400).json(err);
    });
};

// READ ALL
const findAllProducts = (req, res) => {
  Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log("ERROR IN FIND ALL", err);
      req.status(400).json(err);
    });
};

// READ ONE
const findOneProduct = (req, res) => {
  Product.findOne(req.params.id)
    .then((oneProduct) => {
      res.json(oneProduct);
    })
    .catch((err) => {
      console.log("ERROR IN FIND ONE PRODUCT", err);
      req.status(400).json(err);
    });
};

// UPDATE
const updateProduct = (req, res) => {
  Product.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then((updateProduct) => {
      res.json(updateProduct);
    })
    .catch((err) => {
      console.log("ERROR IN UPDATE", err);
      req.status(400).json(err);
    });
};

// DELETE
const deleteProduct = (req, res) => {
  Product.findOneAndDelete(req.params.id)
    .then((deleteProduct) => {
      res.json(deleteProduct);
    })
    .catch((err) => {
      console.log("ERROR IN DELETE", err);
      req.status(400).json(err);
    });
};

module.exports = {
  createNewProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  deleteProduct,
};
