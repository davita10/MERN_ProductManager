import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const DetailProduct = () => {
  // STATE
  const [product, setProduct] = useState();

  // PARAMS for id
  const { id } = useParams();
  const navigate = useNavigate();

  // USE EFFECT AXIOS
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log("aw, man", error));
  }, [id]);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        navigate("/");
      })
      .catch((errrr) => {
        console.log(errrr);
      });
  };

  return (
    <div className="container m-auto">
      <div className="card-body">
        <h1 className="card-title">Title: {product.title}</h1>
        <h3 className="card-subtitle mb-3">Price: $ {product.price}</h3>
        <h4 className="card-text">Description: {product.description}</h4>
        <p>
          <Link to={`/${product.id}/edit`}>Edit</Link>
          <button onClick={deleteHandler}>Delete</button>
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;
