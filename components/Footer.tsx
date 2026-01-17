import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8" />
              <h3 className="text-xl font-bold">RAMZI GREEN</h3>
            </div>
            <p className="text-green-200 text-sm mb-4">
              Sustainable packaging solutions for a greener tomorrow. 
              Premium bamboo and sugarcane products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-green-200">
              <li>Bamboo Plates & Bowls</li>
              <li>Sugarcane Containers</li>
              <li>Eco-Friendly Cutlery</li>
              <li>Biodegradable Cups</li>
              <li>Food Packaging</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm">
                  Ramzi Green Packaging Trading FZ LLC<br />
                  Ajman, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@ramzigreen.ae" className="hover:text-white transition text-sm">
                  info@ramzigreen.ae
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+971XXXXXXXX" className="hover:text-white transition text-sm">
                  +971 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-green-200 text-sm">
            <p>&copy; 2025 Ramzi Green Packaging Trading FZ LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}