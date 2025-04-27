import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // For actual implementation, connect this to your app's loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show for 3 seconds for demo purposes
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <div className="preloader">
        {/* Animated Text */}
        <div className="text-animation-container">
          <div className="welcome-text">
            <span className="welcome-letter w">trans</span>
            <span className="welcome-letter e1">form</span>
            <span className="welcome-letter space">&nbsp;</span>
            <span className="welcome-letter l">your</span>
            <span className="welcome-letter space">&nbsp;</span>
            <span className="welcome-letter c">business</span>
            <span className="welcome-letter space">&nbsp;</span>
            <span className="welcome-letter o">with</span>
          </div>
          
          <div className="elevate-edge-container">
            <div className="particles-container">
              {/* Particles will be generated via CSS */}
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className={`particle particle-${i}`}></div>
              ))}
            </div>
            
            <div className="logo-container">
              <div className="elevate-text">Elevate</div>
              <div className="edge-text">EDGE</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
        
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .preloader {
          margin: auto;
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Text Animation Container */
        .text-animation-container {
          position: absolute;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90%;
          max-width: 700px;
          padding: 1rem;
        }
        
        /* Welcome Text Animation */
        .welcome-text {
          font-family: 'Pacifico', cursive;
          font-size: clamp(1.5rem, 5vw, 3rem);
          color: #171717;
          position: relative;
          height: auto;
          min-height: 3rem;
          margin-bottom: clamp(0.5rem, 2vw, 1rem);
          text-align: center;
          opacity: 0.9;
          width: 100%;
          line-height: 1.3;
        }
        
        .elevate-edge-container {
          position: relative;
          width: 100%;
          height: auto;
          min-height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: clamp(1rem, 3vw, 2rem) 0;
        }
        
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          background-color: #e10000;
          opacity: 0.6;
          border-radius: 50%;
          z-index: 1;
          pointer-events: none; 
        }
        
        /* Generate 30 unique particles with different sizes, positions, and animations */
        ${Array.from({ length: 30 }).map((_, i) => `
          .particle-${i} {
            width: ${3 + Math.random() * 6}px;
            height: ${3 + Math.random() * 6}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-${i} ${5 + Math.random() * 10}s linear infinite;
          }
          
          @keyframes float-${i} {
            0% {
              transform: translate(0, 0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: ${0.3 + Math.random() * 0.7};
            }
            90% {
              opacity: ${0.3 + Math.random() * 0.7};
            }
            100% {
              transform: translate(
                ${-50 + Math.random() * 100}px, 
                ${-50 + Math.random() * 100}px
              ) rotate(${Math.random() * 360}deg);
              opacity: 0;
            }
          }
        `).join('\n')}
        
        .logo-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: logo-appear 1.5s forwards cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateY(50px);
          opacity: 0;
          width: 100%;
        }
        
        @keyframes logo-appear {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .elevate-text {
          font-family: 'League Spartan', Arial, sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 8vw, 3.5rem);
          color: #e10000;
          letter-spacing: clamp(-3px, -1vw, -5px);
          margin-bottom: clamp(-10px, -2vw, -15px);
          position: relative;
          animation: elevate-glow 3s infinite alternate;
          line-height: 1;
        }
        
        @keyframes elevate-glow {
          0% {
            text-shadow: 0 0 5px rgba(225, 0, 0, 0);
          }
          100% {
            text-shadow: 0 0 15px rgba(228, 0, 0, 0.5);
          }
        }
        
        .edge-text {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-weight: 500;
          font-size: clamp(0.8rem, 3vw, 1.2rem);
          color: #333;
          letter-spacing: clamp(3px, 1vw, 5px);
          transform: translateX(2.5px);
        }
        
        /* Create an animated highlight effect */
        .elevate-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent
          );
          animation: shine 4s infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        
        .welcome-letter {
          display: inline-block;
          opacity: 0;
          filter: blur(3px);
          animation-name: handwriting;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
        
        .welcome-letter.w { animation-delay: 0.5s; }
        .welcome-letter.e1 { animation-delay: 0.7s; }
        .welcome-letter.l { animation-delay: 0.9s; }
        .welcome-letter.c { animation-delay: 1.1s; }
        .welcome-letter.o { animation-delay: 1.3s; }
        .welcome-letter.space { animation-delay: 1.8s; }
        
        @keyframes handwriting {
          0% {
            opacity: 0;
            transform: translateY(5px);
            filter: blur(10px);
          }
          80% {
            opacity: 0.9;
            transform: translateY(0);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .welcome-text {
            margin-bottom: 0.5rem;
          }
          
          .elevate-edge-container {
            min-height: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .text-animation-container {
            width: 95%;
          }
          
          .welcome-text {
            font-size: 1.5rem;
            min-height: 2rem;
          }
          
          .elevate-text {
            font-size: 2rem;
            letter-spacing: -3px;
            margin-bottom: -10px;
          }
          
          .edge-text {
            font-size: 0.8rem;
            letter-spacing: 3px;
          }
          
          .elevate-edge-container {
            min-height: 50px;
            padding: 0.5rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;