'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Stars, Sparkles, Flower, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useInView } from './hooks/useInView';

const NavLink = ({ href, label }) => (
  <Link href={href} className="group relative px-2 py-1">
    <span className="relative z-10 text-teal-800 group-hover:text-teal-600 transition-colors duration-300">
      {label}
    </span>
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

const FloatingElement = ({ Icon, className, delay = 0 }) => (
  <div className={`absolute ${className} animate-float`} style={{ animationDelay: `${delay}s` }}>
    <Icon className="text-teal-400/30" />
  </div>
);

const AnimatedIcon = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
      {children}
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative transform transition-all duration-300 hover:scale-105">
    <div className="absolute -inset-1 bg-gray-100 from-teal-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-lg">
      <div className="relative h-16 flex items-center justify-center">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
        <Icon className="relative w-12 h-12 text-teal-600 transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text">
        {title}
      </h3>
      <p className="text-center text-teal-800/80 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, testimonial, avatar }) => (
  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-lg transform transition-all duration-300 hover:scale-105">
    <div className="flex items-center space-x-4">
      <Image src={avatar} alt={name} width={48} height={48} className="rounded-full" />
      <div>
        <h4 className="text-lg font-semibold text-teal-800">{name}</h4>
        <p className="text-sm text-teal-600">{role}</p>
      </div>
    </div>
    <p className="text-teal-800/80 leading-relaxed">{testimonial}</p>
  </div>
);

const TherapyTechniqueCard = ({ title, description, image }) => (
  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 space-y-6 shadow-lg transform transition-all duration-300 hover:scale-105">
    <div className="relative h-48 w-full">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-2xl"
      />
    </div>
    <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-center text-teal-800/80 leading-relaxed">
      {description}
    </p>
  </div>
);

const TestimonialsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      testimonial: "Therapist Bot has been a game-changer for my mental health. It's like having a therapist in my pocket!",
      avatar: "/avatars/sarah.jpg"
    },
    {
      name: "Michael Lee",
      role: "Software Engineer",
      testimonial: "I love how the bot adapts to my mood and provides thoughtful responses. Highly recommend!",
      avatar: "/avatars/michael.jpg"
    },
    {
      name: "Emily Carter",
      role: "Teacher",
      testimonial: "This bot has helped me manage my anxiety better than anything else I've tried. Thank you!",
      avatar: "/avatars/emily.jpg"
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      testimonial: "Therapist Bot is a lifesaver! It's always there when I need someone to talk to.",
      avatar: "/avatars/john.jpg"
    },
    {
      name: "Jane Smith",
      role: "Student",
      testimonial: "I feel so much better after using Therapist Bot. It's like having a friend who truly understands.",
      avatar: "/avatars/jane.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  if (!isClient) {
    return null;
  }

  return (
    <section 
      id="testimonials"
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-indigo-50 via-teal-50 to-indigo-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-200/20 via-indigo-200/20 to-purple-200/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
            What Our Users Say
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div 
            ref={testimonialsRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:bg-teal-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-teal-600 rotate-180" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white/80 backdrop-blur-lg shadow-lg hover:bg-teal-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const featuresRef = useRef(null);
  const connectRef = useRef(null);
  const testimonialsRef = useRef(null);
  const techniquesRef = useRef(null);
  const featuresInView = useInView(featuresRef, { threshold: 0.2 });
  const connectInView = useInView(connectRef, { threshold: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { threshold: 0.2 });
  const techniquesInView = useInView(techniquesRef, { threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-500" />
              <Heart className="relative w-8 h-8 text-teal-600 transform group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Therapist Bot
            </span>
          </div>
          <div className="flex space-x-12">
            <NavLink href="#features" label="Features" />
            <NavLink href="#techniques" label="Techniques" />
            <NavLink href="#testimonials" label="Testimonials" />
            <NavLink href="#connect" label="Connect" />
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0 bg-white" />
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center lg:text-left max-w-2xl animate-slide-in delay-500 opacity-0">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Your Path to Inner Peace
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Discover emotional wellness with our AI-powered therapy companion. 
                Start your journey to a healthier mind today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button 
                  onClick={() => window.open('https://t.me/TestingTherapy_bot', '_blank')}
                  className="group relative px-8 py-4 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className="relative text-white text-lg font-semibold">Add to Telegram</span>
                    <MessageCircle className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 h-96 lg:h-auto animate-slide-in delay-0 opacity-0">
              <Image
                src="/bot.gif"
                alt="Therapy Bot Hero"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement Icon={Heart} className="top-1/4 left-1/6 w-6 h-6" delay={0} />
            <FloatingElement Icon={MessageCircle} className="top-1/3 right-1/5 w-4 h-4" delay={1} />
            <FloatingElement Icon={Sparkles} className="bottom-1/4 left-1/3 w-5 h-5" delay={2} />
          </div>
        </section>

        <section 
          ref={featuresRef}
          id="features"
          className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-teal-50 via-indigo-50 to-teal-50"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-200/20 via-indigo-200/20 to-purple-200/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Features
              </h2>
              <p className="text-xl text-teal-800/80 mt-4">
                Explore the powerful features of Therapist Bot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Heart}
                title="Emotional Support"
                description="Get instant emotional support and guidance tailored to your needs."
                gradient="from-teal-400 to-indigo-400"
              />
              <FeatureCard
                icon={MessageCircle}
                title="24/7 Availability"
                description="Access therapy anytime, anywhere. We're always here for you."
                gradient="from-indigo-400 to-purple-400"
              />
              <FeatureCard
                icon={Stars}
                title="Personalized Therapy"
                description="Experience therapy sessions customized to your unique situation."
                gradient="from-purple-400 to-teal-400"
              />
            </div>
          </div>
        </section>

        <section
          ref={techniquesRef}
          id="techniques"
          className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-200/20 via-indigo-200/20 to-purple-200/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Therapy Techniques
              </h2>
              <p className="text-xl text-teal-800/80 mt-4">
                Discover the techniques we use to help you heal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TherapyTechniqueCard
                title="Cognitive Behavioral Therapy"
                description="A proven method to help you identify and change negative thought patterns."
                image="/CB.png"
              />
              <TherapyTechniqueCard
                title="Mindfulness Meditation"
                description="Learn to stay present and reduce stress through mindfulness practices."
                image="/MM.png"
              />
              <TherapyTechniqueCard
                title="Positive Affirmations"
                description="Boost your self-esteem and confidence with daily positive affirmations."
                image="/AT.png"
              />
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section
          ref={connectRef}
          id="connect"
          className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-purple-50 via-teal-50 to-purple-50"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-200/20 via-indigo-200/20 to-purple-200/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Connect With Us
              </h2>
              <p className="text-xl text-teal-800/80 mt-4">
                Start your journey to emotional wellness today
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <button
                onClick={() => window.open('https://t.me/TestingTherapy_bot', '_blank')}
                className="group relative px-8 py-4 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500" />
                <div className="relative flex items-center justify-center space-x-2">
                  <span className="relative text-white text-lg font-semibold">Add to Telegram</span>
                  <MessageCircle className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform" />
                </div>
              </button>
              <p className="text-teal-800/80 text-center max-w-2xl">
                Join thousands of users who have found peace and clarity through Therapist Bot. 
                Our AI-powered companion is here to support you every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;