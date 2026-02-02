"use client";

import { useAppStore } from "@/lib/store";

export default function ModelSelector() {
  const { selectedMake, selectedModel, setSelectedModel, setSelectedGrade } =
    useAppStore();

  if (!selectedMake) {
    return null;
  }

  const handleModelChange = (modelId: string) => {
    const model = selectedMake.models.find((m) => m.id === modelId) || null;
    setSelectedModel(model);
    setSelectedGrade(null);
  };

  return (
    <div>
      <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
        Select a Model
      </label>
      <select
        id="model"
        value={selectedModel?.id || ""}
        onChange={(e) => handleModelChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
      >
        <option value="">Choose a model...</option>
        {selectedMake.models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
}
