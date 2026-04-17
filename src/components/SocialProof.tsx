import { motion } from 'motion/react';
import { REVIEWS, GALLERY } from '../data';
import { Star, Quote } from 'lucide-react';

export function SocialProof() {
  return (
    <>
      <section id="reviews" className="py-24 bg-slate-50 dark:bg-navy transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-trust font-semibold tracking-wider uppercase text-sm mb-2">Patient Testimonials</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Read real stories from our patients whose lives have been transformed through dedicated cardiac care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 dark:text-slate-700 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed min-h-[100px]">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-trust"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-navy dark:text-white">{review.name}</h5>
                    <p className="text-sm text-slate-500">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-white dark:bg-navy-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-trust font-semibold tracking-wider uppercase text-sm mb-2">Gallery & Moments</h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white">
                Inside the Clinic
              </h2>
            </div>
            <a href="#appointments" className="text-trust font-semibold hover:text-trust-hover transition-colors flex items-center gap-2">
              Learn More About Us &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:scale-105 ${idx === 0 || idx === 3 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
              >
                <img 
                  src={img} 
                  alt={`Clinic view ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
