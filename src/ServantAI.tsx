import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Brain, 
  Globe, 
  CheckCircle, 
  Play,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Award,
  TrendingUp,
  Building,
  Heart,
  Camera,
  Monitor,
  Smartphone,
  Clock,
  BarChart3,
  Settings,
  Sparkles
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}



const ServantAILanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const teamMembers: TeamMember[] = [
    {
      name: "Matthias G.",
      role: "Sales Manager/Director",
      description: "Experienced in building customer relationships and driving sales growth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Maurice W.",
      role: "Business Advisor",
      description: "Specialized in strategic development and leadership.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sebastian W.",
      role: "Consulting Engineer & Product Manager",
      description: "Expert in aligning technical innovation with market needs.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Miron P.",
      role: "Frontend & Backend Developer",
      description: "Full-stack developer specializing in modern web technologies.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Enrico M.",
      role: "AI Research Engineer",
      description: "Specialized in machine learning algorithms and neural networks.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Manuel W.",
      role: "Visionary Founder",
      description: "Passionate Data Science enthusiast, specialized in Machine Learning and Computer Vision.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const hospitalityFeatures: Feature[] = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Real-time Detection",
      description: "AI detects when guests require service automatically"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Smart Table Management",
      description: "Real-time overview and control of all tables"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Communication",
      description: "Tasks assigned to nearest available staff member"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Intuitive dashboards for optimization and revenue growth"
    }
  ];

  const careFeatures: Feature[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Care Monitoring",
      description: "Real-time detection of care needs and medical incidents"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Alerts",
      description: "Immediate alerts for emergency situations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Optimization",
      description: "Reduces response times and caregiver stress"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Workflow Management",
      description: "Streamlined care workflows and task management"
    }
  ];



  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Mouse Gradient Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'left 0.1s ease, top 0.1s ease'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ServantAI</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Solutions', 'Features', 'Team', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-background border-b border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {['Solutions', 'Features', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-rose-500/5" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto"
          style={{ y: heroY }}
          variants={staggerContainer}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6"
              variants={fadeInUp}
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">AI-Powered Service Excellence</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                ServantAI
              </span>
              <br />
              <span className="text-foreground">Smarter Service. Safer Care.</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              ServantAI empowers hospitality and care teams with real-time AI — to improve response times, reduce stress, and raise service quality.
            </motion.p>

            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <motion.button
                className="px-8 py-4 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Industry Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            <motion.div 
              className="bg-card border border-border rounded-2xl p-8"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold">Hospitality / Restaurants</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>• Empty glasses and plates often go unnoticed for too long</p>
                <p>• Staff is overwhelmed. Guests are dissatisfied</p>
                <p>• Valuable food is wasted every day</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-2xl p-8"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold">Care Facilities</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>• Rising care needs meet limited resources</p>
                <p>• Medical incidents remain undetected</p>
                <p>• Caregivers are under constant pressure</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              ServantAI detects in real time where and when service or assistance is needed – improving efficiency, safety, and guest/resident satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Realtime insights", desc: "Instant detection and analysis" },
              { icon: <Shield className="w-6 h-6" />, title: "Data privacy compliant", desc: "GDPR & EU AI Act aligned" },
              { icon: <Settings className="w-6 h-6" />, title: "Modular and scalable", desc: "Adapts to your needs" },
              { icon: <Award className="w-6 h-6" />, title: "Certification-ready", desc: "Industry standards met" },
              { icon: <Users className="w-6 h-6" />, title: "Reduces staff stress", desc: "Intelligent task management" },
              { icon: <Star className="w-6 h-6" />, title: "Improves experience", desc: "Better guest satisfaction" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Feature Highlights
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              variants={fadeInUp}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Hospitality Solutions</h3>
              </div>
              <div className="space-y-6">
                {hospitalityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-2xl p-6 lg:p-8"
              variants={fadeInUp}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Care Facility Solutions</h3>
              </div>
              <div className="space-y-6">
                {careFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Architecture</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6">We leverage:</h3>
              <div className="space-y-4">
                {['DGX infrastructure', 'NVIDIA TAO Toolkit', 'DeepStream SDK', 'Edge deployment'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6">Our platform supports:</h3>
              <div className="space-y-4">
                {[
                  'Modular AI pipelines (per room/table)',
                  'On-device session detection and context handling',
                  'GDPR & EU AI Act compliance (high-risk class alignment)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section ref={teamRef} id="team" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              The Team
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center group"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  {member.image ? (
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <Users className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join the future of intelligent service and care with ServantAI.
              </p>
              <div className="flex justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ServantAI</span>
            </div>
            
            <div className="flex items-center gap-6">
              <motion.a
                href="mailto:hello@combolabs.ch"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4" />
                hello@combolabs.ch
              </motion.a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 ServantAI. All rights reserved. Smarter Service. Safer Care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServantAILanding;