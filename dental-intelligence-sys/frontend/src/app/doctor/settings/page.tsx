"use client";
import React from 'react';
import { Save } from 'lucide-react';

export default function DoctorSettings() {
  return (
    <div className="max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Clinic Settings</h1>
        <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        
        {/* Clinic Details */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Clinic Details</h3>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Clinic Name</label>
                <input type="text" className="w-full p-2 border rounded-lg text-sm" defaultValue="Dental Intel Clinic" />
             </div>
             <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Contact Email</label>
                <input type="text" className="w-full p-2 border rounded-lg text-sm" defaultValue="admin@dentalintel.com" />
             </div>
          </div>
        </div>

        {/* Agent Configuration */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Agent Autonomy Levels</h3>
          <div className="space-y-4">
             
             <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                   <div className="text-sm font-bold text-slate-800">Inventory Agent</div>
                   <div className="text-xs text-slate-500">Auto-order supplies when low</div>
                </div>
                <select className="text-sm border-slate-300 rounded-md p-1">
                   <option>Full Autonomy</option>
                   <option>Require Approval</option>
                   <option>Disabled</option>
                </select>
             </div>

             <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                   <div className="text-sm font-bold text-slate-800">Appointment Agent</div>
                   <div className="text-xs text-slate-500">Auto-reschedule cancellations</div>
                </div>
                <select className="text-sm border-slate-300 rounded-md p-1">
                   <option>Full Autonomy</option>
                   <option>Require Approval</option>
                   <option>Disabled</option>
                </select>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
}