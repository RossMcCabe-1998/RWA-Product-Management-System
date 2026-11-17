import Image from 'next/image'


// app/page.tsx

export default function Home() {

  return (

    <section className="page">

      <p className="eyebrow"></p>

      <h1>Product Management System</h1>
      

     <p className="description">

      </p>

      <div className="card">

        <h2>Welcome to the Home page!</h2>

        <p>Welcome to the app.</p>

            <Image
                src="/beastie.png"
                width={200}
                height={200}
                alt="Picture of the author"
            />

            <Image
                src="https://res.cloudinary.com/dumjnlxd/image/upload/v1790942643/tux.png"
                width={200}
                height={200}
                alt="Picture of the author"
            />

      </div>

    </section>

  );

}
