// app/page.tsx
"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";


export default function Home() {
  const [title, setTitle] = useState("Loading...");
  const [description, setDescription] = useState("");
  const [welcomeHeading, setWelcomeHeading] = useState("");
  const [welcomeBody, setWelcomeBody] = useState("");

  // Load homepage text from Redis when the page opens
  useEffect(() => {
    fetch("/api/homeText")
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setWelcomeHeading(data.welcomeHeading);
        setWelcomeBody(data.welcomeBody);
      });
  }, []);

  return (
    <section className="page">

      <p className="eyebrow"></p>
      <h1>{title}</h1>
      <p className="description">{description}</p>

      <div className="card">
        <h2>{welcomeHeading}</h2>
        <p>{welcomeBody}</p>
        <br />
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
