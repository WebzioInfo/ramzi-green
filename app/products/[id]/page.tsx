import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { CheckCircle, Package, Truck, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-green-600 hover:text-green-700">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-96 md:h-150 rounded-2xl overflow-hidden bg-linear-to-br from-green-100 to-green-50 shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {product.material}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-green-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-green-800 mb-3 text-lg">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-4 text-lg">Specifications</h3>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-green-200 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Dimensions</div>
                <div className="font-semibold text-green-800">{product.dimensions}</div>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Packing Unit</div>
                <div className="font-semibold text-green-800">{product.packingUnit}</div>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Carton Size</div>
                <div className="font-semibold text-green-800">{product.cartonSize}</div>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-xl p-4">
                <div className="text-sm text-gray-600 mb-1">Material</div>
                <div className="font-semibold text-green-800">{product.material}</div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-linear-to-br from-green-600 to-green-400 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Pricing</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-green-100 text-sm mb-2">Wholesale Price</div>
                  <div className="text-4xl font-bold">${product.wholesalePrice.toFixed(2)}</div>
                  <div className="text-green-100 text-sm">per carton</div>
                </div>
                <div>
                  <div className="text-green-100 text-sm mb-2">Retail Price</div>
                  <div className="text-4xl font-bold">${product.retailPrice.toFixed(2)}</div>
                  <div className="text-green-100 text-sm">per unit</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition text-center flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Request Quote</span>
              </Link>
              <a
                href="mailto:info@ramzigreen.ae"
                className="border-2 border-green-600 text-green-600 py-4 rounded-lg font-semibold hover:bg-green-50 transition text-center"
              >
                Contact Sales
              </a>
            </div>

            {/* Additional Info */}
            <div className="border-t-2 border-green-100 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">Bulk Orders Available</div>
                </div>
                <div>
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">Fast Delivery</div>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Related Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  priceView="wholesale"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}