"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Package, 
  BadgeDollarSign, 
  Settings, 
  LogOut, 
  Bot 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/doctor/dashboard', icon: LayoutDashboard },
  { name: 'Appointments', href: '/doctor/schedule', icon: CalendarDays },
  { name: 'Patients & Cases', href: '/doctor/patients', icon: Users },
  { name: 'Inventory', href: '/doctor/inventory', icon: Package },
  { name: 'Finances', href: '/doctor/finance', icon: BadgeDollarSign },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 z-40">
      
      {/* 1. Clinic Branding */}
      <div className="h-16 flex items-center px-6 border-b border-slate-100">
        <div className="h-8 w-8 bg-brand-blue rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <span className="font-bold text-slate-800 text-lg tracking-tight">Dental<span className="text-brand-blue">Intel</span></span>
      </div>

      {/* 2. Main Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Clinic Management
        </div>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-brand-blue text-white shadow-md shadow-blue-200' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.name}
            </Link>
          );
        })}

        {/* 3. AI Agent Status Indicator (Visual Only for now) */}
        <div className="mt-8 px-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Active Agents
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="h-4 w-4 text-brand-teal" />
              <span className="text-xs font-medium text-slate-700">System Online</span>
            </div>
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-500">Listening for events...</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer / Settings */}
      <div className="p-4 border-t border-slate-100">
        <Link 
          href="/doctor/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
        >
          <Settings className="h-5 w-5 text-slate-400" />
          Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all mt-1">
          <LogOut className="h-5 w-5 text-red-400" />
          Sign Out
        </button>
      </div>
    </div>
  );
}