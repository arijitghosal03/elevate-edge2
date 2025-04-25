import { motion } from 'framer-motion';

interface CustomCursorProps {
  position: { x: number; y: number };
  variant: string;
}

const cursorVariants = {
  default: {
    width: 24,
    height: 24,
    backgroundColor: "#FF2E2E",
  },
  link: {
    width: 60,
    height: 60,
    backgroundColor: "#FF2E2E",
    mixBlendMode: "difference" as const,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    mixBlendMode: "difference" as const,
  },
  text: {
    width: 150,
    height: 40,
    borderRadius: "4px",
    backgroundColor: "rgba(255, 46, 46, 0.1)",
    border: "1px solid #FF2E2E",
    color: "#FF2E2E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    mixBlendMode: "normal" as const,
  }
};

const CustomCursor: React.FC<CustomCursorProps> = ({ position, variant }) => {
  // Only show custom cursor on non-touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      animate={variant}
      variants={cursorVariants}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
};

export default CustomCursor;