import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const features = [
    'Premium Property Selection',
    'Expert Legal Assistance',
    'Transparent Transactions',
    'Dedicated Property Managers'
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://i.postimg.cc/MZ1bpXsD/Whats-App-Image-2023-07-26-at-10-37-13-AM.jpg"
                alt="Modern Interior"
                className="rounded-2xl w-full h-80 object-cover mt-8"
                referrerPolicy="no-referrer"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Luxury Exterior"
                className="rounded-2xl w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-900 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center border-4 border-white shadow-xl"
            >
              <span className="text-3xl font-serif font-bold text-accent-400">10+</span>
              <span className="text-xs text-center font-medium mt-1 leading-tight">Years<br/>Experience</span>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-4xl font-serif font-bold text-brand-900 mt-2 mb-6">
              We Help You Find The Best Property For Your Family
            </h2>
            <p className="text-brand-600 text-lg mb-8 leading-relaxed">
              At Eshaal Properties, we believe that finding a home is more than just a transaction; it's about finding a place where memories are made. With over a decade of experience in luxury real estate, we provide unparalleled service and expertise to our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center text-brand-800 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                  {feature}
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => setShowMore(!showMore)}
              className="bg-brand-900 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20"
            >
              {showMore ? 'Show Less' : 'Learn More About Us'}
            </button>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-600 leading-relaxed">
                    Founded with a vision to redefine real estate experiences, Eshaal Properties has grown into a trusted name in the industry. Our team of dedicated professionals works tirelessly to match clients with their perfect properties, ensuring a seamless and transparent process from start to finish. We specialize in high-end residential and commercial real estate, offering personalized solutions tailored to your unique needs.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
