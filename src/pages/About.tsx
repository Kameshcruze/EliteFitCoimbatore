import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Award, Target, Heart, Users, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      {/* Banner */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Elite Fit" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-heading font-black uppercase tracking-tighter mb-8"
          >
            OUR <span className="text-brand">STORY</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-brand mx-auto rounded-full" />
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Elite Fit Ambience" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 bg-brand p-8 rounded-3xl shadow-2xl z-20">
               <div className="text-5xl font-black mb-1">10+</div>
               <div className="text-xs font-bold tracking-widest uppercase">Years of Impact</div>
            </div>
          </div>

          <div>
            <SectionHeading 
              badge="Since 2014"
              title="Redefining Fitness in Coimbatore"
              subtitle="Elite Fit wasn't just built to be a gym. It was built to be a sanctuary for those who demand more from themselves."
            />
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                Located in the heart of Thudiyalur, Elite Fit Coimbatore started with a simple vision: 
                to bring world-class fitness infrastructure to our community. We believe that the environment 
                you train in dictates the results you achieve.
              </p>
              <p>
                From elite bodybuilders to beginners taking their first steps, our club has become 
                the premier destination for transformation. Our mix of cinematic aesthetics, heavy iron, 
                and science-based training creates an unmatched atmosphere of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-24 px-6 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered
            badge="Our Philosophy"
            title="The Base Pillars"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                icon: <Target className="w-10 h-10" />,
                title: "Infallible Discipline", 
                desc: "We focus on building habits that last a lifetime, ensuring consistency over intensity."
              },
              { 
                icon: <Award className="w-10 h-10" />,
                title: "Premium Standards", 
                desc: "From hygiene to equipment quality, we maintain elite standards across our facility."
              },
              { 
                icon: <Users className="w-10 h-10" />,
                title: "Strong Community", 
                desc: "At Elite Fit, you're not just a member; you're part of a tribe that lifts each other up."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-3xl bg-dark border border-white/5 hover:border-brand/30 transition-all duration-300 group"
              >
                <div className="text-brand mb-6 transform group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
                <h3 className="text-2xl font-heading font-black uppercase mb-4 tracking-tighter">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { value: "5000+", label: "Workout Hours" },
            { value: "800+", label: "Active Members" },
            { value: "100%", label: "Satisfaction" },
            { value: "50+", label: "Modern Machines" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-heading font-black text-white mb-2">{stat.value}</div>
              <div className="text-brand font-bold text-xs tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8">
            READY TO WRITE <br /> YOUR OWN CHAPTER?
          </h2>
          <button className="bg-brand text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center mx-auto">
            Get Started Now <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
