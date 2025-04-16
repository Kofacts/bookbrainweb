// src/components/PrivacyPolicy.jsx
import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      {/* Fixed background elements similar to main page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-white opacity-80"></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-teal-50 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-64 h-64 rounded-full bg-slate-50 blur-3xl"></div>
      </div>
      
      {/* Back to home navigation */}
      <div className="sticky top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link to="/" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      {/* Content Container */}
      <div className="pt-24 pb-24 px-6 md:px-16 max-w-3xl mx-auto">
        <div ref={contentRef} className="animate-fade-in relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
            Last Updated: April 16, 2025
            </p>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
                BookBrain ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your information when you use our mobile app and website (collectively, the "Service").
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Name and email address when you sign in using Google or Apple</li>
                <li className="mb-2">Books added to your library, reading sessions, notes, and streak activity</li>
                <li className="mb-2">Device type, usage patterns, and crash data for performance tracking</li>
                <li className="mb-2">Optional metadata like tags, reminders, and reading preferences</li>
            </ul>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Sync your library and reading sessions across devices</li>
                <li className="mb-2">Track and visualize your reading streak and achievements</li>
                <li className="mb-2">Send reading reminders (only if enabled by you)</li>
                <li className="mb-2">Improve our app based on aggregate insights and analytics</li>
            </ul>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
            <p>
                We never sell your data. Your information is only shared with services we use to operate BookBrain (e.g., Firebase, analytics, and payment platforms). All such partners comply with strict confidentiality and data security standards.
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p>
                Your data is stored securely using modern encryption and access controls. We rely on trusted infrastructure providers (such as Firebase) with industry-standard protections.
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">You may request to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">View or export your reading history</li>
                <li className="mb-2">Delete your account and all associated data</li>
                <li className="mb-2">Modify your profile or app settings</li>
            </ul>
            <p>
                To exercise your rights, contact us at <a href="mailto:privacy@bookbrain.xyz">privacy@bookbrain.xyz</a>.
            </p>
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p>
                We may revise this policy occasionally to reflect feature updates or regulatory changes. All changes will be posted on this page with an updated revision date.
            </p>
            </section>

            <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
                Have questions about your data or our privacy practices? Reach out any time at <a href="mailto:privacy@bookbrain.xyz">privacy@bookbrain.xyz</a>.
            </p>
            </section>
          </div>
        </div>
      </div>
      
      {/* Simple footer */}
      {/* <footer className="bg-slate-50 py-8 px-6 md:px-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BookBrain. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/" className="text-slate-500 hover:text-teal-600 text-sm">Home</Link>
            <Link to="/privacy" className="text-slate-500 hover:text-teal-600 text-sm">Privacy Policy</Link>
            <a href="https://instagram.com/getbookbrain" className="text-slate-500 hover:text-teal-600 text-sm">Instagram</a>
            <a href="https://twitter.com/getbookbrain" className="text-slate-500 hover:text-teal-600 text-sm">Twitter</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default PrivacyPolicy;