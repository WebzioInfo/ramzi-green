import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-green-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-50 max-w-3xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                What are your minimum order quantities?
              </h3>
              <p className="text-gray-600">
                We offer flexible ordering options. For wholesale orders, the minimum quantity 
                varies by product. Please contact us for specific details about the products 
                you're interested in.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes! We ship throughout the UAE and internationally. Shipping costs and delivery 
                times vary by location. Contact us for a shipping quote to your area.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                Are your products really 100% biodegradable?
              </h3>
              <p className="text-gray-600">
                Absolutely! All our products are made from natural, renewable materials like 
                bamboo and sugarcane bagasse. They are 100% biodegradable and will completely 
                decompose within 90 days in a composting environment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                Can I get a custom quote for bulk orders?
              </h3>
              <p className="text-gray-600">
                Yes! We offer competitive pricing for bulk orders. Fill out the contact form 
                above or email us at sales@ramzigreen.ae with your requirements, and we'll 
                provide you with a customized quote.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                Are your products safe for hot foods?
              </h3>
              <p className="text-gray-600">
                Yes! Our products are heat resistant and safe for both hot and cold foods. 
                They're microwave-safe and can handle temperatures up to 100°C without 
                compromising their integrity.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                How long does delivery take?
              </h3>
              <p className="text-gray-600">
                Delivery times depend on your location and order size. Within the UAE, 
                standard delivery typically takes 2-5 business days. For international 
                orders, delivery time varies by destination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}