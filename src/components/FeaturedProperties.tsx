import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bed, Bath, Square, MapPin, Heart, X, Phone, Mail } from 'lucide-react';

interface Filters {
  location: string;
  type: string;
  price: string;
}

const allProperties = [
  {
    id: 1,
    title: 'House For Sale',
    location: 'DHA Peshawar',
    price: '75,000,000',
    priceValue: 75000000,
    type: 'Villa',
    beds: 7,
    baths: 6,
    sqft: '1 Kanal',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
    tag: 'For Sale',
    description: 'This stunning property offers unparalleled luxury and comfort. Featuring spacious living areas, modern amenities, and breathtaking views, it is the perfect place to call home.',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ]
  },
  {
    id: 2,
    title: 'Askari Apartments',
    location: 'Nasir Bagh Road',
    price: '70,000,000',
    priceValue: 70000000,
    type: 'Apartment',
    beds: 5,
    baths: 4,
    sqft: '4,100',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    tag: 'Exclusive',
    description: 'Experience the pinnacle of urban living in this exclusive penthouse. Enjoy panoramic city views, state-of-the-art facilities, and a prime location in the heart of the metropolis.',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1184&q=80'
    ]
  }
];

export default function FeaturedProperties({ filters }: { filters?: Filters }) {
  const [selectedProperty, setSelectedProperty] = useState<typeof allProperties[0] | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');

  const filteredProperties = allProperties.filter(property => {
    if (!filters) return true;
    
    // Location match (case insensitive substring)
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Type match
    if (filters.type !== 'All Types' && property.type !== filters.type) {
      return false;
    }
    
    // Price match
    if (filters.price !== 'Any Price') {
      const val = property.priceValue;
      if (filters.price === '500k - 1M' && (val < 500000 || val > 1000000)) return false;
      if (filters.price === '1M - 2M' && (val < 1000000 || val > 2000000)) return false;
      if (filters.price === '2M - 5M' && (val < 2000000 || val > 5000000)) return false;
      if (filters.price === '5M+' && val < 5000000) return false;
    }
    
    return true;
  });

  return (
    <section id="properties" className="py-24 bg-brand-50 min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Discover</span>
            <h2 className="text-4xl font-serif font-bold text-brand-900 mt-2 mb-4">
              {filters && (filters.location || filters.type !== 'All Types' || filters.price !== 'Any Price') 
                ? 'Search Results' 
                : 'Featured Properties'}
            </h2>
            <p className="text-brand-600 text-lg">
              {filters && (filters.location || filters.type !== 'All Types' || filters.price !== 'Any Price') 
                ? `Showing properties matching your criteria.`
                : `Explore our handpicked selection of premium properties designed for luxury living.`}
            </p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 md:mt-0 px-6 py-3 border-2 border-brand-900 text-brand-900 font-medium rounded-full hover:bg-brand-900 hover:text-white transition-colors self-start"
          >
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <motion.div
                  layout
                  key={property.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedProperty(property);
                    setActiveImage(property.image);
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900">
                      {property.tag}
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full text-brand-900 hover:bg-white hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-brand-900 mb-1">{property.title}</h3>
                        <div className="flex items-center text-brand-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {property.location}
                        </div>
                      </div>
                      <div className="text-xl font-serif font-bold text-accent-500">
                        {property.price}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 mt-4">
                      <div className="flex items-center text-brand-600 text-sm">
                        <Bed className="w-4 h-4 mr-2 text-brand-400" />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center text-brand-600 text-sm">
                        <Bath className="w-4 h-4 mr-2 text-brand-400" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center text-brand-600 text-sm">
                        <Square className="w-4 h-4 mr-2 text-brand-400" />
                        {property.sqft}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center bg-white rounded-2xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-brand-300" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-2">No properties found</h3>
                <p className="text-brand-500">Try adjusting your search criteria to find what you're looking for.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm" 
              onClick={() => setSelectedProperty(null)} 
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-brand-900 hover:bg-white hover:text-red-500 transition-colors shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left: Images */}
              <div className="w-full md:w-1/2 bg-gray-100">
                <div className="h-64 md:h-96 relative">
                  <img 
                    src={activeImage} 
                    alt={selectedProperty.title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900">
                    {selectedProperty.tag}
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-2 overflow-x-auto">
                  {[selectedProperty.image, ...selectedProperty.gallery.filter(img => img !== selectedProperty.image)].map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt={`${selectedProperty.title} gallery ${i + 1}`} 
                      onClick={() => setActiveImage(img)}
                      className={`w-full h-16 sm:h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${activeImage === img ? 'border-brand-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-brand-900 mb-2">{selectedProperty.title}</h2>
                  <div className="flex items-center text-brand-500 text-lg mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {selectedProperty.location}
                  </div>
                  <div className="text-3xl font-serif font-bold text-accent-500">
                    {selectedProperty.price}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-6">
                  <div className="flex flex-col items-center justify-center p-3 bg-brand-50 rounded-xl">
                    <Bed className="w-6 h-6 text-brand-400 mb-2" />
                    <span className="font-bold text-brand-900">{selectedProperty.beds}</span>
                    <span className="text-xs text-brand-600 uppercase tracking-wider">Beds</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-brand-50 rounded-xl">
                    <Bath className="w-6 h-6 text-brand-400 mb-2" />
                    <span className="font-bold text-brand-900">{selectedProperty.baths}</span>
                    <span className="text-xs text-brand-600 uppercase tracking-wider">Baths</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-brand-50 rounded-xl">
                    <Square className="w-6 h-6 text-brand-400 mb-2" />
                    <span className="font-bold text-brand-900">{selectedProperty.sqft}</span>
                    <span className="text-xs text-brand-600 uppercase tracking-wider">Area</span>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h3 className="text-lg font-bold text-brand-900 mb-3">Property Description</h3>
                  <p className="text-brand-600 leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href="tel:03005964990"
                    className="flex-1 bg-brand-900 text-white py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-800 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Agent
                  </a>
                  <a 
                    href="mailto:altaf82khan@gmail.com"
                    className="flex-1 bg-brand-50 text-brand-900 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
