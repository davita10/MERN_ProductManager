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
      <h2>Create Product</h2>
      <form onSubmit={submitHandler}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Price: </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
            type="number"
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Description: </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" value="Create" className="btn btn-info">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Form;
