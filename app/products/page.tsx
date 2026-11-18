// app/page.tsx
export default async function Products() {

  // API call to backend
  const res = await fetch('http://localhost:3000/api/getAll');

  const data: {
    id: string;
    brand: string;
    model: string;
    description: string;
    price: number;
  }[] = await res.json();

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
            <hr />
          </div>
        ))}

      </div>
      
    </section>
  );
}
