import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Display = (props) => {
  const { products, setProducts } = props;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(`We got stuff`, res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(`Not this stuff?`, err));
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);

        const newList = products.filter((product, index) => product.id);
        setProducts(newList);
      })
      .catch((err) => console.log(err));
  };
};

return (
  <div>
    <h1>All Products:</h1>
    {products.map((product, index) => (
      <div key={index}>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        <button onClick={() => navigate(`/product/edit/${product.id}`)}>
          Edit
        </button>
        <button onClick={() => deleteHandler(product.id)}>Delete</button>
      </div>
    ))}
    ;
  </div>
);

export default Display;
