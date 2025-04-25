import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloatingObjects from '../components/3d/FloatingObjects';

const CaseStudiesPage = () => {
  // Categories for filtering
  const categories = ["All", "Branding", "Web Development", "Digital Marketing", "Content Creation"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "TechVision Brand Reinvention",
      client: "TechVision",
      category: "Branding",
      image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete brand overhaul resulting in 40% increased brand recognition.",
    },
    {
      id: 2,
      title: "Urban Style E-commerce Growth",
      client: "Urban Style",
      category: "Web Development",
      image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "E-commerce platform redesign that boosted conversions by 85%.",
    },
    {
      id: 3,
      title: "GreenLife Social Campaign",
      client: "GreenLife",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Sustainability campaign that reached over 2M people organically.",
    },
    {
      id: 4,
      title: "PetPals Video Series",
      client: "PetPals",
      category: "Content Creation",
      image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Award-winning video content that increased engagement by 215%.",
    },
    {
      id: 5,
      title: "Finance Pro Website Redesign",
      client: "Finance Pro",
      category: "Web Development",
      image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete UX overhaul resulting in 52% increase in lead generation.",
    },
    {
      id: 6,
      title: "Mountain Gear SEO Strategy",
      client: "Mountain Gear",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "SEO campaign that drove 124% increase in organic traffic.",
    }
  ];
  
  // Filter case studies based on active category
  const filteredCaseStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-28">
        <FloatingObjects className="opacity-50" />
        
        <div className="container-custom z-10 pt-10 md:pt-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-red-600 text-xl md:text-2xl font-medium mb-4"
            >
              Case Studies
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-balance"
            >
              Our <span className="text-red-600">work</span> speaks for itself
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl"
            >
              Explore our portfolio of successful projects and see how we've helped brands achieve their goals.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-[73px] z-30 shadow-subtle">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-red-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group perspective"
                >
                  <Link to={`/case-studies/${study.id}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl preserve-3d h-full">
                      <div className="transform transition-transform duration-700 group-hover:scale-105">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full aspect-[4/3] object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <span className="text-red-500 font-medium mb-2">{study.category}</span>
                        <h3 className="text-2xl text-white font-bold mb-2">{study.title}</h3>
                        <p className="text-white/80 mb-4">{study.client}</p>
                        <p className="text-white/90 mb-6 text-sm md:text-base hidden md:block">{study.description}</p>
                        <div className="flex items-center text-red-500 font-medium">
                          View Case Study <ArrowRight size={16} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-bold mb-4">No case studies found</h3>
              <p className="text-neutral-600 mb-8">
                We couldn't find any case studies matching your filter.
              </p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="btn btn-primary"
              >
                View All Case Studies
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-neutral-950 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Ready to be our next success story?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-300 mb-8"
            >
              Let's discuss how we can help your brand achieve similar results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;