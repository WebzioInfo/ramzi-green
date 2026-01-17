'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { products, getProductsByCategory } from '@/data/products';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceView, setPriceView] = useState<'wholesale' | 'retail'>('wholesale');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<'all' | 'Bamboo' | 'Sugarcane'>('all');

  // Filter products
  const filteredProducts = getProductsByCategory(selectedCategory)
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMaterial = selectedMaterial === 'all' || product.material === selectedMaterial;
      return matchesSearch && matchesMaterial;
    });

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-linear-to-r from-green-600 to-green-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-green-50">
            Browse our complete range of eco-friendly packaging solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none text-lg"
              />
            </div>
          </div>

          {/* Price Toggle */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 inline-flex shadow-md border-2 border-green-200">
              <button
                onClick={() => setPriceView('wholesale')}
                className={`px-8 py-3 rounded-md font-medium transition ${
                  priceView === 'wholesale'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-green-800 hover:text-green-600'
                }`}
              >
                Wholesale Prices
              </button>
              <button
                onClick={() => setPriceView('retail')}
                className={`px-8 py-3 rounded-md font-medium transition ${
                  priceView === 'retail'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-green-800 hover:text-green-600'
                }`}
              >
                Retail Prices
              </button>
            </div>
          </div>

          {/* Material Filter */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setSelectedMaterial('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedMaterial === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-800 border-2 border-green-200 hover:border-green-400'
              }`}
            >
              All Materials
            </button>
            <button
              onClick={() => setSelectedMaterial('Bamboo')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedMaterial === 'Bamboo'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-800 border-2 border-green-200 hover:border-green-400'
              }`}
            >
              🎋 Bamboo
            </button>
            <button
              onClick={() => setSelectedMaterial('Sugarcane')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedMaterial === 'Sugarcane'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-800 border-2 border-green-200 hover:border-green-400'
              }`}
            >
              🌾 Sugarcane
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-bold text-green-600">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                priceView={priceView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedMaterial('all');
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to assist you in finding the perfect packaging solutions 
            for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}