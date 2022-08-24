import React, { useState } from "react";
import Display from "../components/Display";
import Form from "../components/Form";

const Main = () => {
  // lift state for getter and setter access
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Form products={products} setProducts={setProducts} />
      <Display products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;
