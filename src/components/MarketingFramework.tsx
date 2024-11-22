import React, { useState } from 'react';
import { ExperienceSection } from './ExperienceSection';
import { ExchangeSection } from './ExchangeSection';
import { EveryplaceSection } from './EveryplaceSection';
import { EvangelismSection } from './EvangelismSection';
import { MarketIntelligence } from './MarketIntelligence';
import { Sparkles, RefreshCcw, Globe, Users } from 'lucide-react';

export function MarketingFramework() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', name: 'Experience', icon: Sparkles },
    { id: 'exchange', name: 'Exchange', icon: RefreshCcw },
    { id: 'everyplace', name: 'Everyplace', icon: Globe },
    { id: 'evangelism', name: 'Evangelism', icon: Users }
  ];

  const sections = {
    experience: <ExperienceSection />,
    exchange: <ExchangeSection />,
    everyplace: <EveryplaceSection />,
    evangelism: <EvangelismSection />
  };

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex space-x-4 border-b mb-8">
          {tabs.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${
                activeTab === id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              } flex items-center px-4 py-2 border-b-2 text-sm font-medium transition-colors duration-150 -mb-px`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {name}
            </button>
          ))}
        </div>

        {sections[activeTab as keyof typeof sections]}
      </div>

      <MarketIntelligence />
    </div>
  );
}