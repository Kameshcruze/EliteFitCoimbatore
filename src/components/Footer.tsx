import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-lighter pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-6 group">
            <Dumbbell className="text-brand w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-heading font-black text-2xl tracking-tighter">ELITE FIT</span>
          </Link>
          <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
            Coimbatore's premier fitness destination. Experience luxury training with 
            industry-leading equipment and expert guidance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-brand transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="text-gray-400 hover:text-brand transition-colors">Training Programs</Link></li>
            <li><Link to="/membership" className="text-gray-400 hover:text-brand transition-colors">Membership Plans</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-brand transition-colors">Success Stories</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-brand transition-colors">Contact & Location</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-gray-400">
              <MapPin size={20} className="text-brand flex-shrink-0 mt-1" />
              <span>1st floor, OM Towers, Opp to Pazhamudir Nilayam, Thudiyalur, Coimbatore</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Phone size={20} className="text-brand" />
              <span>+91 73394 72219</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Mail size={20} className="text-brand" />
              <span>info@elitefitclub.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
          <p className="text-gray-400 mb-6">Stay updated with our latest offers and fitness tips.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-dark border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-brand transition-colors"
            />
            <button className="absolute right-2 top-2 bg-brand p-1.5 rounded-md hover:bg-brand-alt transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Elite Fit Coimbatore. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
