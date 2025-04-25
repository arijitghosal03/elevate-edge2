import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Layers, Globe, Zap, Search, MessageSquare } from 'lucide-react';
import FloatingObjects from '../components/3d/FloatingObjects';

const ServicesPage = () => {
  const services = [
    {
      icon: <BarChart2 size={40} className="text-red-600" />,
      title: "Digital Strategy",
      description: "We develop comprehensive digital strategies tailored to your business goals, target audience, and competitive landscape.",
      features: [
        "Market & competitor analysis",
        "Target audience definition",
        "Channel strategy",
        "KPI establishment"
      ]
    },
    {
      icon: <Layers size={40} className="text-red-600" />,
      title: "Brand Identity",
      description: "Create a compelling brand that resonates with your audience and stands out in the market.",
      features: [
        "Brand positioning",
        "Visual identity design",
        "Voice & messaging",
        "Brand guidelines"
      ]
    },
    {
      icon: <Globe size={40} className="text-red-600" />,
      title: "Web Development",
      description: "We build beautiful, functional websites and applications that provide exceptional user experiences.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Web applications",
        "CMS implementation"
      ]
    },
    {
      icon: <Zap size={40} className="text-red-600" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with customers on a deeper level.",
      features: [
        "Content strategy",
        "Copywriting",
        "Video production",
        "Social media content"
      ]
    },
    {
      icon: <Search size={40} className="text-red-600" />,
      title: "SEO Optimization",
      description: "Improve your online visibility and drive organic traffic through strategic search engine optimization.",
      features: [
        "Technical SEO audits",
        "Keyword research",
        "On-page optimization",
        "Link building strategy"
      ]
    },
    {
      icon: <MessageSquare size={40} className="text-red-600" />,
      title: "Social Media",
      description: "Build meaningful connections with your audience through strategic social media management.",
      features: [
        "Platform strategy",
        "Content calendar",
        "Community management",
        "Paid social campaigns"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, audience, and challenges."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We develop a tailored approach based on research and industry insights."
    },
    {
      number: "03",
      title: "Creation",
      description: "Our team brings the strategy to life with creative, technical excellence."
    },
    {
      number: "04",
      title: "Launch",
      description: "We implement, test, and refine to ensure everything performs perfectly."
    },
    {
      number: "05",
      title: "Optimization",
      description: "We continuously measure, analyze, and improve based on real-world data."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28">
        <FloatingObjects className="opacity-50" />
        
        <div className="container-custom z-10 pt-10 md:pt-0">
          <div className="max-w-3xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-red-600 text-xl md:text-2xl font-medium mb-4"
            >
              Our Services
            </motion.div>
            
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-6 text-balance"
            >
              Full-spectrum <span className="text-red-600">digital solutions</span> for growing brands
            </motion.h1>
            
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              From strategic planning to flawless execution, we provide end-to-end digital services to elevate your brand.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-elevation hover:shadow-red transition-all duration-500 group perspective"
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
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

      {/* Process Section */}
      <section className="section bg-neutral-950 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="mb-6">Our Process</h2>
            <p className="text-xl text-neutral-300">
              A methodical approach to delivering exceptional results.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-red-600 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-full md:w-1/2 text-center ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-5xl font-bold text-red-600 mb-4">{step.number}</div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-neutral-300">{step.description}</p>
                  </div>
                  
                  <div className="relative w-12 h-12 rounded-full bg-red-600 flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-red-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Ready to elevate your digital presence?</h2>
              <p className="text-white/90 text-xl mb-8">
                Let's discuss how our services can help achieve your business goals. Schedule a consultation today.
              </p>
              <Link to="/contact" className="btn bg-white text-red-600 hover:bg-neutral-100 btn-lg">
                Schedule a Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[300px] hidden lg:block"
            >
              <FloatingObjects className="opacity-90" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;