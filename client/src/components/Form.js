import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const { products, setProducts } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        setProducts([...products, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h2>Product</h2>
      <form onSubmit={createProduct}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
