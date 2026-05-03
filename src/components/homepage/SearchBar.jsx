"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/courses?search=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mx-auto my-8 items-center justify-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="border border-white text-white px-3 py-2 rounded"
      />

      <button className="bg-indigo-600 text-white px-4 rounded">
        Search
      </button>
    </form>
  );
}