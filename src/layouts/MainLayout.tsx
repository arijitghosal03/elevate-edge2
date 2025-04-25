import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

interface MainLayoutProps {
  setCursorVariant: (variant: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ setCursorVariant }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header scrollY={scrollY} setCursorVariant={setCursorVariant} />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer setCursorVariant={setCursorVariant} />
    </div>
  );
};

export default MainLayout;