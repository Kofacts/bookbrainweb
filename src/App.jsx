import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookBrainAwwwards from './components/BookBrainAwwwards'; // Your existing landing page
import PrivacyPolicy from './components/PrivacyPolicy'; // The new privacy policy component
import logoImage from '/colour.png'; // Path to your image
import TermsOfUse from './components/TermsOfUse';

const App = () => {
  return (
    <Router>
      {/* Fixed navigation that appears on all pages */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImage} alt="BookBrain Logo" className="h-6 ml-2" />
          </Link>
        </div>
        
        <div className="flex items-center space-x-8">
          {/* Main navigation links */}
          <a href="https://instagram.com/getbookbrain" className="text-sm text-slate-500 hover:text-teal-600 transition-colors hidden md:block">Instagram</a>
          <a href="https://twitter.com/getbookbrain" className="text-sm text-slate-500 hover:text-teal-600 transition-colors hidden md:block">Twitter</a>
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-sm text-slate-500 hover:text-teal-600 transition-colors">Terms of Use</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<BookBrainAwwwards />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
      
      {/* Footer that appears on all pages except where overridden */}
      <footer className="bg-slate-50 py-4 px-6 md:px-16 relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} BookBrain. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="text-slate-500 hover:text-teal-600 text-sm">Home</Link>
            <Link to="/privacy" className="text-slate-500 hover:text-teal-600 text-sm">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;