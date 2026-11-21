"use client";
import { useState } from "react";


export default function AddNewProduct() {

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function addProduct() {
    if (!brand || !model || !description || price === null || price.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const response = await fetch(`api/addProduct?brand=${brand}&model=${model}&description=${description}&price=${price}`);

    if (!response.ok) {
        alert("Failed to add product");
    } else{
        alert("Product added successfully");
        setBrand("");
        setModel("");
        setDescription("");
        setPrice("");
    }
  }


  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Add Product</h1>
      <p className="description"></p>

      <div className="card">
        <h2>Product Details</h2>
        <form>
          <label>Brand</label>
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
          <br></br>

          <label>Model</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)}/>
          <br></br>

          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
          <br></br>

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
          <br></br>

          <button type="button" onClick={addProduct}>Add Product</button>
        </form>
      </div>
      
    </section>
  );
}
