// app/products/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Products() {
  // Bucket to hold products
  const [data, setData] = useState<any[]>([]);

  // Function to get all products from getAll API
  const getProducts = async () => {
    const res = await fetch("/api/getAll");
    setData(await res.json());
  };

  // Automatically run getProducts() when the page loads
  useEffect(() => {
    getProducts();
  }, []);

  // Function runs when click "Delete"
  const deleteProduct = async (id: string) => {
    await fetch(`/api/deleteProduct?id=${id}`, {
      method: "DELETE",
    });
    getProducts(); // Refresh
  };


  return (
    <section className="page">

      <p className="eyebrow"></p>
      <h1>Products</h1>
      <p className="description"></p>

      <div className="card">
        <h2>All Products Available</h2>

        {data.map((item) => (
          <div key={item.id}>
            <p>Brand: {item.brand}</p>
            <p>Model: {item.model}</p>
            <p>Description: {item.description}</p>
            <p>Price: €{item.price}</p>
            <button onClick={() => deleteProduct(item.id)}>
              Delete: {item.id}
            </button>
            
            <Link href={`/singleProduct?id=${item.id}`}>
              <button>View Product</button>
            </Link>

            <Link href={`/editProduct?id=${item.id}`}>
              <button>Edit</button>
            </Link>
            <hr />
          </div>
        ))}

      </div>

    </section>
  );
}
