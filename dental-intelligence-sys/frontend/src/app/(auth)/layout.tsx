import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor: Subtle Medical Crosses */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 text-brand-blue/20">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
               <path d="M11 2h2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z"/>
            </svg>
         </div>
         <div className="absolute bottom-20 right-20 text-brand-teal/20">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
               <path d="M11 2h2v9h9v2h-9v9h-2v-9h-9v-2h9v-9z"/>
            </svg>
         </div>
      </div>

      {/* Main Content Card */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-slate-100 p-8 z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Header Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 bg-brand-blue rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-brand-blue/20">
            <Stethoscope className="text-white h-7 w-7" />
          </div>
          <h1 className="text-xl font-bold text-slate-800">Dental Intelligence</h1>
          <p className="text-sm text-slate-400">Secure Access Portal</p>
        </div>

        {children}
        
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-slate-400">
        Secured by AES-256 Encryption • HIPAA Compliant
      </div>
    </div>
  );
}