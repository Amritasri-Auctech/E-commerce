"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search medicines, vitamins, healthcare products..." }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto" role="search">
      <label htmlFor="medicine-search" className="sr-only">Search medicines</label>
      <div className="flex items-center bg-white rounded-2xl overflow-hidden border-2 border-white/50 focus-within:border-white transition-colors shadow-lg">
        <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" aria-hidden="true" />
        <input
          id="medicine-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-4 text-gray-800 placeholder-gray-400 outline-none text-sm bg-transparent"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 text-sm transition-colors shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
}
