'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Stars, Sparkles, Flower } from 'lucide-react';
import LotusAnimation from './LotusAnimation';
import { useInView } from './hooks/useInView';

const FloatingElement = ({ Icon, className, delay = 0 }) => (
  <div className={`absolute ${className} animate-float`} style={{ animationDelay: `${delay}s` }}>
    <Icon className="text-purple-400/30" />
  </div>
);

const NavLink = ({ href, label }) => (
  <Link href={href} className="group relative px-2 py-1">
    <span className="relative z-10 text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
      {label}
    </span>
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

const AnimatedIcon = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
      {children}
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:scale-105">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 space-y-6">
        <div className="relative h-16 flex items-center justify-center">
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
          <Icon className="relative w-12 h-12 text-purple-600 transform group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-rose-600 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="text-center text-purple-800/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);
  const connectRef = useRef(null);
  const featuresInView = useInView(featuresRef, { threshold: 0.2 });
  const connectInView = useInView(connectRef, { threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-500" />
              <Heart className="relative w-8 h-8 text-purple-600 transform group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
              Therapist Bot
            </span>
          </div>
          <div className="flex space-x-12">
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-rose-100/50 to-amber-100/50" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rose-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement Icon={Stars} className="top-1/4 left-1/6 w-6 h-6" />
            <FloatingElement Icon={Heart} className="top-1/3 right-1/5 w-4 h-4" delay={1} />
            <FloatingElement Icon={Sparkles} className="bottom-1/4 left-1/3 w-5 h-5" delay={2} />
            <FloatingElement Icon={Stars} className="top-2/3 right-1/4 w-6 h-6" delay={1.5} />
            <FloatingElement Icon={Heart} className="top-1/2 left-1/5 w-4 h-4" delay={2.5} />
            <FloatingElement Icon={Sparkles} className="bottom-1/3 right-1/3 w-5 h-5" delay={3} />
            <FloatingElement Icon={Stars} className="top-1/6 right-1/6 w-6 h-6" delay={0.5} />
            <FloatingElement Icon={Heart} className="bottom-1/4 left-1/4 w-4 h-4" delay={1.8} />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            {/* Lotus Animation Container */}
            <div className="relative w-96 h-64 mx-auto mb-0 animate-slide-in delay-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-rose-500/20 to-amber-500/20 rounded-full filter blur-3xl animate-pulse" />
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                <LotusAnimation />
              </div>
            </div>

            {/* Text Content with Sequential Animation */}
            <div className="space-y-6 mt-8">
              <h1 className="animate-slide-in delay-500 opacity-0 text-6xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
                  Bloom Into Wellness
                </span>
              </h1>
              
              <p className="animate-slide-in delay-700 opacity-0 text-xl md:text-2xl text-purple-800/80 max-w-2xl mx-auto leading-relaxed">
                Like a lotus, find your strength to rise above life's challenges.
              </p>

              {/* CTA Buttons */}
              <div className="animate-slide-in delay-1100 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button 
                  onClick={() => window.open('https://t.me/TestingTherapy_bot', '_blank')}
                  className="group relative px-8 py-4 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className="relative text-white text-lg font-semibold">Add to Telegram</span>
                    <MessageCircle className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
                <button className="group relative px-8 py-4 rounded-full overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/80" />
                  <span className="relative text-lg font-semibold bg-gradient-to-r from-purple-600 to-rose-600 text-transparent bg-clip-text">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresRef}
          className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-purple-100/90 via-rose-100/90 to-amber-100/90"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200/20 via-rose-200/20 to-amber-200/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className={`text-center mb-16 transition-all duration-700 transform ${
              featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
                Features
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "Experience therapy in a nurturing environment where every emotion is acknowledged and valued.",
                  gradient: "from-purple-500 to-rose-500",
                  delay: 0
                },
                {
                  icon: MessageCircle,
                  title: "24/7 AI Support",
                  description: "Our intelligent companion is here to listen and support you, any time of day or night.",
                  gradient: "from-rose-500 to-amber-500",
                  delay: 200
                },
                {
                  icon: Stars,
                  title: "Guided Growth",
                  description: "Discover personalized tools and techniques for lasting emotional wellness.",
                  gradient: "from-amber-500 to-purple-500",
                  delay: 400
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="transition-all duration-700 transform"
                  style={{
                    opacity: featuresInView ? 1 : 0,
                    transform: featuresInView ? 'translateY(0)' : 'translateY(50px)',
                    transitionDelay: `${feature.delay}ms`
                  }}
                >
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bot Connection Section */}
        <section 
          ref={connectRef}
          className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50"
        >
          <div className="container mx-auto max-w-4xl">
            <div 
              className={`text-center mb-16 transition-all duration-700 transform ${
                connectInView ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
                Connect with Us
              </h2>
            </div>
            
            <div 
              className="relative group transition-all duration-700 transform"
              style={{
                opacity: connectInView ? 1 : 0,
                transform: connectInView ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: '200ms'
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 rounded-3xl blur transition-all opacity-75 group-hover:opacity-100 duration-500" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 space-y-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 rounded-full opacity-75 blur-lg animate-spin-slow" />
                    <MessageCircle className="relative w-16 h-16 text-purple-600" />
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
                    Connect with Your AI Companion
                  </h2>
                  <p className="text-lg text-purple-800/80">
                    Experience supportive conversations that adapt to your unique journey.
                  </p>
                </div>

                <button 
                  onClick={() => window.open('https://t.me/TestingTherapy_bot', '_blank')}
                  className="w-full group relative px-8 py-4 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 transition-transform duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className="text-white text-lg font-semibold">Add Bot to Telegram</span>
                    <MessageCircle className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="animate-slide-in delay-1900 opacity-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-rose-100 to-amber-100 opacity-50" />
        <div className="absolute inset-0">
          <FloatingElement Icon={Stars} className="top-1/4 right-1/6 w-6 h-6" delay={0.3} />
          <FloatingElement Icon={Heart} className="bottom-1/2 left-1/4 w-4 h-4" delay={1.6} />
        </div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center space-x-8">
              <AnimatedIcon>
                <Heart className="w-8 h-8 text-purple-500" />
              </AnimatedIcon>
              <AnimatedIcon>
                <Sparkles className="w-8 h-8 text-rose-500" />
              </AnimatedIcon>
              <AnimatedIcon>
                <Flower className="w-8 h-8 text-amber-500" />
              </AnimatedIcon>
            </div>
            <p className="text-lg font-medium bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 text-transparent bg-clip-text">
              Your sanctuary for mental wellness and growth
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;