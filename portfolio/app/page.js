"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen px-6"
      >
        {/* Profile Image */}
        <Image
          src="/my.jpg"
          alt="My Picture"
          width={160}
          height={140}
          className="rounded-3xl border-6 border-gray-700 shadow-xl"
        />

        {/* Name */}
        <h1 className="text-5xl font-bold mt-6">Hi, I’m <span className="text-blue-400">KHANSA</span></h1>

        {/* Typing Effect */}
        <h2 className="mt-4 text-2xl text-gray-300">
          <ReactTyped
            strings={[
              "MERN Stack Developer",
              "Next.js Enthusiast",
              "Passionate Learner",
              "Data Engineering Explorer"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        {/* Short Intro */}
        <p className="mt-6 text-center max-w-2xl text-gray-400">
          I build modern, scalable, and elegant web applications using Next.js, React, Node.js, and databases.  
          Let’s work together to bring ideas to life.
        </p>
      </section>
    </div>
  );
}
