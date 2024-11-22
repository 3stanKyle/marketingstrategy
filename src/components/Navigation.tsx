import React from 'react';
import { Sparkles, RefreshCcw, Globe, Users } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'experience', name: 'Experience', icon: Sparkles },
    { id: 'exchange', name: 'Exchange', icon: RefreshCcw },
    { id: 'everyplace', name: 'Everyplace', icon: Globe },
    { id: 'evangelism', name: 'Evangelism', icon: Users }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8">
              {tabs.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onTabChange(id)}
                  className={`${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-150`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}