import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // For actual implementation, connect this to your app's loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show for 10 seconds for demo purposes
    
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
            {/* <span className="welcome-letter m">,</span> */}
            {/* <span className="welcome-letter e2">e</span> */}
            
            <span className="welcome-letter space">&nbsp;</span>
            
            {/* <span className="welcome-letter t">t</span>
            <span className="welcome-letter o2">o</span> */}
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
        
        {/* Original box animation - kept as background element */}
   
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
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
          width: 100%;
        }
        
        /* Welcome Text Animation */
        .welcome-text {
          font-family: 'Pacifico', cursive;
          font-size: 3rem;
          color: #fff;
          position: relative;
          height: 5rem;
          margin-bottom: 1rem;
          text-align: center;
          opacity: 0.9;
        }
        .elevate-edge-container {
      position: relative;
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
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
      font-size: 3.5rem;
      color: #e10000;
      letter-spacing: -5px;
      margin-bottom: -15px;
      position: relative;
      animation: elevate-glow 3s infinite alternate;
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
      font-size: 1.2rem;
      color: #333;
      letter-spacing: 5px;
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
        
        .welcome-letter.w { animation-delay: 0.5s; color: #171717 }
        .welcome-letter.e1 { animation-delay: 0.7s; color:#171717  }
        .welcome-letter.l { animation-delay: 0.9s; color:#171717 }
        .welcome-letter.c { animation-delay: 1.1s;color:#171717  }
        .welcome-letter.o { animation-delay: 1.3s; color: #171717 }
        .welcome-letter.m { animation-delay: 1.5s; }
        .welcome-letter.e2 { animation-delay: 1.7s; }
        .welcome-letter.space { animation-delay: 1.8s; }
        .welcome-letter.t { animation-delay: 1.9s; }
        .welcome-letter.o2 { animation-delay: 2.1s; }
        
        /* Elevate Edge Animation */
        .elevate-edge-container {
          position: relative;
          height: 5rem;
          overflow: visible;
          perspective: 1000px;
        }
        
        .elevate-edge-text {
          font-family: 'Futura', 'Arial Black', sans-serif;
          font-weight: 800;
          font-size: 4rem;
          color: white;
          text-align: center;
          opacity: 0;
          transform: translateY(-200px) translateZ(-200px) rotateX(60deg);
          animation: dropText 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2.5s forwards;
          text-shadow: 
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25);
        }
        
        /* Box Animation Container */
        .box-container {
          position: absolute;
          width: 12em;
          height: 24em;
          opacity: 0.3;
          z-index: 1;
        }
        
        /* Animations */
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
        
        @keyframes dropText {
          0% {
            opacity: 0;
            transform: translateY(-200px) translateZ(-200px) rotateX(60deg);
          }
          30% {
            opacity: 1;
            transform: translateY(10px) translateZ(0) rotateX(0deg);
          }
          40% {
            transform: translateY(-15px) translateZ(0) rotateX(-5deg);
          }
          60% {
            transform: translateY(5px) translateZ(0) rotateX(2deg);
          }
          80% {
            transform: translateY(-2px) translateZ(0) rotateX(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateZ(0) rotateX(0deg);
          }
        }
        
        /* Original box animation styles - kept for background element */
        .preloader, .box, .box__inner, .box__inner div {
          transform-style: preserve-3d;
        }
        
        .box, .box__inner, .box__inner div {
          position: absolute;
        }
        
        .box, .box__inner div {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        .box {
          animation-duration: 4s;
        }
        
        .box__inner div {
          background: #ffffff;
        }
        
        /* Boxes */
        .box, .box__inner {
          width: 100%;
          height: 50%;
        }
        
        .box {
          animation-name: popOut;
          top: 50%;
          perspective: 25em;
          transform-origin: 50% 75%;
          z-index: 1;
        }
        
        .box + .box {
          animation-delay: -2s;
        }
        
        .box__inner, .box__inner div {
          animation-delay: inherit;
          animation-duration: inherit;
        }
        
        .box__inner {
          transform: rotateX(50deg);
          transform-origin: 50% 25%;
        }
        
        .box__inner div {
          box-shadow: 0 0 0 0.2em #e10000 inset;
        }
        
        .box__back-flap, .box__front-flap, .box__front {
          width: 6em;
        }
        
        .box__left-flap, .box__right-flap, .box__front {
          height: 6em;
        }
        
        .box__back-flap, .box__front-flap {
          left: 3em;
          height: 3em;
        }
        
        .box__left-flap, .box__right-flap {
          top: 3em;
          width: 3em;
        }
        
        .box__back-flap {
          animation-name: backFlap;
          transform: rotateX(-180deg);
          transform-origin: 50% 100%;
        }
        
        .box__right-flap {
          animation-name: rightFlap;
          left: 9em;
          transform: rotateY(-179deg);
          transform-origin: 0 50%;
        }
        
        .box__front-flap {
          animation-name: frontFlap;
          top: 9em;
          transform: rotateX(180deg);
          transform-origin: 50% 0;
        }
        
        .box__left-flap {
          animation-name: leftFlap;
          transform: rotateY(179deg);
          transform-origin: 100% 50%;
        }
        
        .box__front {
          top: 3em;
          left: 3em;
          transform: rotateX(-90deg) translateY(50%) translateZ(3em);
        }
        
        @keyframes backFlap {
          from, 16.5% { transform: rotateX(-180deg); }
          20.5% { transform: rotateX(10deg); }
          22.5% { transform: rotateX(-27deg); }
          25%, 50% { transform: rotateX(-15deg); }
          55%, 75% { transform: rotateX(-15deg); }
          80%, to { transform: rotateX(-180deg); }
        }
        
        @keyframes rightFlap {
          from, 16.5% { transform: rotateY(-179deg); }
          20.5% { transform: rotateY(10deg); }
          22.5% { transform: rotateY(-27deg); }
          25%, 50% { transform: rotateY(-15deg); }
          55%, 75% { transform: rotateY(-15deg); }
          80%, to { transform: rotateY(-179deg); }
        }
        
        @keyframes frontFlap {
          from, 16.5% { transform: rotateX(180deg); }
          20.5% { transform: rotateX(-10deg); }
          22.5% { transform: rotateX(27deg); }
          25%, 50% { transform: rotateX(15deg); }
          55%, 75% { transform: rotateX(15deg); }
          80%, to { transform: rotateX(180deg); }
        }
        
        @keyframes leftFlap {
          from, 16.5% { transform: rotateY(179deg); }
          20.5% { transform: rotateY(-10deg); }
          22.5% { transform: rotateY(27deg); }
          25%, 50% { transform: rotateY(15deg); }
          55%, 75% { transform: rotateY(15deg); }
          80%, to { transform: rotateY(179deg); }
        }
        
        @keyframes popOut {
          from, 10.5% { transform: translateZ(1px) translateY(0) scale(0,0); }
          16.5% { transform: translateZ(1px) translateY(-100%) scale(0.75,1.5); }
          20.5% { transform: translateZ(1px) translateY(-100%) scale(1,1); }
          21%, 25% { transform: translateZ(0) translateY(-100%) scale(1,1); }
          27.5% { transform: translateZ(0) translateY(-100%) scale(0.75,1.5); }
          30% { transform: translateZ(0) translateY(0) scale(1.5,0.75); }
          33.5% { transform: translateZ(0) translateY(0) scale(1,1); }
          50% { transform: translateZ(0) translateY(0) scale(1,1); }
          65% { transform: translateZ(0) translateY(0) scale(1,1); }
          75% { transform: translateZ(0) translateY(0) scale(0,0); }
          to { transform: translateZ(0) translateY(0) scale(0,0); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;