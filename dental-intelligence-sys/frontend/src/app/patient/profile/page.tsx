"use client";
import React from 'react';
import { User, Mail, Phone, Bell, LogOut } from 'lucide-react';

export default function PatientProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>

      {/* Avatar Section */}
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 bg-brand-teal rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-teal-100">
          SJ
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">Sarah Johnson</h2>
          <p className="text-sm text-slate-500">Patient ID: #1001</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
          <Phone className="h-5 w-5 text-slate-400" />
          <div className="flex-1">
             <div className="text-xs text-slate-400">Phone Number</div>
             <div className="text-sm font-bold text-slate-700">+1 (555) 012-3456</div>
          </div>
          <button className="text-xs text-brand-teal font-bold">Edit</button>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
          <Mail className="h-5 w-5 text-slate-400" />
          <div className="flex-1">
             <div className="text-xs text-slate-400">Email Address</div>
             <div className="text-sm font-bold text-slate-700">sarah.j@example.com</div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <h3 className="font-bold text-slate-800 pt-2">Preferences</h3>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Bell className="h-5 w-5 text-slate-400" />
             <span className="text-sm font-medium text-slate-700">SMS Reminders</span>
          </div>
          <div className="w-10 h-6 bg-brand-teal rounded-full relative cursor-pointer">
             <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-red-500 font-bold py-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
        <LogOut className="h-4 w-4" /> Sign Out
      </button>
    </div>
  );
}