import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onChange }: CategoryFilterProps) {
  const categories = ["All", "Clothing", "Electronics"];

  return (
    <div className="flex justify-center space-x-4 my-8 px-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === cat
              ? "bg-black text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
