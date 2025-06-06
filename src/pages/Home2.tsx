import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Heart, Star, Globe, Shield, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/UI/PageTransition";

const Home2 = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  
  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const yFeatures = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Particle animation effect
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
    }> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
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
      title: "Blitzschnelle Performance",
      description: "Optimiert für Geschwindigkeit und Benutzerfreundlichkeit",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Absolute Sicherheit",
      description: "Deine Daten sind bei uns in den sichersten Händen",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Innovation pur",
      description: "Cutting-edge Technologie für maximale Effizienz",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global verfügbar",
      description: "Überall auf der Welt erreichbar und nutzbar",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Zufriedene Nutzer" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "< 100ms", label: "Response Time" }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background Canvas */}
        <canvas
          id="particle-canvas"
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
        />
        
        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none z-10" />
        
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          style={{ y: yHero, opacity, scale }}
          className="relative min-h-screen flex items-center justify-center px-4 z-20"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-32 right-[15%] w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl"
          />
          
          <div className="relative z-30 text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-8">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-semibold">Das Neueste in Tech & Innovation</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-pulse">
                Die Zukunft
              </span>
              <br />
              <span className="text-foreground">beginnt heute</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Erlebe eine völlig neue Dimension von Technologie und Design. 
              Wir erschaffen Lösungen, die nicht nur funktionieren, sondern begeistern.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/empfehlungen"
                className="group relative overflow-hidden px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                <span className="relative z-10">Jetzt entdecken</span>
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              
              <Link
                to="/ueber-mich"
                className="px-12 py-6 text-lg font-semibold bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-foreground rounded-md transition-all duration-300 inline-flex items-center"
              >
                Mehr erfahren
              </Link>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          style={{ y: yFeatures }}
          className="relative py-32 px-4 z-20"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Warum wir anders sind
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Unsere einzigartigen Features machen den Unterschied
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative p-12 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl"
            >
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                      Zahlen, die überzeugen
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Unser Erfolg spricht für sich
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="relative mb-4">
                        <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <Star className="w-6 h-6 text-primary/30 absolute -top-2 -right-2 group-hover:text-primary/60 transition-colors duration-300" />
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section className="relative py-32 px-4 z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative p-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl shadow-lg">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                    Bereit für die Zukunft?
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Werde Teil einer Community, die Innovation lebt und Träume verwirklicht.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/empfehlungen"
                    className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center"
                  >
                    Jetzt starten
                    <Rocket className="ml-3 w-6 h-6" />
                  </Link>
                  
                  <Link
                    to="/kontakt"
                    className="px-12 py-6 text-lg font-semibold border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-300 inline-flex items-center"
                  >
                    Kontakt aufnehmen
                  </Link>
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
