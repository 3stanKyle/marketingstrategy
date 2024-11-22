import React, { useState } from 'react';
import { Users2, LineChart, BarChart3 } from 'lucide-react';

const frameworks = [
  {
    id: 'intelligence',
    title: 'Market Intelligence',
    subtitle: 'Data-Driven Decision Making',
    icon: LineChart,
    items: [
      {
        title: 'Weekly Marketing Meetings',
        points: [
          'Market trend analysis',
          'Customer feedback review',
          'Strategy adjustment'
        ]
      },
      {
        title: 'Customer Intelligence',
        points: [
          'Regular customer interviews',
          'Feedback analysis',
          'Behavior tracking'
        ]
      },
      {
        title: 'Competitive Analysis',
        points: [
          'Market positioning',
          'Competitor monitoring',
          'Industry trend tracking'
        ]
      }
    ]
  },
  {
    id: 'kpi',
    title: 'Key Performance Indicators',
    subtitle: 'Measuring Marketing Excellence',
    icon: BarChart3,
    items: [
      {
        title: 'Customer Experience',
        points: [
          'Net Promoter Score (NPS)',
          'Customer Satisfaction Score',
          'Customer Lifetime Value'
        ]
      },
      {
        title: 'Growth Metrics',
        points: [
          'Customer Acquisition Cost',
          'Customer Retention Rate',
          'Revenue Growth Rate'
        ]
      },
      {
        title: 'Marketing ROI',
        points: [
          'Channel Performance',
          'Campaign Effectiveness',
          'Brand Equity Growth'
        ]
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resource Requirements',
    subtitle: 'Scaling Marketing Operations',
    icon: Users2,
    items: [
      {
        title: 'Dedicated Marketing Team',
        points: [
          'Specialized roles',
          'Training and development',
          'Performance metrics'
        ]
      },
      {
        title: 'Technology Stack',
        points: [
          'Marketing automation',
          'Analytics tools',
          'CRM integration'
        ]
      },
      {
        title: 'Content Creation',
        points: [
          'Brand storytelling',
          'Visual assets',
          'Educational content'
        ]
      }
    ]
  }
];

export function MarketingFrameworkSection() {
  const [activeFramework, setActiveFramework] = useState(frameworks[0].id);

  return (
    <div className="space-y-8">
      <div className="flex space-x-4 border-b">
        {frameworks.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveFramework(id)}
            className={`${
              activeFramework === id
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            } flex items-center px-4 py-2 border-b-2 text-sm font-medium transition-colors duration-150 -mb-px`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {title}
          </button>
        ))}
      </div>

      {frameworks.map((framework) => (
        <div
          key={framework.id}
          className={`${activeFramework === framework.id ? 'block' : 'hidden'}`}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{framework.title}</h1>
            <p className="mt-2 text-lg text-gray-600">{framework.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {framework.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}