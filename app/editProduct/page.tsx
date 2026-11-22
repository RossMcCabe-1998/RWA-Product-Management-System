// app/editProduct/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";


export default function EditProduct() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Load existing product details into the input boxes when page opens
  useEffect(() => {
    if (id) {
      fetch(`/api/getOne?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const item = data.product || data;
          setBrand(item.brand);
          setModel(item.model);
          setDescription(item.description);
          setPrice(String(item.price));
        });
    }
  }, [id]);

  // Save edited product details to database when "Update Product" button is clicked
  async function updateProduct() {
    if (!brand || !model || !description || price === null || price.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const response = await fetch(
      `/api/updateProduct?id=${id}&brand=${brand}&model=${model}&description=${description}&price=${price}`
    );

    if (!response.ok) {
      alert("Failed to update product");
    } else {
      alert("Product updated successfully");
      router.push("/products");
    }
  }

  return (
    <section className="page">

      <p className="eyebrow"></p>
      <h1>Edit Product</h1>
      <p className="description"></p>

      <div className="card">
        <h2>Update Product Details</h2>
        <form>
          <label>Brand</label>
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
          <br />

          <label>Model</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
          <br />

          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <br />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />

          <button type="button" onClick={updateProduct}>Save Changes</button>
          <Link href="/products">
            <button type="button">Cancel</button>
          </Link>
        </form>
      </div>

    </section>
  );
}
