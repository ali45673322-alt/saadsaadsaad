import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.postimg.cc/FFj6np4D/Whats-App-Image-2023-07-26-at-10-37-13-AM-(1).jpg" 
                alt="Eshaal Properties Logo" 
                className="w-10 h-10 object-contain rounded-md bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold text-white">
                Eshaal Properties
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect luxury property. We turn your real estate dreams into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-accent-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-accent-400 transition-colors">Properties</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Property Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Property Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Real Estate Investment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Legal Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Eshaal Real Estate & builders Office no 1 shinwari plaza Nasir Bagh road Peshawar.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-gray-400">0300-5964990 / 03079263053</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-gray-400">altaf82khan@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Eshaal Properties. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
