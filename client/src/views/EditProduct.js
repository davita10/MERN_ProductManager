import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        const { title, price, description } = res.data;
        setTitle(title);
        setPrice(price);
        setDescription(description);
      })
      .catch((error) => console.log(whoops));
  }, [id]);

  const updatProduct = (e) => {
    e.preventDefault();
    const productObj = { title, price, description };
    axios
      .put(`http://localhost:8000/api/products/${id}`)
      .then((res) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2>Product</h2>
      <form onSubmit={updateProduct}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            value={title}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Price: </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            name="title"
            type="number"
            value={price}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Description: </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            name="title"
            type="text"
            value={description}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
