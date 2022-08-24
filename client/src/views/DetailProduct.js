import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailProduct = () => {
  // STATE
  const [product, setProduct] = useState();

  // PARAMS for id
  const { id } = useParams();

  // USE EFFECT AXIOS
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(aw, man));
  }, [id]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        navigate("/");
      })
      .catch((err) => {
        console.log(errrr);
      });
  };

  return (
    <div className="container m-auto">
      <div className="card-body">
        <h2 className="card-title">Title: {product.title}</h2>
        <h5 className="card-subtitle mb-3">Price: $ {product.price}</h5>
        <p className="card-text">Description: {product.description}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default DetailProduct;
