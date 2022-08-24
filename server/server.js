// IMPORT DEPENDENCIES
const express = require("express");

// IMPORT CROSS-ORIGIN FUNCTIONALITY
const cors = require("cors");

// INSTANTIATE AN EXPRESS SERVER
const app = express();
const PORT = 8000;

// START MONGOOSE CONFIG fires mongoose.connect to initialize db connection
require("./config/mongoose.config");

// MIDDLEWARE *BEFORE ROUTES
// important for req.body or undefined
// ALLOWING USE OF JSON
app.use(express.json());
// ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({ extended: true }));
// ALLOWING CORS
app.use(cors());

// DEFINE API ENDPOINTS import products routes function from product.routes.js
require("./routes/product.routes.js")(app);
// const productRoutes = require("./routes/product.routes");
// AllProductRoutes(app);

// RUN EXPRESS SERVER
app.listen(PORT, () => {
  console.log(`Server Is Ready to Boogie On PORT ${PORT}`);
});
