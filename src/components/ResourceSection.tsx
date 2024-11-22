import React from 'react';
import { Users, Laptop, PenTool } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  items: string[];
  icon: React.ElementType;
}

function ResourceCard({ title, items, icon: Icon }: ResourceCardProps) {
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

export function ResourceSection() {
  const resources = [
    {
      title: "Dedicated Marketing Team",
      icon: Users,
      items: [
        "Specialized roles",
        "Training and development",
        "Performance metrics"
      ]
    },
    {
      title: "Technology Stack",
      icon: Laptop,
      items: [
        "Marketing automation",
        "Analytics tools",
        "CRM integration"
      ]
    },
    {
      title: "Content Creation",
      icon: PenTool,
      items: [
        "Brand storytelling",
        "Visual assets",
        "Educational content"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Resource Requirements</h1>
        <p className="mt-2 text-lg text-gray-600">Scaling Marketing Operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            items={resource.items}
            icon={resource.icon}
          />
        ))}
      </div>
    </div>
  );
}