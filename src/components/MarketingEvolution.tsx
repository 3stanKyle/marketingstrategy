import React from 'react';

export function MarketingEvolution() {
  const traditionalPs = ['Product', 'Price', 'Place', 'Promotion'];
  const modernEs = [
    { name: 'Experience', traditional: 'Product' },
    { name: 'Exchange', traditional: 'Price' },
    { name: 'Everyplace', traditional: 'Place' },
    { name: 'Evangelism', traditional: 'Promotion' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">The Evolution of Marketing</h2>
        <p className="mt-2 text-lg text-gray-600">From Traditional to Transformational</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional 4P's</h3>
            <div className="space-y-3">
              {traditionalPs.map((p, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 transition-all duration-200 hover:shadow-md"
                >
                  <span className="text-gray-700">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern 4E's</h3>
            <div className="space-y-3">
              {modernEs.map((e, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-4 transition-all duration-200 hover:shadow-md"
                >
                  <span className="text-blue-700">{e.name}</span>
                  <span className="text-gray-500 text-sm ml-2">({e.traditional})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}