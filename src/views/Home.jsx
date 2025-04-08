import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const BookBrainAwwwards = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const heroRef = useRef(null);
  
  // Intersection observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  // Auto-rotate feature highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  const features = [
    { id: 0, title: "Track reading streaks", description: "Build consistency with daily tracking" },
    { id: 1, title: "AI-powered notes", description: "Capture and organize your insights" },
    { id: 2, title: "Earn achievements", description: "Stay motivated with gamified reading" }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans overflow-hidden">
      {/* Absolute positioned design elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-white opacity-80"></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-teal-50 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-64 h-64 rounded-full bg-slate-50 blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center">
          <div className="bg-teal-600 w-9 h-9 rounded-lg flex items-center justify-center text-white">
            <BookOpen size={16} />
          </div>
          <span className="ml-3 text-lg font-medium text-slate-900">BookBrain</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">About</a>
          <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">Features</a>
          <a href="#" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">Team</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-16 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-8 items-center">
          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 max-w-max">
              <span className="text-xs font-medium tracking-wide">COMING SOON</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 md:mb-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Build a reading habit that <span className="text-teal-600">sticks.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 mb-8 max-w-xl transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Track your daily reading streaks, capture notes with AI, and consistently finish more books with your personal reading companion.
            </p>
            
            {/* Feature highlights animated */}
            <div className={`mb-10 h-24 transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute transition-all duration-500 ${
                    currentIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
              
              <div className="flex gap-2 mt-16">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-1.5 rounded-full transition-all ${
                      currentIndex === index ? 'bg-teal-500' : 'bg-slate-200'
                    }`}
                    aria-label={`Show feature: ${feature.title}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Waitlist Form */}
            <form 
              onSubmit={handleSubmit} 
              className={`max-w-md transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
                />
                
                <button 
                  type="submit" 
                  className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-500 text-white'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle size={18} className="mr-2" />
                      Added!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Join Waitlist
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </div>
              
              <p className="text-slate-500 text-sm mt-2 ml-1">No spam. Just the launch announcement.</p>
            </form>
            
            {/* Social proof */}
            <div className={`mt-16 transition-all duration-1000 delay-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="text-sm font-medium text-slate-500">As seen on:</p>
                <div className="flex items-center gap-6">
                  <div className="text-slate-400">
                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" />
                      <path d="M58 8H54V16H56V13H58C60.2091 13 62 11.2091 62 9C62 6.79086 60.2091 5 58 5H54V8H58Z" fill="currentColor" />
                      <path d="M68 5H64V16H68C72.4183 16 76 12.4183 76 8.5C76 4.58172 72.4183 1 68 1V5ZM68 5V13H66V5H68Z" fill="currentColor" />
                      <path d="M36 16V5H32V16H36Z" fill="currentColor" />
                      <path d="M48 16V5H44V16H48Z" fill="currentColor" />
                      <path d="M104 5H100V16H102V11H104C106.2091 11 108 9.20914 108 7C108 4.79086 106.2091 3 104 3V5ZM104 5V8H102V5H104Z" fill="currentColor" />
                      <path d="M116 16H112V5H116V16Z" fill="currentColor" />
                      <path d="M84 16V5H80V16H84Z" fill="currentColor" />
                      <path d="M96 5H92V16H96V5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-slate-400">
                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 12L8 8V16L14 12Z" fill="currentColor" />
                      <path d="M20 12L14 8V16L20 12Z" fill="currentColor" />
                      <path d="M32 12C32 14.2091 30.2091 16 28 16H24V8H28C30.2091 8 32 9.79086 32 12Z" fill="currentColor" />
                      <path d="M48 16H42C39.7909 16 38 14.2091 38 12C38 9.79086 39.7909 8 42 8H48V16Z" fill="currentColor" />
                      <path d="M64 12C64 14.2091 62.2091 16 60 16H54V8H60C62.2091 8 64 9.79086 64 12Z" fill="currentColor" />
                      <path d="M78 8H70V12V16H74V12H78V8Z" fill="currentColor" />
                      <path d="M90 12C90 14.2091 88.2091 16 86 16H80V8H86C88.2091 8 90 9.79086 90 12Z" fill="currentColor" />
                      <path d="M92 8H100V12H97V16H95V12H92V8Z" fill="currentColor" />
                      <path d="M112 12C112 14.2091 110.209 16 108 16C105.791 16 104 14.2091 104 12C104 9.79086 105.791 8 108 8C110.209 8 112 9.79086 112 12Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App Showcase - 2 columns */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-full max-w-xs mx-auto">
                <div className="rounded-[36px] overflow-hidden shadow-2xl border-8 border-slate-800">
                  {/* App screen */}
                  <div className="aspect-[9/19.5] bg-white">
                    {/* App UI */}
                    <div className="h-full flex flex-col">
                      {/* App Header */}
                      <div className="bg-teal-600 px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                            <BookOpen size={12} className="text-white" />
                          </div>
                          <span className="ml-2 text-white text-sm font-medium">BookBrain</span>
                        </div>
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 p-4 flex flex-col gap-3">
                        {/* Welcome */}
                        <div className="mb-1">
                          <h3 className="text-base font-bold text-slate-900">Welcome back</h3>
                          <div className="flex items-center">
                            <p className="text-slate-600 text-xs">Your streak: 7 days</p>
                            <span className="ml-1 text-xs">🔥</span>
                          </div>
                        </div>
                        
                        {/* Daily Goal */}
                        <div className="bg-white rounded-xl p-3 shadow-md border border-slate-100">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-medium text-slate-800">Today's Goal</div>
                            <div className="text-xs text-slate-500">15m left</div>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                            <div className="h-full w-3/4 bg-teal-500 rounded-full"></div>
                          </div>
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>15/20 min</span>
                            <span>75%</span>
                          </div>
                        </div>
                      
                        {/* Reading Stats */}
                        <div className="bg-white rounded-xl p-3 shadow-md border border-slate-100">
                          <div className="text-sm font-medium text-slate-800 mb-2">Weekly Progress</div>
                          <div className="flex justify-between gap-1">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center">
                                <div className="text-xs text-slate-500 mb-1">{day}</div>
                                <div className={`w-full aspect-square rounded-md ${i < 5 ? 'bg-teal-500' : 'bg-slate-200'}`}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Current Book */}
                        <div className="bg-white rounded-xl p-3 shadow-md border border-slate-100">
                          <div className="text-sm font-medium text-slate-800 mb-2">Currently Reading</div>
                          <div className="flex gap-3">
                            <div className="w-12 h-16 bg-teal-600 rounded-md shadow-sm flex items-center justify-center">
                              <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                            </div>
                            <div className="flex-1 py-0.5">
                              <div className="text-sm font-medium text-slate-800">Atomic Habits</div>
                              <div className="text-xs text-slate-500">James Clear</div>
                              <div className="mt-1.5">
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                  <span>65%</span>
                                  <span>156/240</span>
                                </div>
                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full w-2/3 bg-teal-500 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Recent Note */}
                        <div className="bg-white rounded-xl p-3 shadow-md border border-slate-100">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-medium text-slate-800">Latest Note</div>
                            <div className="text-xs text-teal-600">AI summary</div>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">
                            Habits are the compound interest of self-improvement. Small changes often appear to make no difference until you cross a critical threshold.
                          </p>
                        </div>
                        
                        {/* Achievement Card */}
                        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-3 shadow-md text-white mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="text-lg">🏆</div>
                            <div>
                              <div className="text-sm font-medium">7-Day Streak!</div>
                              <div className="text-xs text-white/90">Consistent Reader Badge</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
    </div>
  );
};

export default BookBrainAwwwards;