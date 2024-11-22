import React from 'react';
import { AccordionItem } from './Accordion';

export function EveryplaceSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Everyplace: Omnichannel Presence</h1>
        <p className="mt-2 text-lg text-gray-600">Meeting Customers Where They Are</p>
      </div>

      <div className="space-y-2">
        <AccordionItem title="1. Digital Presence Optimization">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Website optimization</li>
            <li>Mobile-first approach</li>
            <li>Social media integration</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="2. Physical Touchpoints Enhancement">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Retail experience (if applicable)</li>
            <li>Event presence</li>
            <li>Partner networks</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="3. Channel Integration">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Consistent messaging</li>
            <li>Cross-channel analytics</li>
            <li>Unified customer data</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}