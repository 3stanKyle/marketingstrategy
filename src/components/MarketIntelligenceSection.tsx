import React from 'react';
import { Users, Brain, LineChart } from 'lucide-react';

interface IntelligenceCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
}

function IntelligenceCard({ title, items, icon: Icon }: IntelligenceCardProps) {
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

export function MarketIntelligenceSection() {
  const cards = [
    {
      title: "Weekly Marketing Meetings",
      icon: Users,
      items: [
        "Market trend analysis",
        "Customer feedback review",
        "Strategy adjustment"
      ]
    },
    {
      title: "Customer Intelligence",
      icon: Brain,
      items: [
        "Regular customer interviews",
        "Feedback analysis",
        "Behavior tracking"
      ]
    },
    {
      title: "Competitive Analysis",
      icon: LineChart,
      items: [
        "Market positioning",
        "Competitor monitoring",
        "Industry trend tracking"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Market Intelligence Framework</h1>
        <p className="mt-2 text-lg text-gray-600">Data-Driven Decision Making</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <IntelligenceCard
            key={index}
            title={card.title}
            items={card.items}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}