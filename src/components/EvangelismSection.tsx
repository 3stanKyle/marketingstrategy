import React from 'react';
import { AccordionItem } from './Accordion';
import { Quote } from './Quote';

export function EvangelismSection() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Evangelism: Creating Brand Advocates</h1>
        <p className="mt-2 text-lg text-gray-600">Turning Customers into Growth Engines</p>
      </div>

      <Quote
        text="Marketing is not just about promoting products; it's about creating experiences that turn customers into evangelists."
        author="Brand Strategist"
      />

      <div className="space-y-2">
        <AccordionItem title="1. Customer Success Program">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Success story documentation</li>
            <li>Testimonial collection</li>
            <li>Case study development</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="2. Employee Engagement">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Internal brand ambassadors</li>
            <li>Training and empowerment</li>
            <li>Recognition programs</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="3. Community Building">
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>User-generated content</li>
            <li>Social proof integration</li>
            <li>Loyalty program development</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}