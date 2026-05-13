import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Play, Instagram, ChevronLeft, ChevronRight, X } from 'lucide-react';

const categories = ["All", "Interiors", "Workouts", "Transformations", "Community"];

const images = [
  { id: 1, cat: "Interiors", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", title: "Main Training Zone" },
  { id: 2, cat: "Workouts", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", title: "Intense Session" },
  { id: 3, cat: "Interiors", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop", title: "Equipment Showcase" },
  { id: 4, cat: "Transformations", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", title: "Real Results" },
  { id: 5, cat: "Community", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop", title: "Group Synergy" },
  { id: 6, cat: "Workouts", url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop", title: "Heavy Iron" },
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = images.filter(img => activeTab === "All" || img.cat === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-dark">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Visuals"
            title="The Prime Showcase"
            subtitle="Explore the environment where champions are forged and goals are crushed."
          />

          {/* Filtering */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === cat ? 'bg-brand border-brand text-white' : 'bg-dark-lighter border-white/10 text-gray-500 hover:border-brand/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg(img.url)}
                  className="group relative cursor-pointer aspect-square rounded-3xl overflow-hidden glass border-white/5"
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Play className="fill-white text-white w-5 h-5 ml-1" />
                    </div>
                    <span className="text-xs font-bold text-brand uppercase tracking-widest mb-2">{img.cat}</span>
                    <h3 className="text-xl font-heading font-black uppercase tracking-tighter">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-brand transition-colors p-2 z-[110]">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Section */}
      <section className="py-24 px-6 bg-dark-lighter border-t border-white/5">
         <div className="max-w-7xl mx-auto text-center">
            <Instagram size={48} className="text-brand mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8">Follow Our Journey</h2>
            <p className="text-gray-400 text-lg mb-12">Get daily motivation, transformation alerts, and behind-the-scenes content.</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="inline-flex items-center space-x-4 bg-white text-dark px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              <span>@BaseFitCoimbatore</span>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Gallery;
