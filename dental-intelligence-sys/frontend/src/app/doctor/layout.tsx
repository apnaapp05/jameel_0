import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopNav from '@/components/dashboard/TopNav';

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed Navigation */}
      <Sidebar />
      <TopNav />
      
      {/* Main Content Area */}
      {/* We add padding-left (pl-64) to account for the fixed sidebar */}
      {/* We add padding-top (pt-16) to account for the fixed topnav */}
      <main className="pl-64 pt-16 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}