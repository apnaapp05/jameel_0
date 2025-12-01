"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Smile, ArrowRight, Loader2 } from 'lucide-react';

export default function PatientLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/patient/dashboard');
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-teal">
        Patient Portal
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-600 uppercase">Mobile Number / Email</label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all outline-none text-sm"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-600 uppercase">Password</label>
          <input 
            type="password"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all outline-none text-sm"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-brand-teal hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign In"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-500">
        New Patient?{' '}
        <Link href="/auth/patient/signup" className="text-brand-blue font-semibold hover:underline">
          Register Here
        </Link>
      </div>
    </div>
  );
}