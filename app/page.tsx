// app/page.tsx
import Image from 'next/image'


export default function Home() {

  return (
    <section className="page">

      <p className="eyebrow"></p>
      <h1>Product Management System</h1>
      <p className="description">Manage your products efficiently</p>

      <div className="card">
        <h2>Welcome to the Home page!</h2>
        <p>
          Welcome to the app.
        </p>
          <Image loading="eager"
              src="https://res.cloudinary.com/dumjnlxd/image/upload/v1795372854/SamplePicLaptops.png"
              width={510}
              height={400}
              alt="Sample Laptops"
          />
      </div>

    </section>
  );
}
