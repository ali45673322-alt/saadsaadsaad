import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Altaf Ahmad',
    role: 'Founder, CEO',
    image: 'https://i.postimg.cc/XvmtSrPS/Whats-App-Image-2026-04-14-at-11-12-38-AM.jpg',
    phone: 'tel:03365932422'
  },
  {
    id: 2,
    name: 'Muhammad Saad',
    role: 'Senior Real Estate Agent',
    image: 'https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg',
    phone: '#'
  },
  {
    id: 3,
    name: 'Fahad',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    phone: '#'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Our Experts</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-2 mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg">
            Our dedicated professionals are here to guide you every step of the way in finding your perfect property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white text-brand-900 rounded-full flex items-center justify-center hover:bg-accent-400 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-brand-900 rounded-full flex items-center justify-center hover:bg-accent-400 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={member.phone} className="w-10 h-10 bg-white text-brand-900 rounded-full flex items-center justify-center hover:bg-accent-400 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-accent-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
