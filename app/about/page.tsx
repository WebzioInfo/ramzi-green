import Link from 'next/link';
import { Leaf, Target, Eye, Award, Users, Globe, Heart, Recycle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-green-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Ramzi Green</h1>
          <p className="text-xl text-green-50 max-w-3xl">
            Leading the change towards sustainable packaging solutions in the UAE and beyond
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
                alt="Our Story"
             
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                Ramzi Green Packaging Trading FZ LLC was founded with a simple yet powerful mission: 
                to provide businesses with high-quality, sustainable packaging alternatives that 
                don't compromise on functionality or aesthetics.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Based in Ajman, UAE, we've grown to become a trusted supplier of eco-friendly 
                packaging solutions across the region. Our products are made from renewable 
                resources like bamboo and sugarcane bagasse, offering businesses a responsible 
                choice for their packaging needs.
              </p>
              <p className="text-gray-700 text-lg">
                Every product we offer is carefully selected to meet the highest standards of 
                quality, sustainability, and food safety, ensuring that our customers can make 
                the switch to green packaging with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To provide businesses with premium, sustainable packaging solutions that help 
                reduce environmental impact while maintaining the highest standards of quality 
                and functionality. We strive to make eco-friendly choices accessible and 
                affordable for everyone.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be the leading provider of sustainable packaging solutions in the Middle East, 
                inspiring positive change and demonstrating that environmental responsibility 
                and business success can go hand in hand. We envision a future where sustainable 
                packaging is the norm, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality and reliability of our products
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your success is our success. We're dedicated to serving you better
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest, transparent business practices in all our relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-linear-to-br from-green-600 to-green-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-green-50">
              The sustainable choice that doesn't compromise on performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-30">
              <Recycle className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">100% Compostable</h3>
              <p className="text-green-50">
                Our products break down naturally within 90 days, leaving no harmful residue 
                and enriching the soil.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-30">
              <Globe className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Renewable Resources</h3>
              <p className="text-green-50">
                Made from fast-growing bamboo and agricultural waste, our products support 
                a circular economy.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-30">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Food Safe Certified</h3>
              <p className="text-green-50">
                All products meet international food safety standards and are free from 
                harmful chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can create a more sustainable future. Switch to eco-friendly 
            packaging today and be part of the solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}