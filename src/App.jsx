import React from 'react';

export default function App() {

  return (
    <div className="flex flex-col min-h-screen justify-between relative overflow-hidden bg-slate-50 text-slate-800">

      {/* Background Decorative Glowing Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blob-glow -mr-32 -mt-32 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blob-glow -ml-48 -mb-48 pointer-events-none z-0"></div>

      {/* Header Section */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Logo & Cooperative Brand */}
          <div className="flex items-center space-x-3 z-10">
            <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100">
              <img
                src="/image/Screenshot_2026-05-23_083001-removebg-preview.png"
                alt="N-Staff Cooperative Multipurpose Society Limited"
                className="h-14 w-auto sm:h-16 hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight leading-tight uppercase">
                N-Staff Cooperative
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-brand-blue uppercase tracking-widest leading-none mt-0.5">
                Multipurpose Society Ltd. Lagos
              </p>
            </div>
          </div>

          {/* Support & Contact Hotline */}
          {/* <div className="flex items-center space-x-3 text-right z-10">
            <div className="bg-sky-50 p-2.5 rounded-2xl text-brand-blue hidden md:flex items-center justify-center shadow-inner">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Need Assistance?
              </span>
              <a
                href="tel:1-866-908-3442"
                className="block text-sm sm:text-base font-extrabold text-slate-800 hover:text-brand-blue transition-colors duration-200"
                aria-label="Call support hotline"
              >
                1-866-908-3442
              </a>
            </div>
          </div> */}

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl w-full text-center space-y-8">

          {/* Maintenance Icon */}
          <div className="inline-flex relative mb-2">
            <div className="absolute inset-0 bg-sky-200/40 rounded-full filter blur-xl animate-pulse"></div>
            <div className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 relative animate-float">
              <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          {/* Main Heading & Line */}
          <div className="space-y-4 animate-fade-in-down">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight max-w-3xl mx-auto">
              This Site Is Under Maintenance and Coming Soon.
            </h2>

            {/* Modern Gradient Accent Line */}
            <div className="w-28 h-1.5 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full mx-auto shadow-sm shadow-sky-200/50"></div>
          </div>

          {/* Warning/Alert Card */}
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md border border-amber-100 rounded-3xl p-6 shadow-md shadow-slate-100/50 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-5 transition-all duration-300 hover:shadow-lg hover:border-amber-200/80 bg-gradient-to-br from-white/95 to-amber-50/10 animate-fade-in-up">
            <div className="bg-amber-50 p-3 rounded-2xl text-brand-amber shrink-0 flex items-center justify-center animate-pulse-subtle shadow-inner">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-800">Please Check Back Later</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                This site is currently under Maintenance. Our team is building a premium digital home for N-Staff Cooperative to serve you better.
              </p>
            </div>
          </div>



        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-white border-t border-slate-100 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">

          {/* Copyright Info */}
          <div className="text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} N-Staff Cooperative Multipurpose Society Limited. All rights reserved.
          </div>

          {/* Registration Reference Disclaimer
          <div className="text-center md:text-right font-semibold text-slate-500 hover:text-slate-700 transition-colors">
            This Domain Is Registered with{" "}
            <a 
              href="https://www.networksolutions.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-blue hover:underline"
            >
              NetworkSolutions.com
            </a>
          </div> */}

        </div>
      </footer>

    </div>
  );
}
