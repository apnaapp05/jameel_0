"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, CalendarPlus, User, FileClock } from 'lucide-react';

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 pb-20"> {/* pb-20 for bottom nav space */}
      
      {/* 1. Mobile Top Bar */}
      <div className="bg-white px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-30">
        <div className="font-bold text-slate-800 text-lg tracking-tight">
          Dental<span className="text-brand-teal">Care</span>
        </div>
        <div className="h-8 w-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-xs font-bold">
          SJ
        </div>
      </div>

      {/* 2. Main Content */}
      <main className="max-w-md mx-auto p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {children}
      </main>

      {/* 3. Bottom Navigation Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 py-2 px-6 flex justify-between items-center z-40 md:justify-center md:gap-12">
        <NavLink href="/patient/dashboard" icon={Home} label="Home" active={pathname.includes('dashboard')} />
        <NavLink href="/patient/book" icon={CalendarPlus} label="Book" active={pathname.includes('book')} />
        <NavLink href="/patient/history" icon={FileClock} label="History" active={pathname.includes('history')} />
        <NavLink href="/patient/profile" icon={User} label="Profile" active={pathname.includes('profile')} />
      </div>
    </div>
  );
}

// Helper for Bottom Nav
function NavLink({ href, icon: Icon, label, active }: any) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1">
      <div className={`p-1.5 rounded-full transition-all ${active ? 'bg-teal-50 text-brand-teal' : 'text-slate-400'}`}>
        <Icon className="h-6 w-6" />
      </div>
      <span className={`text-[10px] font-medium ${active ? 'text-brand-teal' : 'text-slate-400'}`}>
        {label}
      </span>
    </Link>
  );
}