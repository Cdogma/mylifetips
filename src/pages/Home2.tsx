
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Heart, Star, Globe, Shield, Rocket, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/UI/PageTransition";
import MicroInteractions from "../components/UI/MicroInteractions";

const Home2 = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  
  // Enhanced parallax effects
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const yFeatures = useTransform(scrollYProgress, [0.2, 0.8], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ 
        x: (clientX / innerWidth) * 100, 
        y: (clientY / innerHeight) * 100 
      });
      
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Enhanced particle system
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];
    
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Connection lines
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
        
        // Particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Hypersonische Performance",
      description: "Quantum-optimierte Algorithmen für unvorstellbare Geschwindigkeit",
      color: "from-amber-400 via-orange-500 to-red-500",
      delay: 0
    },
    {
      icon: Shield,
      title: "Unzerbrechliche Sicherheit",
      description: "Militärgrade Verschlüsselung mit KI-gestütztem Schutz",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Rocket,
      title: "Zukunftstechnologie",
      description: "Neurale Netzwerke treffen auf Quantum Computing",
      color: "from-purple-400 via-pink-500 to-rose-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Universelle Präsenz",
      description: "Multi-dimensionale Verfügbarkeit im gesamten Metaverse",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      delay: 0.3
    }
  ];

  const stats = [
    { number: "∞", label: "Möglichkeiten", icon: "🚀" },
    { number: "99.99%", label: "Perfektion", icon: "⚡" },
    { number: "24/7", label: "Evolution", icon: "🌟" },
    { number: "0ms", label: "Latenz", icon: "💎" }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Enhanced Background Canvas */}
        <canvas
          id="particle-canvas"
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
        
        {/* Dynamic Background Gradients */}
        <motion.div 
          className="fixed inset-0 opacity-30 z-10"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 70%),
              radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 70%)
            `,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          style={{ y: yHero, opacity, scale, rotateX: springY, rotateY: springX }}
          className="relative min-h-screen flex items-center justify-center px-4 z-20"
        >
          {/* Floating 3D Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 10, 0],
              rotateY: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-[5%] w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            }}
          />
          
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotateX: [0, -8, 0],
              rotateY: [0, -12, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-32 right-[8%] w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
            }}
          />
          
          <div className="relative z-30 text-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="mb-12"
            >
              <MicroInteractions type="float" intensity="subtle">
                <div className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full border border-white/20 shadow-2xl mb-12 group hover:scale-105 transition-all duration-500">
                  <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 font-bold text-lg">
                    Willkommen in der Zukunft
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                </div>
              </MicroInteractions>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))"
                }}
              >
                NEXT LEVEL
              </motion.span>
              <motion.span 
                className="block text-white"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
                }}
              >
                DIGITAL EXPERIENCE
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Erlebe eine Revolution des Digitalen. Wo Künstliche Intelligenz auf 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> grenzenlose Innovation </span>
              trifft und Träume zu virtueller Realität werden.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MicroInteractions type="magnetic" intensity="strong">
                <Link
                  to="/empfehlungen"
                  className="group relative overflow-hidden px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-110 hover:rotate-1"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                    animate={{
                      rotate: isHovered ? 180 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Jetzt entdecken</span>
                  <ArrowRight className="ml-3 w-7 h-7 transition-transform group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </Link>
              </MicroInteractions>
              
              <MicroInteractions type="tilt" intensity="normal">
                <Link
                  to="/ueber-mich"
                  className="px-12 py-6 text-xl font-semibold glass-card border border-white/20 hover:border-white/40 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105 hover:-rotate-1"
                  style={{
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  }}
                >
                  Mehr erfahren
                </Link>
              </MicroInteractions>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-white/60"
              >
                <span className="text-sm mb-2 font-medium">Scroll für mehr</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          style={{ y: yFeatures, rotateX: rotate }}
          className="relative py-32 px-4 z-20"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, type: "spring" }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Revolutionäre Features
                </span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                Technologien, die die Grenzen des Möglichen neu definieren
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 100, rotateX: -15 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.8, delay: feature.delay, type: "spring" }}
                  className="group relative"
                >
                  <MicroInteractions type="tilt" intensity="strong">
                    <div 
                      className="relative p-8 glass-card rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4"
                      style={{
                        transformStyle: "preserve-3d",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(20px)",
                        boxShadow: `0 25px 50px -12px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                      }}
                    >
                      {/* Animated background gradient */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`}
                        style={{ transform: "translateZ(-10px)" }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${feature.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                          style={{
                            transformStyle: "preserve-3d",
                            boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.4)"
                          }}
                          whileHover={{ rotateY: 15, rotateX: 10 }}
                        >
                          <feature.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </MicroInteractions>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Stats Section */}
        <motion.section
          ref={statsRef}
          className="relative py-32 px-4 z-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={isStatsInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 1, type: "spring" }}
              className="relative p-16 glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(30px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div 
                  className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-black mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                      Unglaubliche Zahlen
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 font-light">
                    Perfektion in Daten gemessen
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                      className="text-center group"
                    >
                      <MicroInteractions type="hover" intensity="strong">
                        <div className="relative mb-6">
                          <motion.div 
                            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500"
                            style={{
                              filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))"
                            }}
                            whileHover={{ rotateY: 10 }}
                          >
                            {stat.number}
                          </motion.div>
                          <motion.div 
                            className="text-4xl absolute -top-4 -right-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                            whileHover={{ scale: 1.5, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {stat.icon}
                          </motion.div>
                        </div>
                        <div className="text-gray-400 font-semibold text-lg group-hover:text-white transition-colors duration-500">
                          {stat.label}
                        </div>
                      </MicroInteractions>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section className="relative py-32 px-4 z-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative p-20 glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(30px)",
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex justify-center mb-12"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-2xl"
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
                    }}
                  >
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                </motion.div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
                    Bereit für das Unmögliche?
                  </span>
                </h2>
                
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Werde Teil einer Elite-Community, die die Zukunft nicht nur erlebt, 
                  sondern sie erschafft. Deine digitale Evolution beginnt jetzt.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <MicroInteractions type="magnetic" intensity="strong">
                    <Link
                      to="/empfehlungen"
                      className="group px-16 py-6 text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-110 hover:rotate-1 relative overflow-hidden"
                      style={{
                        boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
                      }}
                    >
                      <span className="relative z-10">Transformation starten</span>
                      <Rocket className="ml-4 w-7 h-7 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                    </Link>
                  </MicroInteractions>
                  
                  <MicroInteractions type="tilt" intensity="normal">
                    <Link
                      to="/kontakt"
                      className="px-16 py-6 text-xl font-semibold glass-card border-2 border-white/30 hover:border-white/50 text-white rounded-2xl inline-flex items-center transition-all duration-500 hover:scale-105"
                      style={{
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      Persönliche Beratung
                    </Link>
                  </MicroInteractions>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Home2;
