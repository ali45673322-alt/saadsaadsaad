import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Experience Luxury</span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mt-2 mb-4">Take a Virtual Tour</h2>
          <p className="text-gray-600 text-lg">
            Immerse yourself in the beauty of our premium properties before you even step foot inside.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900"
        >
          {/* YouTube Video Embed - Autoplay, Muted, and Looping */}
          <iframe
            src="https://www.youtube.com/embed/3H6Evu2hPpE?autoplay=1&mute=1&loop=1&playlist=3H6Evu2hPpE&controls=0&rel=0&showinfo=0"
            title="Eshaal Properties Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover opacity-90 border-0 pointer-events-none"
          ></iframe>
          
          {/* Optional Overlay for better contrast if text was added inside, but here it just adds a premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
