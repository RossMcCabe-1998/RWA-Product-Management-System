// app/singleProduct/page.tsx
"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function SingleProduct() {
  // Bucket to hold the product
  const [product, setProduct] = useState<any>(null);
  // Get the product ID from the URL
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Automatically fetch the product from the API
  useEffect(() => {
    if (id) {
        fetch(`/api/getOne?id=${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data.product))
    }
  }, [id]);

  // If the product is not loaded yet, show loading message
  if (!product) {
    return <p>Loading product...</p>;
  }


  return (
    <section className="page">

      <p className="eyebrow"></p>
        <h1>This Product</h1>
      <p className="description"></p>

      <div className="card">
        <h1>{product.brand} - {product.model}</h1>
        <p>ID: {product.id}</p>
        <p>Description: {product.description}</p>
        <p>Price: €{product.price}</p>
        <Link href="/products">
          <button>Back to All Products</button>
        </Link>
      </div>

    </section>
  );
}