import React from 'react';

interface Task {
  title: string;
}

interface Phase {
  title: string;
  tasks: string[];
  progress: number;
}

interface ImplementationProgressProps {
  phases: Phase[];
}

export function ImplementationProgress({ phases }: ImplementationProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">90-Day Implementation Progress</h2>
      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">{phase.title}</h3>
              <span className="text-sm text-gray-500">{phase.progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${phase.progress}%` }}
              ></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {phase.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <input
                    type="checkbox"
                    checked={phase.progress === 100}
                    readOnly
                    className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-3 text-sm text-gray-600">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}