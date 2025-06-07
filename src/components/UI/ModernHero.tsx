
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MicroInteractions from "./MicroInteractions";

interface ModernHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const ModernHero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: ModernHeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Start animation sequence after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-primary/5">
      {/* Animated background blobs */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at ${70 - mousePosition.x * 30}% ${30 - mousePosition.y * 30}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at ${20 + mousePosition.y * 20}% ${80 + mousePosition.x * 20}%, rgba(244, 63, 94, 0.08) 0%, transparent 40%)`
        }}
      >
        <div className="bg-grid-pattern opacity-5 absolute inset-0"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text content */}
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              variants={textVariants}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 dark:bg-primary/20 backdrop-blur-sm rounded-full"
            >
              <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-primary font-medium text-sm">Ehrliche Empfehlungen für dein Leben</span>
            </motion.div>
            
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary/80"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              variants={buttonVariants}
              className="flex flex-wrap gap-4"
            >
              {ctaText && ctaLink && (
                <MicroInteractions type="hover">
                  <Link
                    to={ctaLink}
                    className="group inline-flex items-center bg-primary text-primary-foreground 
                    px-6 py-3 rounded-lg shadow-lg shadow-primary/20
                    hover:shadow-xl hover:shadow-primary/30 transition-all duration-300
                    border border-primary/20 relative overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">{ctaText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                    
                    {/* Button hover effect */}
                    <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Link>
                </MicroInteractions>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <MicroInteractions type="hover">
                  <Link
                    to={secondaryCtaLink}
                    className="group inline-flex items-center bg-background/80 backdrop-blur-md 
                    border border-border text-foreground px-6 py-3 rounded-lg
                    hover:bg-background/90 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">{secondaryCtaText}</span>
                    <ArrowRight className="ml-2 h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100 relative z-10" />
                  </Link>
                </MicroInteractions>
              )}
            </motion.div>
          </motion.div>
          
          {/* Image/visual content */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative mt-10 lg:mt-0"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500/10 rounded-full"
              animate={{ 
                y: [0, -10, 0], 
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute -bottom-10 -right-6 w-24 h-24 bg-green-500/10 rounded-full"
              animate={{ 
                y: [0, 15, 0], 
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            />
            
            <MicroInteractions type="hover">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
                <img
                  src={imageSrc || "/lovable-uploads/e20d1a22-a3ff-4bda-9092-5dc8d352f9e9.png"}
                  alt="MyLifeTips Illustration"
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{ minHeight: '400px', maxHeight: '500px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                
                {/* Image shine effect */}
                <motion.div 
                  className="absolute inset-0 w-full h-full opacity-0"
                  animate={{ 
                    background: [
                      'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.15) 60%, transparent 70%)',
                      'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.15) 10%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.15) 30%, transparent 40%)',
                    ],
                    opacity: [0, 0.5, 0],
                    backgroundSize: ['200% 100%', '200% 100%'],
                    backgroundPosition: ['-100% 0%', '200% 0%']
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              </div>
            </MicroInteractions>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground">Scroll nach unten</span>
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-center justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
