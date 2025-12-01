"use client";
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserPlus, 
  FileText, 
  CalendarPlus 
} from 'lucide-react';

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Data
  const PATIENTS = [
    { id: 1, name: "Sarah Johnson", age: 34, lastVisit: "Oct 24, 2025", nextAppt: "Nov 30, 2025", risk: "Low", status: "Active" },
    { id: 2, name: "Michael Chen", age: 45, lastVisit: "Sep 12, 2025", nextAppt: "None", risk: "High", status: "Treatment Pending" },
    { id: 3, name: "Emma Wilson", age: 29, lastVisit: "Nov 01, 2025", nextAppt: "Dec 05, 2025", risk: "Medium", status: "Active" },
    { id: 4, name: "James Bolt", age: 52, lastVisit: "Aug 15, 2025", nextAppt: "None", risk: "Low", status: "Archived" },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Patient Registry</h1>
          <p className="text-slate-500 text-sm">Total 1,248 registered patients.</p>
        </div>
        <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200">
          <UserPlus className="h-4 w-4" />
          Add New Patient
        </button>
      </div>

      {/* 2. Filters & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, ID, or phone..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* 3. The Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Patient Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Visit</th>
              <th className="px-6 py-4">Next Appt</th>
              <th className="px-6 py-4">AI Risk Profile</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {PATIENTS.map((patient) => (
              <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-bold text-slate-800">{patient.name}</div>
                  <div className="text-xs text-slate-400">ID: #{1000 + patient.id} • {patient.age} yrs</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    patient.status === 'Active' ? 'bg-green-100 text-green-700' :
                    patient.status === 'Archived' ? 'bg-slate-100 text-slate-500' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-600">{patient.lastVisit}</td>
                <td className="px-6 py-4 font-medium text-brand-blue">{patient.nextAppt}</td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-2 font-bold ${
                    patient.risk === 'High' ? 'text-red-600' : 
                    patient.risk === 'Medium' ? 'text-orange-500' : 
                    'text-slate-400'
                  }`}>
                    <span className={`h-2 w-2 rounded-full ${
                      patient.risk === 'High' ? 'bg-red-500 animate-pulse' : 
                      patient.risk === 'Medium' ? 'bg-orange-400' : 
                      'bg-slate-300'
                    }`}></span>
                    {patient.risk}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-blue-50 text-brand-blue rounded-lg tooltip" title="Quick Book">
                      <CalendarPlus className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg tooltip" title="View Case">
                      <FileText className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 text-slate-600 rounded-lg">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}