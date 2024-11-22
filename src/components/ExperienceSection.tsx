import React from 'react';
import { AccordionItem } from './Accordion';
import { Quote } from './Quote';

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Experience: Beyond Product</h1>
        <p className="mt-2 text-lg text-gray-600">Creating Memorable Customer Journeys</p>
      </div>

      <Quote
        text="The way we market has fundamentally shifted from pushing products to creating memorable experiences."
        author="Marketing Expert"
      />

      <div className="space-y-2">
        <AccordionItem title="1. Immersive Brand Storytelling">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Emotional connection with target audience</li>
            <li>Consistent narrative across touchpoints</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="2. Customer Journey Optimization">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Seamless interactions</li>
            <li>Personalization at scale</li>
            <li>Data-driven experience improvements</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="3. 'Wow Moments' Integration">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Surprise and delight elements</li>
            <li>Post-purchase engagement</li>
            <li>Community building initiatives</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}