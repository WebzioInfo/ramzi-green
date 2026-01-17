import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Leaf, Shield, Recycle, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  // Featured products (first 8)
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">100% biodegradable and compostable materials</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Food Safe</h3>
              <p className="text-gray-600 text-sm">Certified safe for all food types</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Sustainable</h3>
              <p className="text-gray-600 text-sm">Made from renewable bamboo and sugarcane</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Durable and reliable for all occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">
              Discover our range of sustainable packaging solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                priceView="wholesale"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
                alt="Eco-friendly packaging"
                className="object-cover"
                fill
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Why Choose Ramzi Green?
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We're committed to providing sustainable, high-quality packaging solutions 
                that help protect our planet while meeting your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">
                      Certified Eco-Friendly Materials
                    </h3>
                    <p className="text-gray-600">
                      All products are 100% biodegradable and compostable
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">
                      Competitive Wholesale Pricing
                    </h3>
                    <p className="text-gray-600">
                      Best prices for bulk orders with fast delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">
                      Excellent Customer Service
                    </h3>
                    <p className="text-gray-600">
                      Dedicated support team ready to assist you
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">
                      Wide Product Range
                    </h3>
                    <p className="text-gray-600">
                      Complete packaging solutions for all your needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-600 to-green-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make the Switch to Sustainable Packaging?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Contact us today for wholesale pricing and bulk orders. 
            Join the green revolution with Ramzi Green!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}