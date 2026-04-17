import { HeartPulse, Activity, ShieldCheck, Microscope } from 'lucide-react';

export const DOCTOR = {
  name: "Dr. Shahriar Ahmed",
  specialty: "MBBS, MD (Cardiology) - Senior Consultant",
  experience: 15,
  tagline: "Caring for your heart with expertise & compassion.",
  heroImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  aboutImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  about: "With over 15 years of dedicated experience in interventional cardiology, Dr. Shahriar Ahmed is recognized as one of the leading heart specialists in the region. He has successfully performed thousands of complex coronary angioplasties and provides holistic, patient-centered care. His approach combines the latest medical advancements with profound empathy to ensure the best outcomes for every patient.",
  email: "appointments@drshahriar.com",
  phone: "+880 1700 000000",
  emergency: "+880 1900 000000",
  whatsapp: "8801700000000", // For standard format
  education: [
    { degree: "MBBS", institute: "Dhaka Medical College" },
    { degree: "MD (Cardiology)", institute: "BSMMU, Dhaka" },
    { degree: "Fellowship (FACC)", institute: "American College of Cardiology" }
  ]
};

export const EXPERTISE = [
  { id: 1, title: "Interventional Cardiology", desc: "Expert in complex angioplasties, stenting, and pacemaker implantation.", icon: HeartPulse },
  { id: 2, title: "Heart Failure Management", desc: "Comprehensive care and rehabilitation for chronic heart failure patients.", icon: Activity },
  { id: 3, title: "Preventive Cardiology", desc: "Advanced risk assessment, cholesterol management, and lifestyle guidance.", icon: ShieldCheck },
  { id: 4, title: "Echocardiography", desc: "TTE, TEE, and stress echocardiography for precise cardiac imaging.", icon: Microscope }
];

export const CHAMBERS = [
  {
    id: 1,
    name: "Labaid Cardiac Hospital",
    address: "House 1, Road 4, Dhanmondi, Dhaka",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.204559599602!2d90.37021315000001!3d23.7455434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sLabaid%20Cardiac%20Hospital!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd",
    schedule: ["Sunday", "Tuesday", "Thursday"],
    time: "6:00 PM - 9:00 PM",
    fee: "1500 BDT"
  },
  {
    id: 2,
    name: "Popular Diagnostic Centre",
    address: "House 16, Road 2, Mirpur, Dhaka",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3283253755255!2d90.36544777610051!3d23.806921289354054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sPopular%20Diagnostic%20Center%20Ltd.%20(Mirpur%20Branch)!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd",
    schedule: ["Monday", "Wednesday"],
    time: "5:00 PM - 8:00 PM",
    fee: "1200 BDT"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Rahim Chowdhury",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop",
    text: "ওনাকে দেখানোর পর বাবার বুকের ব্যথা একদম কমে গেছে। খুবই ভালো একজন চিকিৎসক। (After consulting him, my father's chest pain has completely reduced. Highly recommended.)",
    rating: 5
  },
  {
    id: 2,
    name: "Abidur Rahman",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    text: "He explains things very clearly and gives enough time to patients. Amazing bedside manner and deep expertise in cardiology.",
    rating: 5
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    text: "সঠিক রোগ নির্ণয় এবং চমৎকার ব্যবহার। উনার প্রতি আমরা ভীষণ কৃতজ্ঞ। ওনার চিকিৎসা পেয়ে আমার মা এখন সম্পূর্ণ সুস্থ।",
    rating: 5
  }
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e18690c5e53b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
];
