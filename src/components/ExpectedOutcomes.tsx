import React from 'react';
import { Check } from 'lucide-react';

export function ExpectedOutcomes() {
  const outcomes = [
    {
      title: "Short-term (3-6 months)",
      items: [
        "Increased customer engagement",
        "Improved brand perception",
        "Enhanced market presence"
      ]
    },
    {
      title: "Long-term (6-12 months)",
      items: [
        "Sustainable revenue growth",
        "Reduced acquisition costs",
        "Stronger market position"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Expected Outcomes</h2>
        <p className="mt-2 text-lg text-gray-600">Scaling Impact</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {outcomes.map((period, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{period.title}</h3>
            <ul className="space-y-4">
              {period.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                    <Check className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}