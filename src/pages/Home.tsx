import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Star, Users, Clock, Award, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { cn } from '../lib/utils';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Elite Fit Coimbatore" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-xs tracking-widest uppercase mb-6"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                COIMBATORE'S MOST EXCLUSIVE GYM
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter uppercase leading-[0.85] mb-8"
              >
                TRAIN <span className="text-stroke text-transparent">BEYOND</span> LIMITS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
              >
                Experience the pinnacle of fitness in Thudiyalur. Elite Fit combines 
                elite coaching with world-class facilities to transform your life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link
                  to="/membership"
                  className="group relative px-10 py-5 bg-brand rounded-full text-white font-black uppercase tracking-widest overflow-hidden transition-all duration-300 flex items-center"
                >
                  <span className="relative z-10">Start Transformation</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <button className="flex items-center space-x-3 group">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/10 transition-all duration-300">
                    <Play className="text-white fill-white w-5 h-5 ml-1" />
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm">Virtual Tour</span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full" />
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-3xl mt-12">
                  <Star className="text-brand w-8 h-8 mb-4 fill-brand" />
                  <div className="text-4xl font-black mb-1">5.0</div>
                  <div className="text-gray-400 text-sm font-bold tracking-wider uppercase">Google Rating</div>
                </div>
                <div className="glass p-6 rounded-3xl">
                  <Users className="text-brand w-8 h-8 mb-4" />
                  <div className="text-4xl font-black mb-1">797+</div>
                  <div className="text-gray-400 text-sm font-bold tracking-wider uppercase">Happy Members</div>
                </div>
                <div className="glass p-6 rounded-3xl">
                   <Clock className="text-brand w-8 h-8 mb-4" />
                  <div className="text-4xl font-black mb-1">24H</div>
                  <div className="text-gray-400 text-sm font-bold tracking-wider uppercase">Open Access</div>
                </div>
                <div className="glass p-6 rounded-3xl -mt-12">
                  <Award className="text-brand w-8 h-8 mb-4" />
                  <div className="text-4xl font-black mb-1">15+</div>
                  <div className="text-gray-400 text-sm font-bold tracking-wider uppercase">Expert Coaches</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
          <p className="text-[10px] uppercase tracking-[0.5em] mt-4 font-bold">Scroll</p>
        </motion.div>
      </section>

      {/* Featured Programs Carousel/Preview */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Programs"
            title="Unlock Your Potential"
            subtitle="We offer diverse training methodologies tailored to your specific fitness goals and lifestyle."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Strength Training", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", desc: "Build explosive power and functional strength." },
              { title: "Women Fitness", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop", desc: "Specialized programs designed for female strength and toning." },
              { title: "Transformation", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", desc: "Guided weight loss and body recomposition journeys." }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
              >
                <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-heading font-black uppercase mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {program.desc}
                  </p>
                  <Link to="/programs" className="flex items-center text-brand font-bold text-xs tracking-widest uppercase">
                    Explore Program <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-dark-lighter relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10 rounded-3xl overflow-hidden border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=2052&auto=format&fit=crop" alt="Interior" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-brand/20 mix-blend-overlay" />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand rounded-3xl -z-0 opacity-20 rotate-12" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border-2 border-brand/20 rounded-full -z-0" />
          </div>

          <div>
            <SectionHeading 
              badge="Experience"
              title="State of the Art Facility"
              subtitle="More than just a gym, we are a community dedicated to achieving peak physical condition."
            />

            <div className="space-y-8 mt-12">
              {[
                { title: "Premium Equipment", desc: "Top-tier machines from global brands optimized for performance and safety." },
                { title: "Personalized Coaching", desc: "Our certified trainers provide 1-on-1 guidance to ensure you hit your numbers." },
                { title: "Luxury Amenities", desc: "Spacious locker rooms, steam paths, and modern recovery zones." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex space-x-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 text-brand font-black">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-black uppercase mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <SectionHeading 
            centered
            badge="Memberships"
            title="Choose Your Plan"
            subtitle="Flexible options designed to fit your fitness journey and commitment level."
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { name: "Monthly", price: "₹2,500", popular: false },
             { name: "Quarterly", price: "₹6,000", popular: false },
             { name: "Half Yearly", price: "₹11,000", popular: false },
             { name: "Annual", price: "₹18,000", popular: true }
           ].map((plan, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-10 rounded-3xl border transition-all duration-500 overflow-hidden",
                  plan.popular ? "bg-brand border-brand scale-105 z-10 shadow-2xl shadow-brand/40" : "bg-dark-lighter border-white/10 hover:border-brand/40"
                )}
             >
               {plan.popular && (
                 <div className="absolute top-6 right-6 bg-white text-brand px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                   Best Value
                 </div>
               )}
               <h3 className={cn("text-2xl font-heading font-black uppercase mb-4", plan.popular ? "text-white" : "text-white")}>{plan.name}</h3>
               <div className="flex items-baseline space-x-2 mb-8">
                 <span className={cn("text-5xl font-black", plan.popular ? "text-white" : "text-brand")}>{plan.price}</span>
                 <span className="text-gray-400 text-sm">/period</span>
               </div>
               <ul className="space-y-4 mb-10">
                 {["24/7 Gym Access", "Personalized Workout Plan", "Locker & Shower Access", "Fit Analysis Session"].map((feature, j) => (
                   <li key={j} className="flex items-center text-sm">
                     <div className={cn("w-1.5 h-1.5 rounded-full mr-3", plan.popular ? "bg-white" : "bg-brand")} />
                     <span className={plan.popular ? "text-white/80" : "text-gray-400"}>{feature}</span>
                   </li>
                 ))}
               </ul>
               <Link
                to="/membership"
                className={cn(
                  "block w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm text-center transition-all",
                  plan.popular ? "bg-white text-brand hover:scale-95" : "bg-brand text-white hover:bg-brand-alt"
                )}
               >
                Get Started
               </Link>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Custom Styles for Home */}
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Home;
