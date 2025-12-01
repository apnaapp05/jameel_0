"use client";
import React from 'react';

type ViewType = 'day' | 'week' | 'month';

// Mock Data for Visualization
const MOCK_EVENTS = [
  { id: 1, day: 1, start: 9, duration: 1, patient: "Sarah Johnson", type: "Root Canal", status: "confirmed" },
  { id: 2, day: 1, start: 14, duration: 1.5, patient: "Mike Ross", type: "Checkup", status: "confirmed" },
  { id: 3, day: 2, start: 10, duration: 1, patient: "Pending Request", type: "Extraction", status: "requested" },
  { id: 4, day: 3, start: 11, duration: 1, patient: "AI Proposal", type: "Rescheduled Slot", status: "ai-suggested" },
  { id: 5, day: 4, start: 15, duration: 2, patient: "Emily Clark", type: "Whitening", status: "confirmed" },
];

export default function BigCalendar({ view }: { view: ViewType }) {
  const hours = Array.from({ length: 10 }, (_, i) => i + 8); // 8 AM to 5 PM
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getEventStyle = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-blue-50 border-l-4 border-brand-blue text-brand-blue';
      case 'requested': return 'bg-orange-50 border-l-4 border-orange-400 text-orange-700';
      case 'ai-suggested': return 'bg-purple-50 border-2 border-dashed border-purple-400 text-purple-700 opacity-90';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      
      {/* Week Header */}
      <div className="grid grid-cols-8 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
        <div className="p-3 text-xs font-semibold text-slate-400 border-r border-slate-200 text-center">
          TIME
        </div>
        {days.map((day, i) => (
          <div key={day} className="p-3 text-center border-r border-slate-100 last:border-r-0">
            <span className="text-xs font-bold text-slate-600 uppercase block">{day}</span>
            <span className={`text-lg font-bold ${i === 1 ? 'text-brand-blue bg-blue-100 px-2 rounded-full' : 'text-slate-800'}`}>
              {25 + i}
            </span>
          </div>
        ))}
      </div>

      {/* Time Grid */}
      <div className="relative grid grid-cols-8 min-h-[600px]">
        
        {/* Time Column */}
        <div className="border-r border-slate-200 bg-white">
          {hours.map((hour) => (
            <div key={hour} className="h-20 border-b border-slate-100 text-xs text-slate-400 p-2 text-center relative">
              <span className="-top-3 relative bg-white px-1">
                {hour > 12 ? hour - 12 : hour} {hour >= 12 ? 'PM' : 'AM'}
              </span>
            </div>
          ))}
        </div>

        {/* Days Columns */}
        {days.map((day, dayIndex) => (
          <div key={day} className="border-r border-slate-100 relative bg-white hover:bg-slate-50/50 transition-colors">
            {/* Grid Lines */}
            {hours.map((h) => (
              <div key={h} className="h-20 border-b border-slate-50"></div>
            ))}

            {/* Render Events for this Day */}
            {MOCK_EVENTS.filter(e => e.day === dayIndex).map((event) => {
              // Calculate positioning
              const topOffset = (event.start - 8) * 5; // 5rem (20 * 0.25) per hour approx or strict pixel calc
              const height = event.duration * 5; 
              
              // Note: In real CSS Grid, we'd use cleaner math. Here we use tailwind arbitrary values for the prototype.
              return (
                <div 
                  key={event.id}
                  className={`absolute w-[95%] left-[2.5%] rounded-md p-2 text-xs cursor-pointer hover:brightness-95 transition-all shadow-sm ${getEventStyle(event.status)}`}
                  style={{ 
                    top: `${(event.start - 8) * 80}px`, // 80px per hour row height
                    height: `${event.duration * 80}px` 
                  }}
                >
                  <div className="font-bold truncate">{event.patient}</div>
                  <div className="opacity-80 truncate text-[10px]">{event.type}</div>
                  {event.status === 'ai-suggested' && (
                    <div className="mt-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                      AI Proposed
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

      </div>
    </div>
  );
}