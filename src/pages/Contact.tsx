import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('userName');
    const email = formData.get('userEmail');
    const program = formData.get('userProgram');
    const message = formData.get('userMessage');
    
    const text = `*New Inquiry from Elite Fit Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Program:* ${program}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917339472219?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-dark">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Contact Us"
            title="Start Your Legacy"
            subtitle="Ready to take the first step towards a stronger version of yourself? Reach out now."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border-white/10"
            >
              <h3 className="text-3xl font-heading font-black uppercase mb-8 tracking-tighter">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
                       <input 
                         name="userName"
                         type="text" 
                         required
                         placeholder="John Doe" 
                         className="w-full bg-dark-lighter border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand transition-all"
                       />
                    </div>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                       <input 
                         name="userEmail"
                         type="email" 
                         required
                         placeholder="john@example.com" 
                         className="w-full bg-dark-lighter border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand transition-all"
                       />
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interested Program</label>
                    <select name="userProgram" className="w-full bg-dark-lighter border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand transition-all appearance-none cursor-pointer">
                       <option>Strength Training</option>
                       <option>Weight Loss</option>
                       <option>Personal Training</option>
                       <option>Women Fitness</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                    <textarea 
                       name="userMessage"
                       rows={5}
                       required
                       placeholder="Tell us about your fitness goals..." 
                       className="w-full bg-dark-lighter border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand transition-all resize-none"
                    />
                 </div>
                 <button type="submit" className="w-full bg-brand text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center group">
                    Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </form>
            </motion.div>

            {/* Info & Map */}
            <div className="flex flex-col">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
               >
                  <div className="p-8 rounded-3xl bg-dark-lighter border border-white/5">
                     <Phone className="text-brand mb-4" size={32} />
                     <h4 className="text-lg font-bold mb-2">Speak to us</h4>
                     <p className="text-gray-400 font-medium">+91 73394 72219</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-dark-lighter border border-white/5">
                     <Clock className="text-brand mb-4" size={32} />
                     <h4 className="text-lg font-bold mb-2">Hours</h4>
                     <p className="text-gray-400 font-medium">Open 21-24 Hours</p>
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex-grow rounded-[2.5rem] overflow-hidden border border-white/10 relative h-[400px]"
               >
                 {/* Embedded Google Map Placeholder */}
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.22858100523!2d76.9360813!3d11.058866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cd6a93593b%3A0xe5a9994c6f5053b8!2sBase%20Fit%20Club!5e0!3m2!1sen!2sin!4v1715632000000!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-dark-lighter">
         <div className="max-w-4xl mx-auto">
            <SectionHeading 
              centered
              title="Common Inquiries"
              subtitle="Everything you need to know before starting your journey."
            />

            <div className="space-y-4 mt-16">
               {[
                 { q: "Do you offer physical personal training?", a: "Yes, we have certified personal trainers specializing in weight loss, bodybuilding, and functional fitness." },
                 { q: "Is the gym open on Sundays?", a: "We maintain different hours for Sundays, typical opening is from 6 AM to 12 PM. Please call for seasonal changes." },
                 { q: "What documents are required for membership?", a: "We only require a valid Government ID and a couple of passport sized photographs for our records." },
                 { q: "Do you have steam and shower facilities?", a: "Yes, we have modern shower areas and steam rooms available for our members." }
               ].map((item, i) => (
                 <motion.details 
                   key={i}
                   className="group bg-dark border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
                 >
                   <summary className="flex items-center justify-between p-6 list-none font-bold text-lg select-none">
                      {item.q}
                      <ChevronDown className="group-open:rotate-180 transition-transform" />
                   </summary>
                   <div className="px-6 pb-6 text-gray-400 leading-relaxed translate-y-[-10px] group-open:translate-y-0 transition-transform duration-300">
                      {item.a}
                   </div>
                 </motion.details>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
