"use client";
import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  RefreshCw, 
  ShoppingCart,
  CheckCircle2 
} from 'lucide-react';

export default function InventoryPage() {
  
  // Mock Data
  const INVENTORY = [
    { id: 1, name: "Lidocaine 2% Inj", category: "Anesthetics", stock: 12, max: 100, status: "Critical", autoOrder: true },
    { id: 2, name: "Gutta Percha Points", category: "Endodontics", stock: 45, max: 60, status: "Good", autoOrder: false },
    { id: 3, name: "Composite Resin (A2)", category: "Restorative", stock: 8, max: 50, status: "Low", autoOrder: true },
    { id: 4, name: "Nitrile Gloves (M)", category: "Consumables", stock: 200, max: 200, status: "Good", autoOrder: false },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Inventory & Supply Chain
            <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full border border-brand-teal/20">
              Agent Active
            </span>
          </h1>
          <p className="text-slate-500 text-sm">Automated tracking of clinical supplies.</p>
        </div>
        <div className="bg-slate-800 text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
          <div>
            <div className="text-xs opacity-70 uppercase tracking-wider">Pending Orders</div>
            <div className="text-2xl font-bold">3 Items</div>
          </div>
          <ShoppingCart className="h-8 w-8 opacity-50" />
        </div>
      </div>

      {/* 2. The List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-700">Stock Levels</h3>
          <button className="text-sm text-brand-blue font-medium hover:underline flex items-center gap-1">
            <RefreshCw className="h-3 w-3" /> Sync Now
          </button>
        </div>
        
        <table className="w-full text-sm text-left">
          <thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Item Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 w-1/3">Stock Level</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Agent Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {INVENTORY.map((item) => {
              const percentage = (item.stock / item.max) * 100;
              const isCritical = item.status === 'Critical';
              const isLow = item.status === 'Low';

              return (
                <tr key={item.id} className={`hover:bg-slate-50 transition-colors ${isCritical ? 'bg-red-50/30' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{item.name}</div>
                    <div className="text-xs text-slate-400">SKU: INV-{1000 + item.id}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            isCritical ? 'bg-red-500' : isLow ? 'bg-orange-400' : 'bg-green-500'
                          }`} 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600 w-12 text-right">
                        {item.stock}/{item.max}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {isCritical ? (
                      <span className="inline-flex items-center gap-1 text-red-600 font-bold text-xs bg-red-100 px-2 py-1 rounded-md">
                        <AlertTriangle className="h-3 w-3" /> Critical
                      </span>
                    ) : isLow ? (
                      <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-xs bg-orange-100 px-2 py-1 rounded-md">
                        Low Stock
                      </span>
                    ) : (
                      <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded-md">
                        Good
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item.autoOrder && (isCritical || isLow) ? (
                      <div className="inline-flex items-center gap-1.5 text-brand-blue font-bold text-xs border border-blue-100 bg-blue-50 px-3 py-1.5 rounded-full shadow-sm">
                        <RefreshCw className="h-3 w-3 animate-spin" />
                        Ordering...
                      </div>
                    ) : item.status === 'Good' ? (
                      <div className="inline-flex items-center gap-1 text-slate-400 text-xs">
                         <CheckCircle2 className="h-3 w-3" /> Monitored
                      </div>
                    ) : (
                       <button className="text-xs font-bold text-white bg-slate-800 px-3 py-1 rounded hover:bg-slate-700">
                         Manual Order
                       </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}