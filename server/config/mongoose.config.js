const mongoose = require("mongoose");
const database = "ProductManager";

mongoose
  .connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to the database`))
  .catch((err) => console.log("Error connecting to the database", err));
