import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Dumbbell, Heart, Zap, User, Users, Flame, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Strength Training",
    icon: <Dumbbell className="w-12 h-12" />,
    desc: "Our power-oriented training using elite free weights and specialized machines to maximize hypertrophy and force production.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-600/20 to-brand/20"
  },
  {
    title: "Weight Loss",
    icon: <Flame className="w-12 h-12" />,
    desc: "High-intensity metabolism-boosting sessions combined with personalized nutritional tracking for guaranteed fat loss.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    color: "from-orange-600/20 to-brand/20"
  },
  {
    title: "Women Fitness",
    icon: <Heart className="w-12 h-12" />,
    desc: "A secure, empowering environment with programs focused on toning, flexibility, and female-specific athletic goals.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    color: "from-pink-600/20 to-brand/20"
  },
  {
    title: "Personal Training",
    icon: <User className="w-12 h-12" />,
    desc: "1-on-1 elite coaching. Your trainer builds every set, rep, and meal specifically for your body and goals.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop",
    color: "from-brand/20 to-brand-alt/20"
  },
  {
    title: "Functional Fitness",
    icon: <Zap className="w-12 h-12" />,
    desc: "Real-world movement patterns that improve mobility, balance, and core stability for a better life outside the gym.",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    color: "from-green-600/20 to-brand/20"
  },
  {
    title: "Bodybuilding",
    icon: <Shield className="w-12 h-12" />,
    desc: "Precision muscle sculpting for enthusiasts looking to compete or achieve that peak aesthetic physique.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-600/20 to-brand/20"
  }
];

const Programs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Services"
            title="Engineered for Greatness"
            subtitle="Whatever your objective, we have a specialized path designed to get you there faster."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-white/5"
              >
                {/* Background Image */}
                <img 
                  src={program.img} 
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent transition-opacity duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-6 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-brand mb-4">{program.icon}</div>
                    <h3 className="text-3xl font-heading font-black uppercase tracking-tighter leading-tight mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {program.desc}
                    </p>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center space-x-2 text-brand font-black uppercase text-xs tracking-widest"
                  >
                    <span>Inquire Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-dark-lighter">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-6">
                Not sure where to start?
              </h2>
              <p className="text-gray-400 text-lg">
                Meet with one of our head trainers for a FREE physical evaluation and 
                personalized roadmap session. No strings attached.
              </p>
            </div>
            <Link 
               to="/contact" 
               className="bg-brand text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-alt transition-all whitespace-nowrap shadow-xl shadow-brand/20"
            >
               Book Free Evaluation
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Programs;
