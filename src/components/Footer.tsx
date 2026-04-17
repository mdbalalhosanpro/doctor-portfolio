import { motion } from 'motion/react';
import { DOCTOR } from '../data';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t flex flex-col justify-between border-slate-800 pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-trust" />
              <span className="font-heading font-bold text-2xl text-white">
                Dr. Shahriar
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              {DOCTOR.tagline} We are dedicated to providing the highest standard of cardiovascular care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-trust hover:text-white transition-colors">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-trust hover:text-white transition-colors">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-trust hover:text-white transition-colors">
                YT
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-trust transition-colors">About</a></li>
              <li><a href="#expertise" className="hover:text-trust transition-colors">Expertise</a></li>
              <li><a href="#chambers" className="hover:text-trust transition-colors">Chambers</a></li>
              <li><a href="#reviews" className="hover:text-trust transition-colors">Testimonials</a></li>
              <li><a href="#gallery" className="hover:text-trust transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-heading">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-trust flex-shrink-0" />
                <span>Primary: Labaid Cardiac Hospital, <br/>Dhanmondi, Dhaka</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-trust flex-shrink-0" />
                <span>{DOCTOR.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-trust flex-shrink-0" />
                <span>{DOCTOR.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} {DOCTOR.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <HeartPulse className="w-4 h-4 text-warm" /> for better health</p>
        </div>
      </div>
    </footer>
  );
}
