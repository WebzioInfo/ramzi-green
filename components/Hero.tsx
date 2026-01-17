import Link from 'next/link';
import { Leaf, Shield, Package, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-green-600 to-green-400 m-0 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Sustainable Packaging Solutions
            </h2>
            <p className="text-xl text-green-50">
              Premium bamboo and sugarcane products for an eco-friendly future. 
              100% biodegradable, compostable, and earth-friendly packaging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition text-center shadow-lg"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition text-center"
              >
                Get Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-green-100">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-green-100">Eco-Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-green-100">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-30 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                  <Leaf className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">100% Natural</h3>
                  <p className="text-xs text-green-100">Biodegradable materials</p>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                  <Shield className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Food Safe</h3>
                  <p className="text-xs text-green-100">Certified quality</p>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                  <Package className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Bulk Orders</h3>
                  <p className="text-xs text-green-100">Wholesale available</p>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                  <Truck className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Fast Delivery</h3>
                  <p className="text-xs text-green-100">UAE-wide shipping</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}