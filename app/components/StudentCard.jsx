"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200">
      <h1 className="text-xl font-semibold tracking-widest text-black uppercase mb-4">
        Student Card
      </h1>

      <h2 className="text-base font-bold text-black mb-1">{name}</h2>
      <p className="text-black">{course}</p>
      <p className="text-black mb-4">{year}</p>

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Click Me
      </button>

      <p className="mt-4 text-black font-medium">{message}</p>
    </div>
  );
}
