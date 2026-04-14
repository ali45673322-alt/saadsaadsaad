import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapLocation() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Location</span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mt-2 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-accent-500" />
            Office no 1, Shinwari Plaza, Nasir Bagh Road, Peshawar
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Eshaal%20real%20estate%20and%20Builders-Dha%20Peshawar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Eshaal Properties Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
