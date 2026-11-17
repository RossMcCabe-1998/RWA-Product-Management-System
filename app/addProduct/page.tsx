// app/page.tsx
export default function addProduct() {
  return (
    <section className="page">
      <p className="eyebrow"></p>
      <h1>Add Product</h1>
      <p className="description">
        
      </p>

      <div className="card">
        <h2>Product Details</h2>
        <form>
          <label>Brand</label>
          <input type="text"/>

          <label>Model</label>
          <input type="text"/>

          <label>Price</label>
          <input type="number"/>

          <label>Description</label>
          <textarea/>
        </form>
      </div>
      
    </section>
  );
}
