/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import VideoSection from './components/VideoSection';
import Team from './components/Team';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MapLocation from './components/MapLocation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: 'All Types',
    price: 'Any Price'
  });

  const handleSearch = (filters: { location: string; type: string; price: string }) => {
    setSearchFilters(filters);
    // Smooth scroll to the properties section
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-brand-900 font-sans selection:bg-accent-400/30">
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />
        <FeaturedProperties filters={searchFilters} />
        <VideoSection />
        <Team />
        <About />
        <Services />
        <Testimonials />
        <MapLocation />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
