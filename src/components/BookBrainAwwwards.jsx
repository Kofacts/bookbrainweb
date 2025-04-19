import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, ArrowRight, CheckCircle, Download, Star, Calendar, Search, BookMarked, Moon, Diamond } from 'lucide-react';
import logoImage from '/inv.png'; // Path to your image

const BookBrainLaunch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState({
    hero: false,
    features: false,
    personas: false,
    testimonials: false,
    pricing: false,
    faq: false
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const [yearlyBilling, setYearlyBilling] = useState(true);
  
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    personas: useRef(null),
    testimonials: useRef(null),
    pricing: useRef(null),
    faq: useRef(null)
  };
  
  // Intersection observer for animation triggers
  useEffect(() => {
    const observers = {};
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(prev => ({
            ...prev,
            [key]: entry.isIntersecting
          }));
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observers[key].observe(ref.current);
      }
    });
    
    return () => {
      Object.entries(observers).forEach(([key, observer]) => {
        if (sectionRefs[key].current) {
          observer.unobserve(sectionRefs[key].current);
        }
      });
    };
  }, []);
  
  // Auto-rotate feature highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  const features = [
    { 
      id: 0, 
      icon: <BookOpen size={24} />, 
      title: "Timed Sessions", 
      description: "Timed reading with automatic progress tracking." 
    },
    { 
      id: 1, 
      icon: <BookMarked size={24} />, 
      title: "AI Note Assistant", 
      description: "Scan and organize quotes with AI assistance." 
    },
    { 
      id: 2, 
      icon: <Star size={24} />, 
      title: "Streaks & Rewards", 
      description: "Daily streaks, stats, and unlockable milestones." 
    },
    { 
      id: 3, 
      icon: <Calendar size={24} />, 
      title: "Streak Calendar", 
      description: "Heatmap view of your reading consistency." 
    },
    { 
      id: 4, 
      icon: <Search size={24} />, 
      title: "Notes Vault", 
      description: "Tag, search, and revisit all your book notes." 
    },
    { 
      id: 5, 
      icon: <BookMarked size={24} />, 
      title: "TBR Stack", 
      description: "Track your reads and plan what’s next." 
    },
    { 
      id: 6, 
      icon: <Moon size={24} />, 
      title: "Custom Reminders", 
      description: "Set goals, timers, and nudges that work for you." 
    },
    { 
      id: 7, 
      icon: <Diamond size={24} />, 
      title: "BookBrain Pro", 
      description: "Unlock AI insights, Pro rewards, and more." 
    }
  ];
  
  const personas = [
    { title: "The Habit Seeker", description: "Building a consistent reading habit" },
    { title: "The Thought Collector", description: "Capturing and organizing ideas" },
    { title: "The Deep Thinker", description: "Reflecting on what you read" },
    { title: "The Achiever", description: "Tracking progress and setting goals" }
  ];

  const testimonials = [
    { 
      quote: "I never thought a reading app would make me feel like a better thinker.", 
      author: "Sarah L., Philosophy Student" 
    },
    { 
      quote: "This replaced Notion for my book notes. Everything is so much more organized now.", 
      author: "Mark T., Software Developer" 
    },
    { 
      quote: "I finally finished 5 books in a month. The streaks actually work!", 
      author: "Jamie K., Entrepreneur" 
    }
  ];

  const faqs = [
    { 
      question: "Do I have to read in the app?", 
      answer: "No, BookBrain works with any book format—physical, e-books, or audiobooks. You can track your reading sessions and capture notes for any book you're reading." 
    },
    { 
      question: "Does BookBrain work for physical books?", 
      answer: "Absolutely! BookBrain is designed to work with physical books. You can scan quotes with your camera, track reading time, and organize notes from your physical library."
    },
    { 
      question: "What does the AI do with my notes?", 
      answer: "BookBrain's AI helps organize, summarize, and connect your notes. Your data remains private and is only used to provide you with personalized insights. We never share your reading data or notes with third parties."
    },
    { 
      question: "Is BookBrain available on Android?", 
      answer: "Currently, BookBrain is only available on iOS. We're working on an Android version that will be released in the future."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-hidden">
      {/* Absolute positioned design elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-white opacity-80"></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-blue-50 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-64 h-64 rounded-full bg-slate-50 blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-16 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-8 items-center">
          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 max-w-max">
              <span className="text-xs font-medium tracking-wide">JUST LAUNCHED</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 md:mb-8 transition-all duration-1000 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              read smarter. reflect deeper. <span className="text-teal-600">every page counts.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 mb-8 max-w-xl transition-all duration-1000 delay-300 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Build your reading streak, capture notes effortlessly, and unlock insights from the books you love.
            </p>
            
            {/* Feature highlights animated */}
            <div className={`mb-10 h-24 transition-all duration-1000 delay-500 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute transition-all duration-500 ${
                    currentIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 text-teal-600">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
              
              <div className="flex gap-2 mt-20">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-8 h-[6px] rounded-full transition-all ${
                      currentIndex === index ? 'bg-teal-600' : 'bg-slate-200'
                    }`}
                    aria-label={`Show feature: ${feature.title}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <a 
                href="https://apps.apple.com/us/app/bookbrain/id6744559314" 
                className="px-6 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg bg-teal-600 text-white hover:bg-blue-900 flex items-center justify-center"
              >
                <Download size={18} className="mr-2" />
                Download on iOS
              </a>
              
              <a 
                href="#features" 
                className="px-6 py-3.5 rounded-xl font-medium transition-all duration-300 border border-slate-200 text-slate-800 hover:bg-slate-50 flex items-center justify-center"
              >
                Explore the App
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            {/* Social proof */}
            <div className={`mt-10 transition-all duration-1000 delay-1000 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="text-sm font-medium text-slate-500">Featured in:</p>
                <div className="flex items-center gap-4">
                  <div className="text-slate-400">
                    <div className="w-20 h-auto grayscale hover:grayscale-0 transition-all duration-300">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 180 90" width="40" height="30"  xml:space="preserve">
                        <polygon fill="#0A9E01" points="90,0 90,30 60,30 60,90 30,90 30,30 0,30 0,0 "/>
                        <rect x="120" fill="#0A9E01" width="60" height="30"/>
                        <polygon fill="#0A9E01" points="180,60 180,90 90,90 90,30 120,30 120,60 "/>
                    </svg>
                    </div>
                  </div>
                  <div className="text-slate-400 -ml-8">
                    <div className="w-32 h-auto grayscale hover:grayscale-0 transition-all duration-300">
                        <img src='/Morning_Brew.webp' />
                    </div>
                  </div>
                  <div className="text-slate-400">
                    <div className="w-30 h-auto grayscale opacity-50 hover:grayscale-0 transition-all duration-300">
                        <img src='/bloomberg.webp' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Showcase - 2 columns */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isIntersecting.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Phone mockup with real app image */}
              <div className="relative w-full max-w-xs mx-auto">
                <div className="rounded-[36px] overflow-hidden shadow-2xl border-8 border-slate-800">
                  {/* App screenshot image */}
                  <img 
                    src="/landing.png" 
                    alt="BookBrain App Screenshot" 
                    className="w-full aspect-[9/19.5] object-cover object-top" 
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[36px] bg-slate-200"></div>
                <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full rounded-[36px] bg-slate-100"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg p-3 shadow-xl border border-slate-100 hidden md:block">
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-1">📚</div>
                  <div className="text-slate-900 font-semibold text-lg">125%</div>
                  <div className="text-xs text-slate-500">Reading increase</div>
                </div>
              </div>
              
              {/* Floating insights card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-3 shadow-xl border border-slate-100 max-w-[150px] hidden md:block">
                <div className="text-xs font-medium text-slate-800 mb-1">AI Insight</div>
                <div className="text-xs text-slate-600">You read best in the morning. Try to maintain that habit!</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How BookBrain Works Section */}
      <section 
        id="features"
        ref={sectionRefs.features}
        className="py-24 px-6 md:px-16 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isIntersecting.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              How BookBrain Works
            </h2>
            <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isIntersecting.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              BookBrain combines habit tracking, AI assistance, and a minimalistic design to help you read more consistently and get more from what you read.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-700 ${isIntersecting.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-teal-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Who It's For Section */}
      <section 
        ref={sectionRefs.personas}
        className="py-24 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isIntersecting.personas ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Made For?
            </h2>
            <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isIntersecting.personas ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              BookBrain is designed for readers who want to get more from their reading time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-all duration-700 ${isIntersecting.personas ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-32 h-32 bg-slate-100 rounded-full mb-4 flex items-center justify-center text-4xl">
                  {index === 0 && "🔥"}
                  {index === 1 && "💭"}
                  {index === 2 && "🧠"}
                  {index === 3 && "📈"}
                </div>
                <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                <p className="text-slate-600">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={sectionRefs.testimonials}
        className="py-24 px-6 md:px-16 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isIntersecting.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              What Readers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-700 ${isIntersecting.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-2xl text-slate-300 mb-4">"</div>
                <p className="text-slate-800 mb-4 italic">{testimonial.quote}</p>
                <p className="text-sm text-slate-500 font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section 
        ref={sectionRefs.pricing}
        className="py-24 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isIntersecting.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Choose Your Plan
            </h2>
            <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isIntersecting.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Start with our free plan or unlock all features with BookBrain Pro.
            </p>
          </div>
          
          {/* Billing toggle */}
          <div className={`flex justify-center mb-12 transition-all duration-700 delay-500 ${isIntersecting.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-slate-100 p-1 rounded-lg inline-flex">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!yearlyBilling ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'}`}
                onClick={() => setYearlyBilling(false)}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${yearlyBilling ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'}`}
                onClick={() => setYearlyBilling(true)}
              >
                Yearly <span className="text-green-500 text-xs">Save 33%</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free plan */}
            <div 
              className={`bg-white rounded-xl p-8 shadow-sm border border-slate-200 transition-all duration-700 delay-300 ${isIntersecting.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-slate-600 mb-6">Basic habit tracking and note capture</p>
              <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal text-slate-500">/month</span></p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Basic reading streak tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Simple note taking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Limited book library (up to 5 books)</span>
                </li>
              </ul>
              
              <a 
                href="https://apps.apple.com/us/app/bookbrain/id6744559314" 
                className="block text-center px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-slate-200 text-slate-800 hover:bg-slate-50"
              >
                Download Free
              </a>
            </div>
            
            {/* Pro plan */}
            <div 
              className={`bg-teal-800 text-white rounded-xl p-8 shadow-lg relative transition-all duration-700 delay-500 ${isIntersecting.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="absolute -top-4 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-blue-200 mb-6">All features unlocked</p>
              <p className="text-4xl font-bold mb-6">
                {yearlyBilling ? '$29.99' : '$3.99'}
                <span className="text-base font-normal text-blue-200">/{yearlyBilling ? 'year' : 'month'}</span>
              </p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-400 mr-2" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-400 mr-2" />
                  <span>AI-powered note organization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-400 mr-2" />
                  <span>Advanced reading analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-400 mr-2" />
                  <span>Unlimited book library</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-400 mr-2" />
                  <span>Pro achievements and badges</span>
                </li>
              </ul>
              
              <a 
                href="#" 
                className="block text-center px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-white text-teal-600 hover:bg-blue-50"
              >
                Get BookBrain Pro
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section 
        ref={sectionRefs.faq}
        className="py-24 px-6 md:px-16 bg-slate-50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isIntersecting.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-700 ${isIntersecting.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="rotate-90" size={16} />
                  </div>
                </button>
                
                <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Download Section */}
      <section className="py-24 px-6 relative md:px-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your reading streak today.</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of readers who are building better reading habits with BookBrain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/us/app/bookbrain/id6744559314" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium transition-all duration-300 bg-white text-teal-600 hover:bg-blue-50"
            >
              <Download size={18} className="mr-2" />
              Download on iOS
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 relative bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white flex items-center">
                {/* <BookOpen className="mr-2" /> BookBrain */}
                <img src={logoImage} alt="BookBrain Logo" className="h-32 ml-2" />
              </div>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookBrainLaunch;