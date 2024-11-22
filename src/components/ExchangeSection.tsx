import React from 'react';
import { AccordionItem } from './Accordion';
import { Quote } from './Quote';

export function ExchangeSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Exchange: Value-Based Pricing</h1>
        <p className="mt-2 text-lg text-gray-600">Moving Beyond Traditional Pricing Models</p>
      </div>

      <Quote
        text="Pricing is the only element of marketing that directly adds to the bottom line without incurring upfront costs."
        author="Business Strategist"
      />

      <div className="space-y-2">
        <AccordionItem title="1. Value-Based Pricing Strategy">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Premium positioning</li>
            <li>Customer perceived value</li>
            <li>Market intelligence integration</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="2. Profit Enhancement">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Only P/E that directly impacts bottom line</li>
            <li>No upfront costs required</li>
            <li>Immediate impact on growth</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="3. Implementation Framework">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Regular value assessment</li>
            <li>Competitive analysis</li>
            <li>Customer feedback integration</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}