"use client";

import { makes } from "@/lib/data";
import { useAppStore } from "@/lib/store";

export default function MakeSelector() {
  const { selectedMake, setSelectedMake, setSelectedModel, setSelectedGrade } =
    useAppStore();

  const handleMakeChange = (makeId: string) => {
    const make = makes.find((m) => m.id === makeId) || null;
    setSelectedMake(make);
    setSelectedModel(null);
    setSelectedGrade(null);
  };

  return (
    <div>
      <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
        Select a Make
      </label>
      <select
        id="make"
        value={selectedMake?.id || ""}
        onChange={(e) => handleMakeChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
      >
        <option value="">Choose a make...</option>
        {makes.map((make) => (
          <option key={make.id} value={make.id}>
            {make.name}
          </option>
        ))}
      </select>
    </div>
  );
}

