import { motion } from 'motion/react';
import { DOCTOR } from '../data';
import { Calendar, PhoneCall, Award, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-navy transition-colors">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trust/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust/10 text-trust w-fit dark:bg-trust/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trust opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-trust"></span>
              </span>
              <span className="font-semibold text-sm tracking-wide uppercase">Accepting New Patients</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-navy dark:text-white leading-tight">
              Dr. <span className="text-trust">Shahriar</span> Ahmed
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
              {DOCTOR.specialty}
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg">
              {DOCTOR.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#appointments"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-trust to-emerald-500 hover:from-trust-hover hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-trust/25 transition-all hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </a>
              <a 
                href="#chambers"
                className="flex items-center justify-center gap-2 bg-white dark:bg-navy-800 text-navy dark:text-white border border-slate-200 dark:border-slate-700 hover:border-trust dark:hover:border-trust px-8 py-4 rounded-xl font-semibold shadow-sm transition-all hover:-translate-y-1"
              >
                View Schedule
              </a>
            </div>

            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold font-heading text-navy dark:text-white">{DOCTOR.experience}+</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold font-heading text-navy dark:text-white">10k+</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Happy Patients</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={DOCTOR.heroImage} 
                alt={DOCTOR.name} 
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-6 lg:-left-12 bottom-12 glass p-4 rounded-2xl shadow-xl flex items-center gap-4 dark:bg-navy-800/80"
            >
              <div className="w-12 h-12 bg-trust/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-trust" />
              </div>
              <div>
                <p className="font-bold text-navy dark:text-white">Senior Consultant</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Cardiology</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
