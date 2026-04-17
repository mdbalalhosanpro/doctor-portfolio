import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTOR, EXPERTISE } from '../data';
import { CheckCircle2, X } from 'lucide-react';

export function AboutExpertise() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Profile Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-navy-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-navy dark:text-white" />
              </button>
              
              <div className="p-8">
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700">
                  <img src={DOCTOR.heroImage} alt="Dr. Profile" className="w-24 h-24 rounded-full object-cover border-4 border-trust/20" />
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-navy dark:text-white">{DOCTOR.name}</h3>
                    <p className="text-trust font-medium">{DOCTOR.specialty}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-navy dark:text-white">Full Professional Background</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {DOCTOR.about} He is widely acclaimed for his extensive research in cardiovascular diseases. Through his continuous efforts in attending and leading international medical conferences, he ensures his patients receive the most advanced and clinically proven treatments available worldwide.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-navy dark:text-white">Detailed Qualifications</h4>
                    <ul className="space-y-3">
                      {DOCTOR.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-navy p-3 rounded-xl">
                          <CheckCircle2 className="w-5 h-5 text-trust mt-0.5" />
                          <div>
                            <p className="font-bold text-navy dark:text-white">{edu.degree}</p>
                            <p className="text-sm text-slate-500">{edu.institute}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => { setIsModalOpen(false); window.location.href='#appointments'; }}
                      className="w-full bg-trust hover:bg-trust-hover text-white py-4 rounded-xl font-bold transition-transform shadow-lg hover:-translate-y-1"
                    >
                      Book Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-navy-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src={DOCTOR.aboutImage} 
                  alt="Doctor consulting patient" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-trust text-white p-6 md:p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-xl font-heading font-bold mb-2">My Mission</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  "To provide world-class cardiac care with a personalized approach for every single patient."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-trust font-semibold tracking-wider uppercase text-sm">About The Doctor</h4>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white">
                  Compassionate Care, <br/> Medical Excellence.
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {DOCTOR.about}
              </p>

              <div className="space-y-4 mt-4">
                <h3 className="font-heading font-semibold text-xl text-navy dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">
                  Academic Background
                </h3>
                <ul className="space-y-3">
                  {DOCTOR.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0" />
                      <div>
                        <p className="font-bold text-navy dark:text-white">{edu.degree}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{edu.institute}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 inline-flex items-center gap-2 text-trust font-medium hover:text-trust-hover transition-colors"
                >
                  Read Full Profile &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-24 bg-slate-50 dark:bg-navy transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-trust font-semibold tracking-wider uppercase text-sm mb-2">Area of Expertise</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
              Specialized Treatments
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Delivering specialized, evidence-based treatments for cardiovascular diseases using state-of-the-art medical technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERTISE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700 group hover:-translate-y-2 duration-300"
                >
                  <div className="w-14 h-14 bg-trust/10 dark:bg-trust/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-trust" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
