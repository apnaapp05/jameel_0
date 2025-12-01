"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function DoctorLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulator for Auth Logic (We will connect API later)
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to Doctor Dashboard
      router.push('/doctor/dashboard');
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-blue">
        Doctor Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        
        {/* Email Input */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-600 uppercase">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <input 
              type="email"
              required
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none text-sm"
              placeholder="dr.name@clinic.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <label className="text-xs font-semibold text-slate-600 uppercase">Password</label>
            <Link href="/auth/forgot-password" className="text-xs text-brand-blue hover:underline">
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <input 
              type="password"
              required
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none text-sm"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-brand-blue hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Access Dashboard <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Patient Link */}
      <div className="mt-6 text-center text-sm text-slate-500">
        Not a doctor?{' '}
        <Link href="/auth/patient/login" className="text-brand-teal font-semibold hover:underline">
          Patient Portal
        </Link>
      </div>
    </div>
  );
}