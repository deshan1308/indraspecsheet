"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useAppStore } from "@/lib/store";

export default function SpecSheet() {
  const { selectedMake, selectedModel, selectedGrade } = useAppStore();
  const specSheetRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  if (!selectedMake || !selectedModel || !selectedGrade) {
    return null;
  }

  return (
    <>
      {/* Print-specific styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          /* Hide everything except the spec sheet content */
          body * {
            visibility: hidden;
          }
          
          /* Show only the spec sheet */
          .spec-sheet-content,
          .spec-sheet-content * {
            visibility: visible;
          }
          
          .spec-sheet-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
            margin: 0;
          }
          
          /* Hide buttons and header in print */
          .no-print {
            display: none !important;
          }
          
          /* Ensure headings align properly and stay with their tables */
          .spec-sheet-content h3 {
            margin-top: 24px !important;
            margin-bottom: 12px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            text-align: left !important;
            clear: both !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }
          
          /* Ensure tables align with headings and stay with their headings */
          .spec-sheet-content table {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 24px !important;
            page-break-inside: avoid !important;
            page-break-before: avoid !important;
            border-collapse: collapse;
            border-spacing: 0;
          }
          
          /* Keep section containers (heading + table) together */
          .spec-sheet-content > div > div > div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Ensure the wrapper div containing heading and table stays together */
          .spec-sheet-content > div > div > div > div {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Ensure table containers align */
          .spec-sheet-content > div > div {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          /* Remove padding from inner divs that wrap tables */
          .spec-sheet-content > div > div > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          /* Ensure table wrapper divs don't add extra spacing */
          .spec-sheet-content > div > div > div > div {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          /* Table cells alignment */
          .spec-sheet-content th,
          .spec-sheet-content td {
            text-align: left !important;
            padding: 12px 16px !important;
            vertical-align: top !important;
          }
          
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Prevent page breaks between heading and table */
          .spec-sheet-content h3 + div {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          
          /* Keep the entire section (heading + table wrapper) together */
          .spec-sheet-content > div > div > div:has(> h3) {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          /* Alternative: target the div that contains both h3 and the table wrapper */
          .spec-sheet-content > div > div > div {
            display: flex !important;
            flex-direction: column !important;
          }
          
          /* Ensure the div containing the table stays with the heading */
          .spec-sheet-content > div > div > div > div:has(table) {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          
          /* Ensure images print */
          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
          }
          
          /* Remove shadows and borders for cleaner print */
          .spec-sheet-content {
            box-shadow: none;
            border: none;
          }
          
          /* Ensure proper spacing between sections */
          .spec-sheet-content > div {
            margin-bottom: 0 !important;
          }
          
          .spec-sheet-content > div > div {
            margin-bottom: 32px !important;
          }
        }
      `}} />
      
      <div className="mt-8 rounded-lg bg-gray-50 border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center no-print">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedMake.name} {selectedModel.name} - {selectedGrade.name}
          </h2>
          <p className="text-sm text-gray-600 mt-1">Specification Sheet</p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors flex items-center gap-2"
          title="Use browser's Print dialog (Ctrl+P) - Select 'Save as PDF' as destination"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print / Save as PDF
        </button>
      </div>

      <div ref={specSheetRef} className="bg-gray-50 print:shadow-none spec-sheet-content">
        {selectedGrade.imageUrl && (
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gray-100">
              {!imageError ? (
                <Image
                  src={selectedGrade.imageUrl}
                  alt={`${selectedMake.name} ${selectedModel.name} ${selectedGrade.name}`}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                  onError={(e) => {
                    console.error("Image failed to load:", selectedGrade.imageUrl);
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", selectedGrade.imageUrl);
                    setImageError(false);
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Image not available</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-6">
        <div className="space-y-8">
          {selectedGrade.specifications.map((spec, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0 print:break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 print:break-after-avoid">
                {spec.category}
              </h3>
              <div className="overflow-x-auto border border-gray-300 rounded-lg print:break-before-avoid">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50 border-b border-r border-gray-300">
                        Specification
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50 border-b border-gray-300">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {spec.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className={`hover:bg-gray-50 transition-colors ${
                          item.highlighted ? "bg-green-50" : ""
                        }`}
                      >
                        <td className={`py-3 px-4 text-sm font-medium border-b border-r border-gray-300 ${
                          item.highlighted ? "text-gray-900" : "text-gray-700"
                        }`}>
                          {item.name}
                        </td>
                        <td className={`py-3 px-4 text-sm border-b border-gray-300 ${
                          item.highlighted ? "text-gray-900 font-medium" : "text-gray-600"
                        }`}>
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
