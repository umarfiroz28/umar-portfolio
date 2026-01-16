import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ==================== CONSTANTS ====================
const SKILLS = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  backend: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python'],
  devops: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Apache Spark']
};

const PROJECTS = [
  {
    title: 'AutoStack',
    desc: 'Automated project generation & cloud deployment platform with React, Spring Boot, JHipster. Auto-generates projects, pushes to GitHub, containerizes with Docker, and deploys to AWS.',
    tech: ['React', 'Spring Boot', 'Docker', 'AWS', 'Terraform'],
    impact: 'Reduced setup effort by 80%, ensuring production-ready deployments',
    type: 'Client Delivery',
    gradient: 'from-violet-400 via-fuchsia-400 to-pink-400',
    bgGradient: 'from-violet-50 to-fuchsia-50'
  },
  {
    title: 'Knyo Cloud PDM',
    desc: 'Product Data Management platform for manufacturers. Secure microservices architecture centralizing part details, design files, supplier data across automotive & pharma domains.',
    tech: ['Go', 'MongoDB', 'AWS', 'Microservices'],
    impact: 'Enhanced decision-making & operational efficiency',
    type: 'Enterprise SaaS',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    title: 'Hexus Interactive Demos',
    desc: 'No-code SaaS platform for creating interactive product demos. Node.js/Express APIs with MongoDB, Chrome extension for live demo recording.',
    tech: ['Node.js', 'MongoDB', 'Next.js', 'Docker', 'AWS'],
    impact: 'Boosted deployment speed & API reliability',
    type: 'Marketing Tech',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    bgGradient: 'from-orange-50 to-amber-50'
  }
];

const EXPERIENCE = [
  {
    company: 'IBM India',
    role: 'Application Developer',
    period: 'Dec 2023 - Present',
    location: 'Hyderabad',
    color: '#3b82f6',
    achievements: [
      'Java-based healthcare application development with Spring Boot',
      'CI/CD automation using Jenkins, Docker, Terraform',
      'Reduced deployment time, eliminated deployment errors',
      'AWS, Kubernetes, Redis integration with security monitoring'
    ]
  },
  {
    company: 'Leadzen.ai',
    role: 'SDE I',
    period: 'Jan 2023 - Dec 2023',
    location: 'California, USA (Remote)',
    color: '#8b5cf6',
    achievements: [
      'Engineered scalable Node.js/Express APIs with MongoDB',
      'Automated CI/CD pipelines with Docker & GitHub Actions',
      'Built Chrome extension for live demo recording',
      'Enhanced API stability through automated testing'
    ]
  },
  {
    company: 'Glabbr Technologies',
    role: 'Software Engineer',
    period: 'Oct 2021 - Apr 2022',
    location: 'India',
    color: '#ec4899',
    achievements: [
      'Designed secure microservices architecture (Go, MongoDB, AWS)',
      'Optimized data accessibility & automation',
      'Enterprise system integration for manufacturers'
    ]
  }
];

// ==================== ANIMATED CURSOR ====================
const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    const moveCursor = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
      }
      if (cursorDot) {
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
      }
      requestAnimationFrame(moveCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    moveCursor();

    const hoverElements = document.querySelectorAll('a, button, .hoverable');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-12 h-12 pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.5 : 1 }}
          className="w-full h-full rounded-full border-2 border-violet-600"
        />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none z-50 hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          animate={{ scale: isHovering ? 2 : 1 }}
          className="w-full h-full rounded-full bg-violet-600"
        />
      </div>
    </>
  );
};

// ==================== FLOATING SHAPES ====================
const FloatingShapes = () => {
  const shapes = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, i) => {
        const size = 20 + Math.random() * 40;
        const isCircle = i % 3 === 0;
        const colors = ['bg-violet-300/30', 'bg-fuchsia-300/30', 'bg-cyan-300/30', 'bg-amber-300/30', 'bg-rose-300/30'];

        return (
          <motion.div
            key={i}
            className={colors[i % 5] + (isCircle ? ' rounded-full' : ' rounded-lg')}
            style={{
              position: 'absolute',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              width: size + 'px',
              height: size + 'px'
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        );
      })}
    </div>
  );
};

// ==================== MAGNETIC BUTTON ====================
const MagneticButton = ({ children, className = '', onClick }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.5, y: y * 0.5 });
  };

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={'hoverable relative overflow-hidden ' + className}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      {children}
    </motion.button>
  );
};

// ==================== HERO SECTION ====================
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-cyan-100">
      {/* Animated mesh gradient background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15), transparent 50%)',
            'radial-gradient(circle at 70% 40%, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(circle at 30% 80%, rgba(251, 146, 60, 0.15), transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.15), transparent 50%), radial-gradient(circle at 60% 30%, rgba(168, 85, 247, 0.15), transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15), transparent 50%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      />

      {/* Animated geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-3xl blur-xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-2xl blur-xl"
      />

      <FloatingShapes />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.8, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent tracking-wider">
              ✨ UMAR FIROZ ✨
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tight leading-none">
            {['Building', 'Scalable', 'Systems &', 'Beautiful', 'Interfaces'].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8, type: 'spring' }}
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={'block bg-gradient-to-r ' +
                    ['from-violet-600 via-purple-600 to-fuchsia-600',
                      'from-blue-600 via-cyan-600 to-teal-600',
                      'from-orange-600 via-amber-600 to-yellow-600',
                      'from-pink-600 via-rose-600 to-red-600',
                      'from-green-600 via-emerald-600 to-teal-600'][i] +
                    ' bg-clip-text text-transparent cursor-default'}
                  style={{
                    textShadow: '0 0 80px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  {word}
                </motion.span>
              </motion.div>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Full Stack Engineer specializing in{' '}
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            Java, Spring Boot, AWS
          </motion.span>{' '}
          and modern frontend. 2+ years reducing deployment time by{' '}
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
          >
            70%
          </motion.span>{' '}
          through optimized CI/CD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap gap-6 justify-center mb-16"
        >
          <MagneticButton
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white font-black rounded-full shadow-2xl shadow-violet-500/50 text-lg relative"
          >
            <span className="flex items-center gap-3">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </MagneticButton>
          <MagneticButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white font-black rounded-full shadow-2xl shadow-cyan-500/50 text-lg"
          >
            Hire Me 🚀
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-8 justify-center flex-wrap"
        >
          {[
            { name: 'LinkedIn', url: 'https://linkedin.com/in/iumar28', gradient: 'from-blue-600 to-cyan-600', icon: '💼' },
            { name: 'Codeforces', url: 'https://codeforces.com/profile/iumar28', gradient: 'from-violet-600 to-purple-600', icon: '🏆' },
            { name: 'LeetCode', url: 'https://leetcode.com/iumar28', gradient: 'from-orange-600 to-amber-600', icon: '⚡' },
            { name: 'Email', url: 'mailto:iiuumar28@gmail.com', gradient: 'from-pink-600 to-rose-600', icon: '✉️' }
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className={'hoverable font-bold text-lg bg-gradient-to-r ' + link.gradient + ' bg-clip-text text-transparent flex items-center gap-2'}
            >
              <span className="text-2xl">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-3 border-violet-600 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 bg-gradient-to-b from-violet-600 to-fuchsia-600 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ==================== ABOUT SECTION ====================
const About = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent text-center"
        >
          Engineering Excellence 🚀
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                text: "I'm a Full Stack Engineer with 2+ years of experience building scalable systems that solve real business problems. Currently at IBM, I work on healthcare applications processing millions of claims.",
                highlight: 'Full Stack Engineer',
                gradient: 'from-cyan-600 to-blue-600'
              },
              {
                text: "My approach is simple: write clean code, automate everything, ship fast. I've reduced deployment time by 70% through CI/CD optimization and eliminated deployment errors entirely.",
                highlight: 'write clean code, automate everything, ship fast',
                gradient: 'from-orange-600 to-pink-600'
              },
              {
                text: "From building no-code SaaS platforms at Leadzen.ai to architecting microservices at Glabbr, I focus on scalability, reliability, and user impact.",
                highlight: 'scalability, reliability, and user impact',
                gradient: 'from-violet-600 to-fuchsia-600'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ x: 10 }}
                className="relative p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-violet-200 hover:border-violet-400 transition-all"
              >
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {item.text.split(item.highlight).map((part, j) => (
                    <React.Fragment key={j}>
                      {part}
                      {j < item.text.split(item.highlight).length - 1 && (
                        <span className={'font-black bg-gradient-to-r ' + item.gradient + ' bg-clip-text text-transparent'}>
                          {item.highlight}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '2+', label: 'Years Experience', gradient: 'from-blue-500 to-cyan-500', icon: '💼' },
              { num: '70%', label: 'Deployment Faster', gradient: 'from-violet-500 to-purple-500', icon: '⚡' },
              { num: '321', label: 'CodeChef Rank', gradient: 'from-orange-500 to-amber-500', icon: '🏆' },
              { num: '1100', label: 'Codeforces Max', gradient: 'from-pink-500 to-rose-500', icon: '🎯' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                className={'bg-gradient-to-br ' + stat.gradient + ' p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all cursor-pointer relative overflow-hidden'}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-2 right-2 text-4xl opacity-20"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                  className="text-6xl font-black text-white mb-3 relative z-10"
                >
                  {stat.num}
                </motion.div>
                <div className="text-sm text-white/90 font-bold tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SKILLS SECTION ====================
const Skills = () => {
  const skillColors = {
    frontend: { gradient: 'from-blue-500 via-cyan-500 to-teal-500', border: 'border-blue-300', bg: 'bg-blue-50' },
    backend: { gradient: 'from-violet-500 via-purple-500 to-fuchsia-500', border: 'border-violet-300', bg: 'bg-violet-50' },
    devops: { gradient: 'from-orange-500 via-red-500 to-pink-500', border: 'border-orange-300', bg: 'bg-orange-50' },
    database: { gradient: 'from-emerald-500 via-green-500 to-teal-500', border: 'border-emerald-300', bg: 'bg-emerald-50' }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
        >
          Technical Arsenal ⚔️
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 100, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
              className="hoverable group"
            >
              <div className={'bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all border-3 ' + skillColors[category].border + ' p-8 relative overflow-hidden'}>
                <motion.div
                  className={'absolute inset-0 bg-gradient-to-br ' + skillColors[category].gradient + ' opacity-0 group-hover:opacity-10 transition-opacity'}
                />
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className={'text-3xl font-black mb-6 capitalize bg-gradient-to-r ' + skillColors[category].gradient + ' bg-clip-text text-transparent'}
                >
                  {category}
                </motion.h3>
                <ul className="space-y-3">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + i * 0.08 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="text-gray-700 font-semibold flex items-center gap-3 group-hover:text-gray-900 transition-colors text-lg"
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 180, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                        className={'font-bold bg-gradient-to-r ' + skillColors[category].gradient + ' bg-clip-text text-transparent text-xl'}
                      >
                        ✦
                      </motion.span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECT CARD ====================
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -15, rotateY: 3 }}
      className="hoverable group relative"
    >
      <div className={'bg-gradient-to-br ' + project.bgGradient + ' rounded-3xl shadow-2xl hover:shadow-3xl transition-all border-3 border-white p-8 relative overflow-hidden'}>
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.5 : 1
          }}
          className={'absolute inset-0 bg-gradient-to-br ' + project.gradient}
        />

        <div className="relative z-10">
          <motion.div
            animate={{ rotate: isHovered ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-2 -right-2 font-black text-white bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 rounded-full shadow-xl text-sm"
          >
            {project.type}
          </motion.div>

          <motion.h3
            whileHover={{ scale: 1.05 }}
            className={'text-4xl font-black mb-5 bg-gradient-to-r ' + project.gradient + ' bg-clip-text text-transparent'}
          >
            {project.title}
          </motion.h3>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + i * 0.08 }}
                whileHover={{ scale: 1.15, y: -3 }}
                className="text-sm font-black text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-gray-300 shadow-md hover:shadow-lg transition-all"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="pt-6 border-t-2 border-gray-300"
          >
            <p className="text-base font-bold">
              <span className={'bg-gradient-to-r ' + project.gradient + ' bg-clip-text text-transparent text-lg'}>
                💡 Impact:
              </span>{' '}
              <span className="text-gray-700">{project.impact}</span>
            </p>
          </motion.div>

          <motion.div
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className={'absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r ' + project.gradient + ' origin-left rounded-full'}
          />
        </div>
      </div>
    </motion.div>
  );
};

// ==================== PROJECTS SECTION ====================
const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
        >
          Featured Work 🎨
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== EXPERIENCE SECTION ====================
const Experience = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <FloatingShapes />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black mb-20 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Professional Journey 🌟
        </motion.h2>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: 'spring', stiffness: 80 }}
              className="relative pl-16 group"
            >
              <motion.div
                whileHover={{ scale: 1.4, rotate: 180 }}
                className="absolute left-0 top-2 w-10 h-10 rounded-full shadow-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, ' + exp.color + ', ' + exp.color + '88)',
                  boxShadow: '0 0 30px ' + exp.color
                }}
              >
                🚀
              </motion.div>

              <div className="absolute left-5 top-12 bottom-0 w-1 bg-gradient-to-b from-violet-300 via-fuchsia-300 to-transparent rounded-full" />

              <motion.div
                whileHover={{ x: 15, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border-3 border-violet-200 hover:border-violet-400 transition-all shadow-xl hover:shadow-2xl"
              >
                <div className="mb-6">
                  <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-4xl font-black text-gray-800 mb-2"
                  >
                    {exp.role}
                  </motion.h3>
                  <p className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {exp.company}
                  </p>
                  <p className="text-base text-gray-600 mt-2 font-semibold">{exp.period} • {exp.location}</p>
                </div>

                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + i * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="text-gray-700 font-semibold flex items-start gap-4 text-lg bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-xl"
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                        className="text-2xl"
                      >
                        ✨
                      </motion.span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION ====================
const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:iiuumar28@gmail.com?subject=Portfolio Contact from ' + formState.name + '&body=' + formState.message;
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-6xl md:text-8xl font-black mb-8 text-center"
          >
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Amazing Together! 💫
            </span>
          </motion.h2>
          <p className="text-2xl text-gray-700 mb-20 max-w-3xl mx-auto text-center font-bold">
            Open to freelance projects, contract work, or full-time SDE-2 roles.
            Let's discuss how I can help scale your systems.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name', gradient: 'from-blue-400 to-cyan-400' },
                  { name: 'email', type: 'email', placeholder: 'Your Email', gradient: 'from-violet-400 to-purple-400' },
                  { name: 'message', type: 'textarea', placeholder: 'Your Message', gradient: 'from-pink-400 to-rose-400' }
                ].map((field, i) => (
                  <div key={field.name} className="relative">
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.placeholder}
                        value={formState[field.name]}
                        onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                        onFocus={() => setFocused({ ...focused, [field.name]: true })}
                        onBlur={() => setFocused({ ...focused, [field.name]: false })}
                        className="w-full bg-white/90 backdrop-blur-xl border-3 border-violet-300 focus:border-violet-500 outline-none py-5 px-6 text-gray-800 placeholder-gray-500 transition-all rounded-2xl shadow-lg focus:shadow-2xl resize-none h-40 font-semibold text-lg"
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.name]}
                        onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                        onFocus={() => setFocused({ ...focused, [field.name]: true })}
                        onBlur={() => setFocused({ ...focused, [field.name]: false })}
                        className="w-full bg-white/90 backdrop-blur-xl border-3 border-violet-300 focus:border-violet-500 outline-none py-5 px-6 text-gray-800 placeholder-gray-500 transition-all rounded-2xl shadow-lg focus:shadow-2xl font-semibold text-lg"
                        required
                      />
                    )}
                    <motion.div
                      animate={{ scaleX: focused[field.name] ? 1 : 0 }}
                      className={'absolute bottom-0 left-0 h-1 bg-gradient-to-r ' + field.gradient + ' origin-left rounded-full'}
                      style={{ width: '100%' }}
                    />
                  </div>
                ))}
                <MagneticButton className="w-full py-6 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white font-black rounded-2xl shadow-2xl text-xl">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center justify-center gap-3"
                  >
                    Send Message 🚀
                  </motion.span>
                </MagneticButton>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { label: 'Email', value: 'iiuumar28@gmail.com', href: 'mailto:iiuumar28@gmail.com', gradient: 'from-cyan-500 to-blue-500', icon: '📧' },
                { label: 'Phone', value: '+91 7310886906', href: 'tel:+917310886906', gradient: 'from-violet-500 to-purple-500', icon: '📱' },
                { label: 'Location', value: 'Ghaziabad, UP, India', gradient: 'from-orange-500 to-amber-500', icon: '📍' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border-3 border-violet-200 hover:border-violet-400 transition-all shadow-xl"
                >
                  <h3 className={'text-xl font-black bg-gradient-to-r ' + item.gradient + ' bg-clip-text text-transparent mb-2 flex items-center gap-2'}>
                    <span className="text-3xl">{item.icon}</span>
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a href={item.href} className="text-gray-700 hover:text-gray-900 hoverable transition-colors font-bold text-lg">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-bold text-lg">{item.value}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border-3 border-violet-200 shadow-xl"
              >
                <h3 className="text-xl font-black bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  <span className="text-3xl">🔗</span>
                  Connect
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/iumar28', icon: '💼' },
                    { name: 'GitHub', url: 'https://github.com/iumar28', icon: '💻' },
                    { name: 'Codeforces', url: 'https://codeforces.com/profile/iumar28', icon: '🏆' }
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="hoverable text-gray-700 hover:text-violet-600 transition-colors font-black text-lg flex items-center gap-2"
                    >
                      <span className="text-2xl">{link.icon}</span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== MAIN APP ====================
export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 text-gray-800 min-h-screen overflow-x-hidden">
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(to bottom right, #f5f3ff, #fdf4ff);
          color: #1f2937;
          overflow-x: hidden;
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: #1f2937;
        }
        
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #f5f3ff, #fdf4ff);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8b5cf6, #ec4899);
          border-radius: 10px;
          border: 2px solid #f5f3ff;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #6d28d9, #db2777);
        }
      `}</style>

      <AnimatedCursor />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 border-t-3 border-violet-200 bg-gradient-to-br from-violet-50 to-fuchsia-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-700 text-lg font-bold">
            © 2025 Umar Firoz.{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Engineered with precision & passion ✨
            </span>
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Contact'].map((item, i) => (
              <motion.a
                key={i}
                href={item === 'Contact' ? 'mailto:iiuumar28@gmail.com' : '#'}
                whileHover={{ y: -3, scale: 1.1 }}
                className="hoverable text-gray-700 hover:text-violet-600 font-bold transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}