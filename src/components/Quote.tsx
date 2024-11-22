import React from 'react';

interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  return (
    <blockquote className="relative p-6 my-8 bg-gradient-to-r from-indigo-50 to-white rounded-lg">
      <div className="relative z-10">
        <p className="text-lg italic text-gray-800 mb-2">"{text}"</p>
        <footer className="text-sm text-gray-600">
          - {author}
        </footer>
      </div>
      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 rounded-l-lg"></div>
    </blockquote>
  );
}