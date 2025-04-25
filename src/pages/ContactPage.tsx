import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import FloatingObjects from '../components/3d/FloatingObjects';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, error: false });
      // Clear form after submission
      setFormState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1000);
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
  
  const services = [
    "Digital Strategy",
    "Brand Identity",
    "Web Development",
    "Content Creation",
    "SEO Optimization",
    "Social Media",
    "Other"
  ];
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-red-600" />,
      title: "Visit Us",
      details: [
        "Kolkata"
      ]
    },
    {
      icon: <Phone size={24} className="text-red-600" />,
      title: "Call Us",
      details: [
        "+91 - 02348484949",
        "Mon-Fri: 9:00 AM - 6:00 PM"
      ]
    },
    {
      icon: <Mail size={24} className="text-red-600" />,
      title: "Email Us",
      details: [
        "hello@Elevate Edge.com",
        "info@ElevateEdge.com"
      ]
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-28">
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
              Contact Us
            </motion.div>
            
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-6 text-balance"
            >
              Let's create something <span className="text-red-600">amazing</span> together
            </motion.h1>
            
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Have a project in mind? We'd love to hear about it. Get in touch with us to discuss how we can help bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elevation p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full btn btn-primary btn-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-neutral-600 mb-12">
                Prefer to reach out directly? Contact us through any of the channels below.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl mr-6 flex-shrink-0 self-start">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-neutral-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Map (placeholder) */}
              <div className="mt-12 rounded-2xl overflow-hidden h-80 bg-neutral-100">
                <img 
                  src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600">
              Have questions? We're here to help.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto divide-y divide-neutral-200">
            {[
              {
                question: "What is your typical process for new projects?",
                answer: "Our process typically involves an initial discovery phase, followed by strategy development, creation, launch, and ongoing optimization. We'll work closely with you throughout each step to ensure your vision is brought to life."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. A website redesign might take 8-12 weeks, while a comprehensive brand identity project could take 12-16 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. This can include technical support, content updates, performance monitoring, and strategic consultations."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work with clients across various industries, including technology, healthcare, education, e-commerce, and professional services. Our diverse experience allows us to bring fresh perspectives to any industry."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-6"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-neutral-900">{faq.question}</h3>
                </div>
                <p className="mt-3 text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;