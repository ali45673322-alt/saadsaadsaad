import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

interface HeroProps {
  onSearch?: (filters: { location: string; type: string; price: string }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('All Types');
  const [price, setPrice] = useState('Any Price');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ location, type, price });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              Welcome to Eshaal Properties
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Find Your Dream <br />
              <span className="text-accent-400">Home Today.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
              We offer a curated selection of premium properties in the most sought-after locations. Experience luxury living at its finest.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</label>
                <div className="flex items-center border-b border-gray-200 py-2">
                  <MapPin className="w-5 h-5 text-brand-400 mr-2" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Neighborhood"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-brand-900 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Property Type</label>
                <div className="flex items-center border-b border-gray-200 py-2">
                  <Home className="w-5 h-5 text-brand-400 mr-2" />
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-brand-900 font-medium appearance-none cursor-pointer"
                  >
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Price Range</label>
                <div className="flex items-center border-b border-gray-200 py-2">
                  <DollarSign className="w-5 h-5 text-brand-400 mr-2" />
                  <select 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-brand-900 font-medium appearance-none cursor-pointer"
                  >
                    <option>Any Price</option>
                    <option>500k - 1M</option>
                    <option>1M - 2M</option>
                    <option>2M - 5M</option>
                    <option>5M+</option>
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button 
                  onClick={handleSearch}
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 h-[46px]"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-2xl border-t border-white/20 pt-8"
          >
            <div>
              <p className="text-3xl font-serif font-bold text-white">500+</p>
              <p className="text-sm text-gray-300 mt-1">Properties Sold</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-white">98%</p>
              <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-white">10+</p>
              <p className="text-sm text-gray-300 mt-1">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
