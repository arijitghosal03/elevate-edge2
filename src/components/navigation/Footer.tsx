import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskConical, Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCursorVariant: (variant: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCursorVariant }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link 
              to="/" 
              className="flex items-center"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
          
              <span className="text-2xl font-display font-bold">Elevate Edge</span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-md">
              We create memorable digital experiences that connect brands with their audiences in meaningful ways.
            </p>
            <div className="flex space-x-4 mt-8">
              {[
                { icon: <Instagram size={20} />, url: '#' },
                { icon: <Twitter size={20} />, url: '#' },
                { icon: <Linkedin size={20} />, url: '#' },
                { icon: <Mail size={20} />, url: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Digital Strategy', 'Web Development', 'Brand Identity', 'Content Creation', 'SEO Optimization'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services"
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold mb-6">Subscribe to our newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-neutral-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                onFocus={() => setCursorVariant('text')}
                onBlur={() => setCursorVariant('default')}
              />
              <button 
                className="bg-red-600 text-white px-4 py-3 rounded-r-lg hover:bg-red-700 transition-colors duration-300"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="mt-4 text-neutral-500 text-sm">
              Get the latest insights and tips on digital marketing straight to your inbox.
            </p>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {year} Elevate Edge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a 
              href="#" 
              className="text-neutral-500 hover:text-white text-sm transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-neutral-500 hover:text-white text-sm transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;