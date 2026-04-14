import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Key, Home, Search, ShieldCheck, X } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Buy a Property',
    description: 'Find your dream home with our extensive network of premium listings and expert guidance.',
    details: 'Our buying service is designed to make your property search as smooth as possible. We provide access to exclusive listings, conduct thorough market analysis, and negotiate on your behalf to ensure you get the best deal. From initial consultation to closing, our experts are with you every step of the way.'
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Sell a Property',
    description: 'Get the best value for your property with our strategic marketing and negotiation expertise.',
    details: 'Selling a property requires a strategic approach. We offer comprehensive market appraisals, professional photography, and targeted marketing campaigns to attract qualified buyers. Our skilled negotiators work tirelessly to maximize your property\'s value and ensure a seamless transaction.'
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Rent a Property',
    description: 'Discover high-quality rental properties that match your lifestyle and budget requirements.',
    details: 'Whether you are looking for a short-term lease or a long-term home, our rental service offers a wide range of high-quality properties. We assist with property viewings, lease negotiations, and ensure all legal requirements are met, providing you with peace of mind.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Property Management',
    description: 'Comprehensive management services to protect your investment and maximize returns.',
    details: 'Our property management services are tailored to protect your investment and maximize your returns. We handle tenant screening, rent collection, maintenance requests, and regular inspections. Enjoy a hassle-free ownership experience while we take care of the day-to-day management.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-400 font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">What We Offer</h2>
          <p className="text-gray-300 text-lg">
            Comprehensive real estate solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-brand-800/50 border border-brand-700 p-8 rounded-2xl hover:bg-brand-800 transition-colors group cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-brand-900 rounded-xl flex items-center justify-center text-accent-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-6 text-accent-400 font-medium text-sm flex items-center group-hover:underline">
                Learn more <span className="ml-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-brand-900/90 backdrop-blur-sm" 
              onClick={() => setSelectedService(null)} 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-8"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full text-brand-900 hover:bg-gray-200 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-900 mr-4">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold text-brand-900">{selectedService.title}</h2>
              </div>

              <div className="prose prose-lg max-w-none text-brand-600">
                <p className="text-xl font-medium mb-4 text-brand-800">
                  {selectedService.description}
                </p>
                <p className="leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-brand-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
