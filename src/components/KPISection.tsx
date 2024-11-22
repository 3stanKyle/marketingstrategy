import React from 'react';
import { Target, TrendingUp, Wallet } from 'lucide-react';

interface MetricCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
}

function MetricCard({ title, items, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-indigo-50 rounded-full">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-2"></span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KPISection() {
  const metrics = [
    {
      title: "Customer Experience",
      icon: Target,
      items: [
        "Net Promoter Score (NPS)",
        "Customer Satisfaction Score",
        "Customer Lifetime Value"
      ]
    },
    {
      title: "Growth Metrics",
      icon: TrendingUp,
      items: [
        "Customer Acquisition Cost",
        "Customer Retention Rate",
        "Revenue Growth Rate"
      ]
    },
    {
      title: "Marketing ROI",
      icon: Wallet,
      items: [
        "Channel Performance",
        "Campaign Effectiveness",
        "Brand Equity Growth"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Key Performance Indicators</h1>
        <p className="mt-2 text-lg text-gray-600">Measuring Marketing Excellence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            items={metric.items}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
}