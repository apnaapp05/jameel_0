"use client";
import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-30">
      
      {/* 1. Global Search */}
      <div className="flex items-center bg-slate-50 rounded-full px-4 py-2 w-96 border border-slate-200 focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
        <Search className="h-4 w-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search patients, cases, or inventory..." 
          className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
        />
      </div>

      {/* 2. Right Actions */}
      <div className="flex items-center gap-6">
        
        {/* Notifications */}
        <button className="relative p-2 hover:bg-slate-50 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-slate-800">Dr. Sarah Smith</div>
            <div className="text-xs text-brand-blue font-medium">Chief Dentist</div>
          </div>
          <div className="h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
            S
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </div>

      </div>
    </div>
  );
}