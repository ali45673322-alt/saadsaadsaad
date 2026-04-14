import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Fawad Khan',
    role: 'Homeowner',
    content: 'Working with Eshaal Properties was an absolute pleasure. They understood exactly what we were looking for and found us our dream home within weeks. Their professionalism is unmatched.',
    image: 'https://ui-avatars.com/api/?name=F&background=0f172a&color=fff&size=256'
  },
  {
    id: 2,
    name: 'Zaman Afridi',
    role: 'Property Investor',
    content: 'I have bought and sold multiple properties through Eshaal. Their market knowledge and negotiation skills have consistently delivered great returns on my investments.',
    image: 'https://ui-avatars.com/api/?name=Z&background=0f172a&color=fff&size=256'
  },
  {
    id: 3,
    name: 'Arbab Shoaib',
    role: 'First-time Buyer',
    content: 'As a first-time buyer, I was nervous about the process. The team at Eshaal guided me through every step, making it seamless and stress-free. Highly recommended!',
    image: 'https://ui-avatars.com/api/?name=S&background=0f172a&color=fff&size=256'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-serif font-bold text-brand-900 mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-brand-600 text-lg">
            Don't just take our word for it. Read what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              
              <p className="text-brand-700 mb-8 relative z-10 italic flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-900">{testimonial.name}</h4>
                  <p className="text-sm text-brand-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
