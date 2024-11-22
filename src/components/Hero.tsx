import React from 'react';
import { ArrowUpRight, BarChart2, Target, Users, Lightbulb } from 'lucide-react';

export function Hero() {
  const summaryItems = [
    {
      title: 'Evolution from 4P\'s to 4E\'s',
      icon: ArrowUpRight,
      description: 'Modern marketing transformation'
    },
    {
      title: 'Scaling Up Methodology',
      icon: BarChart2,
      description: 'Strategic growth framework'
    },
    {
      title: 'Implementation Strategy',
      icon: Target,
      description: 'Actionable growth plans'
    },
    {
      title: 'Key Performance Indicators',
      icon: Lightbulb,
      description: 'Measurable success metrics'
    },
    {
      title: 'Resource Requirements',
      icon: Users,
      description: 'Team and tools needed'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Marketing Strategy
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600">
          Scaling Up Through Modern Marketing Excellence
        </h2>

        <blockquote className="relative p-8 my-8 bg-gradient-to-r from-blue-50 to-white rounded-lg">
          <div className="relative z-10">
            <p className="text-lg md:text-xl italic text-gray-800">
              "Marketing is not just about promoting products; it's about creating experiences that turn customers into evangelists."
            </p>
          </div>
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-lg"></div>
        </blockquote>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Executive Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {summaryItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-blue-50/50 to-transparent hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 text-center mb-2">{item.title}</h4>
              <p className="text-xs text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}