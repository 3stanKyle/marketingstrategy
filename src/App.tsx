import React from 'react';
import { Hero } from './components/Hero';
import { MarketingEvolution } from './components/MarketingEvolution';
import { MarketingFramework } from './components/MarketingFramework';
import { Timeline } from './components/Timeline';
import { ExpectedOutcomes } from './components/ExpectedOutcomes';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <MarketingEvolution />
        <MarketingFramework />
        <div className="mt-12">
          <Timeline />
        </div>
        <div className="mt-12">
          <ExpectedOutcomes />
        </div>
      </main>
    </div>
  );
}

export default App;