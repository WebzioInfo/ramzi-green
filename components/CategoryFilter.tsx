'use client';

import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
            selectedCategory === category.id
              ? 'bg-green-600 text-white shadow-lg scale-105'
              : 'bg-white text-green-800 border-2 border-green-200 hover:border-green-400 hover:shadow-md'
          }`}
        >
          <span className="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}