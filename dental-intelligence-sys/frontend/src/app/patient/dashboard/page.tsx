"use client";
import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      
      {/* 1. Hero: Next Appointment Card */}
      <div className="bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-teal-200">
        <div className="text-teal-100 text-xs font-medium uppercase tracking-wider mb-1">Next Appointment</div>
        <div className="flex items-end gap-2 mb-4">
           <h2 className="text-3xl font-bold">Nov 30</h2>
           <span className="text-lg opacity-90 mb-1">at 10:00 AM</span>
        </div>
        
        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20 text-sm space-y-2">
           <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-100" />
              <span>Room 3 • Dr. Sarah Smith</span>
           </div>
           <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-100" />
              <span>Routine Checkup (30 mins)</span>
           </div>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
         <Link href="/patient/book" className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 active:scale-95 transition-transform flex flex-col gap-3">
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
               <Clock className="h-5 w-5" />
            </div>
            <span className="font-bold text-slate-700 text-sm">Book New<br/>Appointment</span>
         </Link>
         
         <button className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 active:scale-95 transition-transform flex flex-col gap-3">
            <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
               <Phone className="h-5 w-5" />
            </div>
            <span className="font-bold text-slate-700 text-sm">Emergency<br/>Contact</span>
         </button>
      </div>

      {/* 3. Recent Activity */}
      <div>
         <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-slate-800">Recent Activity</h3>
            <Link href="/patient/history" className="text-xs text-brand-teal font-bold hover:underline">View All</Link>
         </div>
         <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-100">
            <div className="p-4 flex items-center justify-between">
               <div>
                  <div className="text-sm font-bold text-slate-800">Payment Processed</div>
                  <div className="text-xs text-slate-400">Oct 24 • Invoice #4920</div>
               </div>
               <span className="text-sm font-bold text-slate-800">-$450.00</span>
            </div>
            <div className="p-4 flex items-center justify-between">
               <div>
                  <div className="text-sm font-bold text-slate-800">Root Canal Stage 1</div>
                  <div className="text-xs text-slate-400">Oct 24 • Completed</div>
               </div>
               <ArrowRight className="h-4 w-4 text-slate-300" />
            </div>
         </div>
      </div>

    </div>
  );
}