"use client";
import React from 'react';
import { 
  Users, 
  DollarSign, 
  Calendar, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight, 
  Bot,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      
      {/* 1. Header & Welcome */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-500">Welcome back, Dr. Smith. Here is your clinic's pulse.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            View Reports
          </button>
          <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors shadow-lg shadow-blue-200">
            + New Appointment
          </button>
        </div>
      </div>

      {/* 2. KPI Cards (The Vitals) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard 
          title="Daily Revenue" 
          value="$2,450" 
          change="+12%" 
          trend="up" 
          icon={DollarSign} 
          color="bg-green-100 text-green-700"
        />
        <KPICard 
          title="Appointments" 
          value="18" 
          change="4 Pending" 
          trend="neutral" 
          icon={Calendar} 
          color="bg-blue-100 text-brand-blue"
        />
        <KPICard 
          title="New Patients" 
          value="3" 
          change="+1" 
          trend="up" 
          icon={Users} 
          color="bg-purple-100 text-purple-700"
        />
        <KPICard 
          title="Critical Stock" 
          value="2 Items" 
          change="Action Req." 
          trend="down" 
          icon={AlertCircle} 
          color="bg-red-100 text-red-700"
        />
      </div>

      {/* 3. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Today's Schedule (2/3 width) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Today's Schedule</h3>
            <span className="text-xs font-medium text-slate-400">Nov 29, 2025</span>
          </div>
          
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <ScheduleItem 
              time="09:00 AM" 
              patient="Sarah Johnson" 
              treatment="Root Canal (Stage 2)" 
              status="Completed" 
              type="completed"
            />
            {/* Timeline Item 2 */}
            <ScheduleItem 
              time="10:30 AM" 
              patient="Michael Chen" 
              treatment="Invisalign Consult" 
              status="In Progress" 
              type="active"
            />
            {/* Timeline Item 3 */}
            <ScheduleItem 
              time="11:45 AM" 
              patient="Emma Wilson" 
              treatment="Routine Cleaning" 
              status="Confirmed" 
              type="upcoming"
            />
             {/* Timeline Item 4 */}
             <ScheduleItem 
              time="02:00 PM" 
              patient="James Bolt" 
              treatment="Extraction" 
              status="Requested" 
              type="requested"
            />
          </div>
        </div>

        {/* Right Col: The Agentic Feed (1/3 width) */}
        <div className="bg-white p-0 rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Bot className="h-5 w-5 text-brand-blue" />
              Agent Activity
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide">
              Live
            </span>
          </div>
          
          <div className="p-4 space-y-4 flex-1 overflow-y-auto max-h-[400px]">
            {/* Agent Action 1 */}
            <AgentLog 
              agent="Inventory Agent" 
              action="Auto-Restocked" 
              detail="Ordered 50x Lidocaine cartridges (Low Stock triggered)"
              time="12m ago"
            />
            {/* Agent Action 2 */}
            <AgentLog 
              agent="Appointment Agent" 
              action="Rescheduled" 
              detail="Moved P. Parker to 3:00 PM (Slot Optimization)"
              time="45m ago"
            />
            {/* Agent Action 3 */}
            <AgentLog 
              agent="Revenue Agent" 
              action="Invoice Generated" 
              detail="Sent $150 invoice to Sarah J. for Root Canal"
              time="1h ago"
            />
          </div>
          
          <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
            <button className="text-xs text-brand-blue font-medium hover:underline">
              View Full Agent Logs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Sub-Components (Internal for simplicity) ---

function KPICard({ title, value, change, trend, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className={`flex items-center text-xs font-medium ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500'}`}>
          {trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : trend === 'down' ? <ArrowDownRight className="h-3 w-3 mr-1" /> : null}
          {change}
        </div>
      </div>
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-sm text-slate-500">{title}</div>
    </div>
  );
}

function ScheduleItem({ time, patient, treatment, status, type }: any) {
  const statusStyles: Record<string, string> = {
    completed: "bg-slate-100 text-slate-500 border-slate-200",
    active: "bg-blue-50 text-brand-blue border-blue-100",
    upcoming: "bg-white text-slate-700 border-slate-200",
    requested: "bg-orange-50 text-orange-600 border-orange-100",
  };

  return (
    <div className={`flex items-center p-3 rounded-lg border ${statusStyles[type]} transition-all`}>
      <div className="w-20 text-xs font-bold text-slate-500">{time}</div>
      <div className="flex-1">
        <div className="text-sm font-bold">{patient}</div>
        <div className="text-xs opacity-80">{treatment}</div>
      </div>
      <div className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 border border-black/5">
        {status}
      </div>
    </div>
  );
}

function AgentLog({ agent, action, detail, time }: any) {
  return (
    <div className="flex gap-3 items-start relative pl-4 border-l-2 border-slate-100 hover:border-brand-blue transition-colors">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">{agent}</span>
          <span className="text-[10px] text-slate-400">{time}</span>
        </div>
        <div className="text-xs font-bold text-slate-700">{action}</div>
        <p className="text-[11px] text-slate-500 leading-tight mt-1">{detail}</p>
      </div>
    </div>
  );
}