"use client";

import { useState, useMemo } from "react";
import { PreferenceFilters, getVehicleMatches, getAvailableMakes } from "@/lib/preference-utils";
import { useAppStore } from "@/lib/store";
import Image from "next/image";

export default function CustomerPreference() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"basic" | "features">("basic");
  const [filters, setFilters] = useState<PreferenceFilters>({});
  const { setSelectedMake, setSelectedModel, setSelectedGrade } = useAppStore();
  const makes = getAvailableMakes();

  const matches = useMemo(() => {
    if (!isExpanded) {
      return [];
    }
    // Only filter if at least one filter is set
    const hasFilters = Object.keys(filters).some(
      (key) => {
        const value = filters[key as keyof PreferenceFilters];
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return value !== undefined && value !== null && value !== "";
      }
    );
    if (!hasFilters) {
      return [];
    }
    const allMatches = getVehicleMatches(filters);
    // Return ALL matches with score > 0 (no limit)
    return allMatches.filter(m => m.score > 0);
  }, [filters, isExpanded]);

  const handleFilterChange = (key: keyof PreferenceFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === "" || (Array.isArray(value) && value.length === 0) ? undefined : value,
    }));
  };

  const handleSelectVehicle = (match: typeof matches[0]) => {
    const make = match.make;
    const model = make.models.find((m) => m.id === match.modelId);
    if (model) {
      setSelectedMake(make);
      setSelectedModel(model);
      setSelectedGrade(match.grade);
      // Scroll to spec sheet
      setTimeout(() => {
        document.getElementById("spec-sheet")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const resetFilters = () => {
    setFilters({});
  };

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-bold text-gray-900">Customer Preference Finder</h2>
            <p className="text-sm text-gray-600">Find the perfect vehicle based on your preferences</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Filter Panel */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("basic")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "basic"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Basic Filters
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "features"
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              Features & Comfort
            </button>
          </div>

          <div className="space-y-6">
            {/* Basic Filters Tab */}
            {activeTab === "basic" && (
              <>
                {/* Make Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make (Optional)
                  </label>
                  <select
                    value={filters.make || ""}
                    onChange={(e) => handleFilterChange("make", e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  >
                    <option value="">All Makes</option>
                    {makes.map((make) => (
                      <option key={make.id} value={make.id}>
                        {make.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Car",
                      "SUV",
                      "Van",
                      "Truck",
                      "Double Cab",
                      "Bus"
                    ].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-red-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={filters.bodyType?.includes(type) || false}
                          onChange={(e) => {
                            const current = filters.bodyType || [];
                            const updated = e.target.checked
                              ? [...current, type]
                              : current.filter((t) => t !== type);
                            handleFilterChange("bodyType", updated);
                          }}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Petrol", "Diesel", "Hybrid", "Electric"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-red-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={filters.fuelType?.includes(type) || false}
                          onChange={(e) => {
                            const current = filters.fuelType || [];
                            const updated = e.target.checked
                              ? [...current, type]
                              : current.filter((t) => t !== type);
                            handleFilterChange("fuelType", updated);
                          }}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Passenger Capacity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seating Capacity
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["5", "7", "7+"].map((seats) => (
                      <label
                        key={seats}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-red-50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="passengerCapacity"
                          checked={filters.passengerCapacity === seats}
                          onChange={(e) =>
                            handleFilterChange(
                              "passengerCapacity",
                              e.target.checked ? seats : undefined
                            )
                          }
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{seats} seater</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Drive Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Drive Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["2WD", "4WD", "AWD"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-red-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={filters.driveType?.includes(type) || false}
                          onChange={(e) => {
                            const current = filters.driveType || [];
                            const updated = e.target.checked
                              ? [...current, type]
                              : current.filter((t) => t !== type);
                            handleFilterChange("driveType", updated);
                          }}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    min="2020"
                    max="2030"
                    value={filters.year || ""}
                    onChange={(e) =>
                      handleFilterChange(
                        "year",
                        e.target.value ? parseInt(e.target.value, 10) : undefined
                      )
                    }
                    placeholder="e.g., 2025"
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
              </>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "hasSafetyFeatures", label: "Safety Features (Airbags, ABS, etc.)" },
                  { key: "hasAudioSystem", label: "Audio/Infotainment System" },
                  { key: "hasSunroof", label: "Sunroof" },
                  { key: "hasLeatherSeats", label: "Leather Seats" },
                  { key: "hasNavigation", label: "GPS Navigation" },
                  { key: "hasBluetooth", label: "Bluetooth Connectivity" },
                  { key: "hasUSBPorts", label: "USB Ports" },
                  { key: "hasParkingSensors", label: "Parking Sensors" },
                  { key: "hasCruiseControl", label: "Cruise Control" },
                  { key: "hasKeylessEntry", label: "Keyless Entry" },
                  { key: "hasClimateControl", label: "Climate Control/AC" },
                  { key: "hasLEDLights", label: "LED Headlights" },
                  { key: "hasAlloyWheels", label: "Alloy Wheels" },
                ].map((feature) => (
                  <label
                    key={feature.key}
                    className="flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-md hover:bg-red-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={
                        (filters[feature.key as keyof PreferenceFilters] as boolean) || false
                      }
                      onChange={(e) =>
                        handleFilterChange(
                          feature.key as keyof PreferenceFilters,
                          e.target.checked
                        )
                      }
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700">{feature.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6 mt-6 border-t border-gray-200">
            <button
              onClick={resetFilters}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Reset Filters
            </button>
            <button
              onClick={() => {
                if (matches.length > 0) {
                  document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`flex-1 px-4 py-2 rounded-md transition-colors font-medium ${
                matches.length > 0
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={matches.length === 0}
            >
              Find Matches {matches.length > 0 && `(${matches.length})`}
            </button>
          </div>

          {/* Helper Text */}
          {matches.length === 0 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-800">
                <strong>💡 Tip:</strong> Select at least one filter above to find matching vehicles. 
                The more filters you select, the more accurate your recommendations will be.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {isExpanded && matches.length > 0 && (
        <div id="recommendations" className="border-t border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Top Recommendations ({matches.length})
            </h3>
            <span className="text-sm text-gray-600">
              Sorted by match score
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map((match, index) => (
              <div
                key={`${match.make.id}-${match.modelId}-${match.grade.id}`}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-gray-50"
                onClick={() => handleSelectVehicle(match)}
              >
                {/* Badge */}
                <div className="relative">
                  {index === 0 && (
                    <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      BEST MATCH
                    </div>
                  )}
                  {match.grade.imageUrl && (
                    <div className="relative w-full h-48 bg-gray-100">
                      <Image
                        src={match.grade.imageUrl}
                        alt={`${match.make.name} ${match.modelName} ${match.grade.name}`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {match.make.name} {match.modelName}
                      </h4>
                      <p className="text-sm text-gray-600">{match.grade.name}</p>
                    </div>
                    <div className="text-right ml-2">
                      <div className="text-xl font-bold text-red-600">
                        {match.score}%
                      </div>
                      <div className="text-xs text-gray-500">Match</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          match.score >= 80
                            ? "bg-red-600"
                            : match.score >= 60
                            ? "bg-red-500"
                            : match.score >= 40
                            ? "bg-orange-500"
                            : "bg-orange-400"
                        }`}
                        style={{ width: `${match.score}%` }}
                      />
                    </div>
                  </div>

                  {/* Matched Filters */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {match.matchedFilters.map((filter) => (
                      <span
                        key={filter}
                        className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium"
                      >
                        {filter}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectVehicle(match);
                    }}
                    className="mt-4 w-full px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Full Specifications
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {isExpanded && 
        Object.keys(filters).some(
          (key) => {
            const value = filters[key as keyof PreferenceFilters];
            if (Array.isArray(value)) {
              return value.length > 0;
            }
            return value !== undefined && value !== null && value !== "";
          }
        ) && 
        matches.length === 0 && (
        <div className="border-t border-gray-200 p-12 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No matches found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your filters to find more vehicles.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
