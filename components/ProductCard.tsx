import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  priceView: 'wholesale' | 'retail';
}


export default function ProductCard({ product, priceView }: ProductCardProps) {
  const price = priceView === 'wholesale' ? product.wholesalePrice : product.retailPrice;
  const priceLabel = priceView === 'wholesale' ? 'per carton' : 'per unit';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-linear-to-br from-green-100 to-green-50">
        <Image
  src={product.image}
  alt={product.name}
  fill
  className="w-full h-full object-cover"
/>

        {/* Material Badge */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {product.material}
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 hover:bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Link
            href={`/products/${product.id}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors">
              <Eye className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Dimensions */}
        <p className="text-xs text-gray-500 mb-4">
          📏 {product.dimensions}
        </p>

        {/* Price and Actions */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">
              ${price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 ml-1 block">
              {priceLabel}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={`/products/${product.id}`}
            className="text-center bg-green-100 text-green-700 py-2 rounded-lg hover:bg-green-200 transition font-semibold text-sm"
          >
            View Details
          </Link>
          <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm flex items-center justify-center space-x-1">
            <ShoppingCart className="w-4 h-4" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}