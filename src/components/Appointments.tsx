import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHAMBERS, DOCTOR } from '../data';
import { MapPin, Clock, CreditCard, Send, CheckCircle, PhoneCall, Activity } from 'lucide-react';

export function Appointments() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <>
      {/* Chambers Section */}
      <section id="chambers" className="py-24 bg-white dark:bg-navy-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-trust font-semibold tracking-wider uppercase text-sm mb-2">Availability</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy dark:text-white mb-6">
              Chamber Schedule
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find a convenient location and time to schedule your consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {CHAMBERS.map((chamber, idx) => (
              <motion.div 
                key={chamber.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-navy border border-slate-100 dark:border-slate-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold font-heading text-navy dark:text-white mb-4">{chamber.name}</h3>
                  <div className="space-y-3 mb-8">
                    <div className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <MapPin className="w-5 h-5 flex-shrink-0 text-trust" />
                      <span>{chamber.address}</span>
                    </div>
                    <div className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <Clock className="w-5 h-5 flex-shrink-0 text-trust" />
                      <span>{chamber.schedule.join(', ')} • {chamber.time}</span>
                    </div>
                    <div className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <CreditCard className="w-5 h-5 flex-shrink-0 text-trust" />
                      <span>Consultation Fee: <span className="font-semibold">{chamber.fee}</span></span>
                    </div>
                  </div>
                  <a href="#appointments" className="w-full block text-center bg-trust/10 hover:bg-trust/20 text-trust dark:bg-trust/20 dark:hover:bg-trust/30 font-semibold py-3 rounded-xl transition-colors">
                    Select This Chamber
                  </a>
                </div>
                <div className="h-48 w-full bg-slate-200">
                  <iframe 
                    src={chamber.map} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Contact Section */}
      <section id="appointments" className="py-24 bg-navy dark:bg-navy-800 relative transition-colors">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-trust/20 blur-[100px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h4 className="text-trust font-semibold tracking-wider uppercase text-sm mb-2">Get in Touch</h4>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Book Your Appointment
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-md">
                We prioritize your health. Fill out the form, and our team will confirm your visit shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-trust/20 rounded-full flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-trust" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Direct Appointment</p>
                    <p className="text-xl font-bold text-white">{DOCTOR.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-warm/5 p-4 rounded-2xl border border-warm/10 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-warm/20 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-warm" />
                  </div>
                  <div>
                    <p className="text-sm text-warm">Emergency Contact</p>
                    <p className="text-xl font-bold text-white">{DOCTOR.emergency}</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 font-heading">
                Request a Callback
              </h3>
              
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-6 rounded-2xl flex flex-col items-center text-center gap-3"
                >
                  <CheckCircle className="w-12 h-12" />
                  <div>
                    <p className="font-bold text-lg">Request Received!</p>
                    <p className="text-sm opacity-90">Our team will call you shortly to confirm your appointment.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-trust/50 dark:text-white"
                      placeholder="e.g. Abidur Rahman"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-trust/50 dark:text-white"
                        placeholder="017XX XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-trust/50 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-trust/50 dark:text-white resize-none"
                      placeholder="Briefly describe your symptoms..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-trust hover:bg-trust-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 mt-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Request
                  </button>
                </form>
              )}
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
