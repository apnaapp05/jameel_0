"use client";
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Sparkles,
  Filter 
} from 'lucide-react';
import BigCalendar from '@/components/dashboard/BigCalendar';

export default function SchedulePage() {
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      
      {/* 1. Header & Controls */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Appointments
            <span className="px-2 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100">
              Agent Active
            </span>
          </h1>
          <p className="text-slate-500 text-sm">Manage patient bookings and blocks.</p>
        </div>

        <div className="flex gap-3">
          {/* Agent Trigger */}
          <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-bold border border-purple-200 hover:bg-purple-200 transition-colors">
            <Sparkles className="h-4 w-4" />
            AI Optimize Slots
          </button>
          
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

          {/* View Switcher */}
          <div className="flex bg-white border border-slate-200 rounded-lg p-1">
            {['day', 'week', 'month'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-all ${
                  view === v 
                    ? 'bg-brand-blue text-white shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md shadow-blue-200">
            + New Booking
          </button>
        </div>
      </div>

      {/* 2. Date Navigation Bar */}
      <div className="bg-white p-3 rounded-t-xl border border-slate-200 border-b-0 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-slate-100 rounded-full">
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>
          <h2 className="text-lg font-bold text-slate-800">
            November 2025
          </h2>
          <button className="p-1 hover:bg-slate-100 rounded-full">
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>
          <button className="text-xs font-semibold text-brand-blue hover:underline ml-2">
            Today
          </button>
        </div>
        
        <div className="flex gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span> Confirmed
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span> Requested
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 border border-dashed border-purple-600"></span> AI Suggested
          </div>
        </div>
      </div>

      {/* 3. The Calendar Grid */}
      <div className="flex-1 bg-white border border-slate-200 rounded-b-xl overflow-hidden shadow-sm relative">
        <BigCalendar view={view} />
      </div>

    </div>
  );
}