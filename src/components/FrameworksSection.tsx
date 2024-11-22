import React from 'react';
import { Users2, BarChart3, Brain, Target, TrendingUp, Wallet, Users, Laptop, PenTool } from 'lucide-react';

interface FrameworkCardProps {
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    items: string[];
    icon: React.ElementType;
  }>;
}

function FrameworkCard({ title, subtitle, items }: FrameworkCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-gradient-to-b from-white to-indigo-50/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-indigo-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">{subItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FrameworksSection() {
  const frameworks = [
    {
      title: "Market Intelligence Framework",
      subtitle: "Data-Driven Decision Making",
      items: [
        {
          title: "Weekly Marketing Meetings",
          icon: Users2,
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
          icon: BarChart3,
          items: [
            "Market positioning",
            "Competitor monitoring",
            "Industry trend tracking"
          ]
        }
      ]
    },
    {
      title: "Key Performance Indicators",
      subtitle: "Measuring Marketing Excellence",
      items: [
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
      ]
    },
    {
      title: "Resource Requirements",
      subtitle: "Scaling Marketing Operations",
      items: [
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
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {frameworks.map((framework, index) => (
        <FrameworkCard
          key={index}
          title={framework.title}
          subtitle={framework.subtitle}
          items={framework.items}
        />
      ))}
    </div>
  );
}