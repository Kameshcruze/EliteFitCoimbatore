import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Check, Info, ShieldCheck, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            badge="Investment"
            title="Membership Tiers"
            subtitle="Premium access to elite fitness. Choose the commitment that aligns with your ultimate goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4">
             {[
               { name: "Monthly", price: "2,500", desc: "Short term flexibility", icon: <Info /> },
               { name: "Quarterly", price: "6,000", desc: "Most popular starter", icon: <Zap /> },
               { name: "Half Yearly", price: "11,000", desc: "Serious commitment", icon: <ShieldCheck /> },
               { name: "Annual", price: "18,000", desc: "Lifestyle transformation", icon: <Star />, popular: true }
             ].map((plan, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'bg-brand border-brand shadow-2xl shadow-brand/40 scale-105 z-10' : 'bg-dark-lighter border-white/5'} flex flex-col`}
               >
                 {plan.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                     Recommended Option
                   </div>
                 )}
                 
                 <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-white/20' : 'bg-brand/10'} flex items-center justify-center mb-6`}>
                    {React.cloneElement(plan.icon as React.ReactElement, { className: plan.popular ? "text-white" : "text-brand" })}
                 </div>

                 <h3 className="text-2xl font-heading font-black uppercase mb-1 tracking-tight">{plan.name}</h3>
                 <p className={`${plan.popular ? 'text-white/70' : 'text-gray-500'} text-xs font-bold uppercase tracking-widest mb-8`}>{plan.desc}</p>
                 
                 <div className="flex items-baseline space-x-1 mb-8">
                   <span className="text-lg font-bold">₹</span>
                   <span className="text-5xl font-black">{plan.price}</span>
                   <span className={`${plan.popular ? 'text-white/50' : 'text-gray-500'} text-sm`}>+ GST</span>
                 </div>

                 <div className="space-y-4 mb-10 flex-grow">
                   {[
                     "Elite Gym Access",
                     "Premium Locker Room",
                     "Steam & Shower",
                     "Physique Analysis",
                     "Basic App Guide"
                   ].map((feat, j) => (
                     <div key={j} className="flex items-center space-x-3 text-sm">
                       <div className={`w-5 h-5 rounded-full ${plan.popular ? 'bg-white/20' : 'bg-brand/10'} flex items-center justify-center`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-brand'}`} />
                       </div>
                       <span className={plan.popular ? "text-white/90" : "text-gray-300"}>{feat}</span>
                     </div>
                   ))}
                 </div>

                 <Link 
                   to="/contact" 
                   className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${plan.popular ? 'bg-white text-brand hover:scale-[0.98]' : 'bg-brand text-white hover:bg-brand-alt'}`}
                 >
                   Become a Member
                 </Link>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 bg-dark-lighter">
         <div className="max-w-5xl mx-auto">
            <SectionHeading 
              centered
              title="Feature Comparison"
              subtitle="Detailed breakdown of what makes Elite Fit the best choice for you."
            />

            <div className="mt-16 overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/10 uppercase text-[10px] tracking-widest font-black text-gray-500">
                        <th className="py-6 px-4">Feature</th>
                        <th className="py-6 px-4">Standard</th>
                        <th className="py-6 px-4 text-brand">Premium (PT)</th>
                     </tr>
                  </thead>
                  <tbody className="text-gray-300">
                     {[
                       ["24H Access", true, true],
                       ["Expert Coaching", "On Request", "Daily 1-on-1"],
                       ["Nutrition Planning", "Generic", "Customized"],
                       ["Performance Audit", "Monthly", "Weekly"],
                       ["Guest Pass", "1 / Month", "Unlimited"],
                       ["Recovery Zone", "Standard", "Priority"]
                     ].map((row, i) => (
                       <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="py-5 px-4 font-bold">{row[0]}</td>
                          <td className="py-5 px-4">{row[1] === true ? <Check className="text-gray-500" size={18} /> : row[1]}</td>
                          <td className="py-5 px-4 text-brand font-bold">{row[2] === true ? <Check className="text-brand" size={18} /> : row[2]}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Free Trial */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl -z-10" />
         <div className="max-w-4xl mx-auto text-center glass p-16 rounded-[4rem]">
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-8">Want a test drive?</h2>
            <p className="text-gray-400 text-lg mb-12">
               Experience the atmosphere for yourself. Book a one-day trial pass with full access 
               to equipment and facilities. Completely free of charge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-brand text-white px-12 py-5 rounded-full font-black uppercase">Book Free Trial</Link>
              <a href="tel:+917339472219" className="border border-white/10 text-white px-12 py-5 rounded-full font-black uppercase hover:bg-white/5 transition-colors">Call For Inquiry</a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Membership;
