import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDownRight, Users, BarChart4, Target, Play, Megaphone, Code2, Store, Repeat } from 'lucide-react';

import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Scroll } from '@react-three/drei';

const HomePage = () => {
  const servicesRef = useRef(null);
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    return scrollYProgress.onChange(v => setScrollProgress(v));
  }, [scrollYProgress]);
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <BarChart4 size={36} className="text-red-600" />,
      title: "Digital Strategy",
      description: "We craft data-driven strategies tailored to your business goals and target audience."
    },
    {
      icon: <Target size={36} className="text-red-600" />,
      title: "Content Writing",
      description: "Engaging content that tells your story and connects with customers on a deeper level."
    },
    {
      icon: <Megaphone size={36} className="text-red-600" />,
      title: "Influencer Marketing",
      description: "Engaging content that tells your story and connects with customers on a deeper level."
    },
    {
      icon: <Code2 size={36} className="text-red-600" />,
      title: "Web Design and Development",
      description: "Websites for your brands."
    },
    {
      icon: <Store size={36} className="text-red-600" />,
      title: "Instore Branding",
      description: "Websites for your brands."
    },
    {
      icon: <Repeat size={36} className="text-red-600" />,
      title: "Retention Branding",
      description: "Websites for your brands."
    }
  ];

  const portfolioVideos = [
    {
      title: "Brand Evolution",
      url: "https://player.vimeo.com/video/123456789",
      thumbnail: "https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg"
    },
    {
      title: "Digital Transformation",
      url: "https://player.vimeo.com/video/234567890",
      thumbnail: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg"
    },
    {
      title: "Creative Campaign",
      url: "https://player.vimeo.com/video/345678901",
      thumbnail: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    }
  ];
  
  return (
    <div ref={containerRef} className="relative">
      {/* 3D Scene Container */}
      <div className="fixed inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <Environment preset="studio" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-28">
        <video 
    autoPlay 
    muted 
    loop 
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="https://elevate-edge2.vercel.app/models/hero_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          
          <div className="container-custom z-10 pt-10 md:pt-0">
            <div className="max-w-3xl">
          
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6 text-balance"
              >
                We create <span className="text-red-600 text-glow">digital experiences</span> that matter
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl"
              >
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <button 
                  onClick={scrollToServices}
                  className="btn btn-secondary btn-lg"
                >
                  Explore Our Services
                  <ArrowDownRight size={20} className="ml-2" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Video Section */}
        <section className="py-24 bg-neutral-950">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-white mb-6">Our Work in Motion</h2>
              <p className="text-neutral-400 text-xl">
                A glimpse into our creative process and results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-4 rounded-full bg-red-600 text-white">
                        <Play size={24} />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-white mt-4 text-xl font-medium">{video.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="section bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="handwritten text-red-600 text-2xl mb-4">What We Do Best</div>
              <h2 className="mb-6">Our Services</h2>
              <p className="text-xl">
                We combine creativity, technology, and strategy to deliver exceptional results for our clients.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-elevation hover:shadow-red transition-all duration-500 group perspective preserve-3d"
                >
                  <div className="d3-element mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="text-red-600 font-medium inline-flex items-center hover:text-red-800 transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-red-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="handwritten text-white text-2xl mb-4">Let's Create Together</div>
                <h2 className="mb-6">Ready to transform your digital presence?</h2>
                <p className="text-white/90 text-xl mb-8">
                  Let's create something exceptional together. Our team is ready to bring your vision to life.
                </p>
                <Link to="/contact" className="btn bg-white text-red-600 hover:bg-neutral-100 btn-lg">
                  Start a Project
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-full min-h-[300px] hidden lg:block"
              >
                <div className="relative w-96 h-96 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                  <img
                    src="../../public/models/avatar.png"
                    alt="Creative Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
