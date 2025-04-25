import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Target, Users, BarChart2 } from 'lucide-react';
import FloatingObjects from '../components/3d/FloatingObjects';

// Sample case studies data with more detailed information
const caseStudiesData = [
  {
    id: 1,
    title: "TechVision Brand Reinvention",
    client: "TechVision",
    category: "Branding",
    image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A complete brand overhaul for a tech company looking to reposition itself in the market.",
    challenge: "TechVision was struggling with an outdated brand identity that no longer reflected their innovative technology solutions. Their visual identity was inconsistent across platforms, and their messaging failed to communicate their unique value proposition.",
    approach: "We conducted extensive market research, competitor analysis, and customer interviews to understand perceptions and opportunities. We then developed a comprehensive brand strategy, including a new visual identity, tone of voice, and messaging framework.",
    solution: "We created a bold, forward-thinking brand identity with a modern logo, vibrant color palette, and custom iconography. We developed a new website, marketing materials, and social media templates to ensure consistency across all touchpoints.",
    results: [
      "40% increase in brand recognition within 6 months",
      "65% improvement in website engagement metrics",
      "32% increase in qualified leads",
      "Successful repositioning as an industry innovator"
    ],
    testimonial: {
      quote: "The Elevate Edge team completely transformed our brand. They understood our vision and translated it into a compelling identity that resonates with our target audience. The results have exceeded our expectations.",
      author: "Sarah Chen",
      position: "Chief Marketing Officer, TechVision"
    },
    images: [
      "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: 2,
    title: "Urban Style E-commerce Growth",
    client: "Urban Style",
    category: "Web Development",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A complete e-commerce redesign and optimization project for a fashion retailer.",
    challenge: "Urban Style was experiencing high bounce rates, low conversion rates, and cart abandonment issues on their e-commerce platform. Their website was slow, difficult to navigate, and not optimized for mobile devices.",
    approach: "We conducted user testing, heatmap analysis, and conversion path optimization to identify pain points in the customer journey. We then redesigned the website with a focus on user experience, performance, and mobile responsiveness.",
    solution: "We built a custom e-commerce platform with streamlined navigation, improved product filtering, simplified checkout process, and personalized product recommendations. We also implemented performance optimizations and mobile-first design principles.",
    results: [
      "85% increase in conversion rate",
      "53% reduction in cart abandonment",
      "120% increase in mobile sales",
      "42% improvement in average order value"
    ],
    testimonial: {
      quote: "The new website has transformed our business. It's not just beautiful—it's a powerful sales tool that has significantly increased our conversion rates and average order value.",
      author: "Michael Johnson",
      position: "E-commerce Director, Urban Style"
    },
    images: [
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
];

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchCaseStudy = () => {
      setLoading(true);
      setTimeout(() => {
        const study = caseStudiesData.find(study => study.id === parseInt(id));
        setCaseStudy(study);
        setLoading(false);
      }, 500);
    };
    
    fetchCaseStudy();
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
        <p className="text-neutral-600 mb-8">The case study you're looking for doesn't exist or has been removed.</p>
        <Link to="/case-studies" className="btn btn-primary">
          <ArrowLeft size={20} className="mr-2" />
          Back to Case Studies
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-neutral-950 text-white overflow-hidden">
        <FloatingObjects className="opacity-30" />
        
        <div className="container-custom z-10">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to All Case Studies
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-red-600 text-xl font-medium mb-4">{caseStudy.category}</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{caseStudy.title}</h1>
              <p className="text-xl text-neutral-300 mb-4">Client: {caseStudy.client}</p>
              <p className="text-xl md:text-2xl text-neutral-100 max-w-xl">
                {caseStudy.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Approach Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold">The Challenge</h3>
              </div>
              <p className="text-lg text-neutral-700">
                {caseStudy.challenge}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Approach</h3>
              </div>
              <p className="text-lg text-neutral-700">
                {caseStudy.approach}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-center mb-6">The Solution</h2>
            <p className="text-lg text-neutral-700 text-center">
              {caseStudy.solution}
            </p>
          </motion.div>
          
          {/* Image Gallery */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex items-center">
              {caseStudy.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: index === activeImageIndex ? 1 : 0 }}
                  animate={{ opacity: index === activeImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full ${index === activeImageIndex ? 'block' : 'hidden'}`}
                >
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} - Image ${index + 1}`} 
                    className="w-full h-auto rounded-2xl aspect-video object-cover"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudy.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeImageIndex ? 'bg-red-600' : 'bg-neutral-300'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveImageIndex(prev => (prev > 0 ? prev - 1 : caseStudy.images.length - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-lg"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => setActiveImageIndex(prev => (prev < caseStudy.images.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-lg"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <BarChart2 size={24} />
            </div>
            <h2>The Results</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4 mt-1 flex-shrink-0">
                      <Check size={16} />
                    </div>
                    <p className="text-lg">{result}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-8 rounded-2xl"
            >
              <blockquote className="relative">
                <div className="text-5xl text-red-600 absolute top-0 left-0">"</div>
                <p className="text-lg text-neutral-700 italic pl-8 pt-6">
                  {caseStudy.testimonial.quote}
                </p>
                <footer className="mt-6 pl-8">
                  <p className="font-bold">{caseStudy.testimonial.author}</p>
                  <p className="text-neutral-600">{caseStudy.testimonial.position}</p>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Next Steps CTA Section */}
      <section className="section bg-red-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Ready to create your success story?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Let's discuss how we can help your brand achieve similar results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn bg-white text-red-600 hover:bg-neutral-100 btn-lg">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/case-studies" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 btn-lg">
                View More Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPage;