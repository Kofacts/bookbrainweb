import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-white opacity-80"></div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-teal-50 blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-64 h-64 rounded-full bg-slate-50 blur-3xl"></div>
      </div>

      <div className="sticky top-0 left-0 w-full z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link to="/" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="pt-24 pb-24 px-6 md:px-16 max-w-3xl mx-auto">
        <div ref={contentRef} className="animate-fade-in relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">Last Updated: April 16, 2025</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using BookBrain (“we,” “us,” or “our”) and its mobile or web-based services, you agree to be bound by these Terms of Use. If you do not agree with any part of the terms, you may not use the app.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Subscriptions & Billing</h2>
              <p>
                BookBrain offers optional auto-renewable subscriptions. Payments are handled securely through your App Store account. Your subscription will automatically renew unless canceled at least 24 hours before the end of the current period.
              </p>
              <p>
                You may manage or cancel your subscription in your device’s account settings after purchase.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p>
                You agree not to misuse the app, including (but not limited to) attempting to reverse engineer, exploit, or distribute any part of BookBrain without prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All BookBrain branding, content, and features are protected by intellectual property laws. You may not copy or reuse any part of the app without permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
              <p>
                We reserve the right to terminate your access to the Service at any time, for any reason, including violation of these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
              <p>
                BookBrain is provided “as is” without warranties of any kind. We do not guarantee uninterrupted access or error-free operation. Use the app at your own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of your country of residence, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
              <p>
                For questions or concerns about these terms, please contact us at <a href="mailto:support@bookbrain.com">support@bookbrain.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* <footer className="bg-slate-50 py-8 px-6 md:px-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BookBrain. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/" className="text-slate-500 hover:text-teal-600 text-sm">Home</Link>
            <Link to="/privacy" className="text-slate-500 hover:text-teal-600 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-teal-600 text-sm">Terms of Use</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default TermsOfUse;
