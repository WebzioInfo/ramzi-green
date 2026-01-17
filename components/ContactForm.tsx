'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        inquiryType: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Send us a Message</h3>
        
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Thank you! We'll get back to you soon.
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              placeholder="+971 XX XXX XXXX"
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Inquiry Type
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition"
            >
              <option value="general">General Inquiry</option>
              <option value="wholesale">Wholesale Order</option>
              <option value="retail">Retail Purchase</option>
              <option value="partnership">Partnership</option>
              <option value="support">Support</option>
            </select>
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-4 rounded-full">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Address</h3>
              <p className="text-gray-600">
                Ramzi Green Packaging Trading FZ LLC<br />
                Ajman Free Zone<br />
                Ajman, United Arab Emirates
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Email</h3>
              <a
                href="mailto:info@ramzigreen.ae"
                className="text-gray-600 hover:text-green-600 transition"
              >
                info@ramzigreen.ae
              </a>
              <br />
              <a
                href="mailto:sales@ramzigreen.ae"
                className="text-gray-600 hover:text-green-600 transition"
              >
                sales@ramzigreen.ae
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Phone</h3>
              <a
                href="tel:+971XXXXXXXX"
                className="text-gray-600 hover:text-green-600 transition"
              >
                +971 XX XXX XXXX
              </a>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-linear-to-br from-green-600 to-green-400 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="font-bold text-xl mb-4">Business Hours</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="font-semibold">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span className="font-semibold">9:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span className="font-semibold">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}