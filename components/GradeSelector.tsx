"use client";

import { useAppStore } from "@/lib/store";

export default function GradeSelector() {
  const { selectedModel, selectedGrade, setSelectedGrade } = useAppStore();

  if (!selectedModel) {
    return null;
  }

  const handleGradeChange = (gradeId: string) => {
    const grade = selectedModel.grades.find((g) => g.id === gradeId) || null;
    setSelectedGrade(grade);
  };

  return (
    <div>
      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
        Select a Grade
      </label>
      <select
        id="grade"
        value={selectedGrade?.id || ""}
        onChange={(e) => handleGradeChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
      >
        <option value="">Choose a grade...</option>
        {selectedModel.grades.map((grade) => (
          <option key={grade.id} value={grade.id}>
            {grade.name}
          </option>
        ))}
      </select>
    </div>
  );
}

