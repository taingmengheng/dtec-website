import React, { useState } from 'react';
import machineryData from '../data/machinery.json';

export default function MachineryList() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? machineryData 
    : machineryData.filter(item => item.category === filter);

  return (
    <div className="my-8">
      <div className="flex gap-2 mb-6">
        {['All', 'Machining & Milling', 'Heavy Equipment'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === cat 
                ? 'bg-orange-600 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-5 border border-slate-800 bg-slate-900 rounded-xl">
            <span className="text-xs text-orange-400 uppercase font-semibold">{item.category}</span>
            <h3 className="text-xl font-bold text-slate-100 mt-1">{item.name}</h3>
            <p className="text-slate-400 text-sm mt-2">{item.specs}</p>
            <span className="inline-block mt-4 text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}