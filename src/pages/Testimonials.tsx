import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Member since 2022",
    img: "https://i.pravatar.cc/150?u=rahul",
    text: "Elite Fit is easily the most premium gym in Coimbatore. The atmosphere here is electrical. It pushed me to lose 15kgs in 6 months. Best coaching I've ever experienced.",
    rating: 5
  },
  {
    id: 2,
    name: "Priyanka Nair",
    role: "Athlete",
    img: "https://i.pravatar.cc/150?u=priya",
    text: "Finding a gym that respects women's fitness while maintaining an intense environment is hard. Elite Fit does it perfectly. High-quality equipment and very respectful trainers.",
    rating: 5
  },
  {
    id: 3,
    name: "Arjun Vijay",
    role: "Bodybuilder",
    img: "https://i.pravatar.cc/150?u=arjun",
    text: "The equipment quality here is world-class. From basic benches to specialized isolation machines, they have everything. Highly recommended for serious lifting.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="pt-24 min-h-screen bg-dark">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Testimonials"
            title="The Pride of Elite Fit"
            subtitle="Don't take our word for it. Hear it from our members who have already transformed their lives."
          />

          <div className="relative mt-20 max-w-5xl mx-auto">
             <AnimatePresence mode="wait">
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.5 }}
                 className="glass p-10 md:p-20 rounded-[3rem] border-brand/20 relative"
               >
                 <Quote className="absolute top-10 right-10 text-brand/20 w-24 h-24 lg:w-40 lg:h-40" />
                 
                 <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-brand p-1 flex-shrink-0">
                       <img src={testimonials[index].img} alt={testimonials[index].name} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div>
                       <div className="flex space-x-1 mb-4">
                          {[...Array(testimonials[index].rating)].map((_, i) => (
                            <Star key={i} className="text-brand fill-brand w-5 h-5" />
                          ))}
                       </div>
                       <p className="text-2xl md:text-3xl italic leading-relaxed mb-8">
                         "{testimonials[index].text}"
                       </p>
                       <div>
                          <h4 className="text-2xl font-heading font-black uppercase">{testimonials[index].name}</h4>
                          <p className="text-brand text-xs font-bold uppercase tracking-[0.2em]">{testimonials[index].role}</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>

             <div className="flex justify-center mt-12 gap-6">
                <button 
                  onClick={prev}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={next}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all"
                >
                  <ChevronRight />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Review Links */}
      <section className="py-24 px-6 bg-dark-lighter border-y border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 text-center">
            <div>
               <h3 className="text-5xl font-black mb-2">5.0</h3>
               <div className="flex justify-center mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} className="text-brand fill-brand w-4 h-4" />)}
               </div>
               <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Google Rating</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
               <h3 className="text-5xl font-black mb-2">797+</h3>
               <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Verified Reviews</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div>
               <h3 className="text-5xl font-black mb-2">99%</h3>
               <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Success Rate</p>
            </div>
         </div>
      </section>

      {/* CTA Box */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto bg-brand rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
            <MessageSquare className="absolute -top-12 -right-12 w-64 h-64 text-white/10 rotate-12" />
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-8 relative z-10 leading-tight text-white">
               Ready to share <br /> your success?
            </h2>
            <button className="bg-white text-brand px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform relative z-10">
               Write a Review
            </button>
         </div>
      </section>
    </div>
  );
};

export default Testimonials;
