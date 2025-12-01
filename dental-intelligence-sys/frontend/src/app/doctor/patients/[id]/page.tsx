"use client";
import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  FileText, 
  Activity, 
  Syringe, 
  CreditCard,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  // Mock Data - In real app, we fetch using params.id
  const patient = {
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    contact: "+1 (555) 0123-4567",
    risk: "Low",
    allergies: ["Penicillin"],
    lastVisit: "Oct 24, 2025"
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Top Bar */}
      <div className="flex items-center gap-4">
        <Link href="/doctor/patients" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="h-5 w-5 text-slate-500" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{patient.name}</h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>ID: #1001</span>
            <span>•</span>
            <span>{patient.age} yrs, {patient.gender}</span>
            <span>•</span>
            <span className="text-red-500 font-bold bg-red-50 px-2 rounded-full">Allergy: {patient.allergies[0]}</span>
          </div>
        </div>
        <div className="flex-1"></div>
        <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-800">
          Start New Case
        </button>
        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 2. Left Col: Patient Info Card */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="h-4 w-4 text-brand-blue" /> Vitals & History
             </h3>
             <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                   <span className="text-slate-500">Last Visit</span>
                   <span className="font-medium">{patient.lastVisit}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                   <span className="text-slate-500">Oral Hygiene</span>
                   <span className="font-medium text-green-600">Good</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 pb-2">
                   <span className="text-slate-500">Insurance</span>
                   <span className="font-medium">BlueCross Active</span>
                </div>
                <div className="flex justify-between pb-2">
                   <span className="text-slate-500">Outstanding Balance</span>
                   <span className="font-bold text-slate-800">$0.00</span>
                </div>
             </div>
          </div>
        </div>

        {/* 3. Right Col: Clinical Timeline (The Case Agent's Domain) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Clinical Timeline</h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Future Appointment */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <Calendar className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                   <span className="font-bold text-brand-blue">Upcoming: Routine Checkup</span>
                   <span className="text-xs font-bold text-slate-500">Nov 30</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">Scheduled via Appointment Agent.</p>
                <div className="flex gap-2">
                   <button className="text-xs bg-white border border-blue-200 text-blue-700 px-2 py-1 rounded">Reschedule</button>
                   <button className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Cancel</button>
                </div>
              </div>
            </div>

            {/* Past Procedure */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                   <span className="font-bold text-slate-800">Root Canal (Stage 1)</span>
                   <span className="text-xs text-slate-400">Oct 24</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">
                   Dr. Smith performed access opening. Inventory Agent deducted: 1x File Kit.
                </p>
                <div className="flex gap-2">
                   <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 flex items-center gap-1">
                     <FileText className="h-3 w-3" /> Notes
                   </span>
                   <span className="text-[10px] bg-green-50 px-2 py-1 rounded text-green-700 flex items-center gap-1">
                     <CreditCard className="h-3 w-3" /> Paid $450
                   </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}