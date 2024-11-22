import React, { useState } from 'react';
import { LineChart, Users, BarChart3 } from 'lucide-react';

const tabs = [
  {
    id: 'intelligence',
    title: 'Market Intelligence',
    subtitle: 'Data-Driven Decision Making',
    icon: LineChart,
    content: [
      {
        title: 'Weekly Marketing Meetings',
        items: [
          'Market trend analysis',
          'Customer feedback review',
          'Strategy adjustment'
        ]
      },
      {
        title: 'Customer Intelligence',
        items: [
          'Regular customer interviews',
          'Feedback analysis',
          'Behavior tracking'
        ]
      },
      {
        title: 'Competitive Analysis',
        items: [
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
    content: [
      {
        title: 'Customer Experience',
        items: [
          'Net Promoter Score (NPS)',
          'Customer Satisfaction Score',
          'Customer Lifetime Value'
        ]
      },
      {
        title: 'Growth Metrics',
        items: [
          'Customer Acquisition Cost',
          'Customer Retention Rate',
          'Revenue Growth Rate'
        ]
      },
      {
        title: 'Marketing ROI',
        items: [
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
    icon: Users,
    content: [
      {
        title: 'Dedicated Marketing Team',
        items: [
          'Specialized roles',
          'Training and development',
          'Performance metrics'
        ]
      },
      {
        title: 'Technology Stack',
        items: [
          'Marketing automation',
          'Analytics tools',
          'CRM integration'
        ]
      },
      {
        title: 'Content Creation',
        items: [
          'Brand storytelling',
          'Visual assets',
          'Educational content'
        ]
      }
    ]
  }
];

export function MarketIntelligence() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Market Intelligence Framework</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
          <currentTab.icon className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{currentTab.title}</h3>
        <p className="text-gray-600 mt-1">{currentTab.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentTab.content.map((section, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}