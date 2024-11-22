import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

interface TimelinePhase {
  title: string;
  tasks: string[];
}

const initialPhases: TimelinePhase[] = [
  {
    title: "Phase 1: Foundation",
    tasks: [
      "Team structure establishment",
      "Technology assessment",
      "Baseline metrics definition"
    ]
  },
  {
    title: "Phase 2: Implementation",
    tasks: [
      "Channel optimization",
      "Content strategy execution",
      "Customer feedback system"
    ]
  },
  {
    title: "Phase 3: Optimization",
    tasks: [
      "Performance analysis",
      "Strategy refinement",
      "Scale successful initiatives"
    ]
  }
];

export function Timeline() {
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (task: string) => {
    const newCheckedTasks = new Set(checkedTasks);
    if (newCheckedTasks.has(task)) {
      newCheckedTasks.delete(task);
    } else {
      newCheckedTasks.add(task);
    }
    setCheckedTasks(newCheckedTasks);
  };

  const calculatePhaseProgress = (phaseTasks: string[]) => {
    const completedTasks = phaseTasks.filter(task => checkedTasks.has(task)).length;
    return (completedTasks / phaseTasks.length) * 100;
  };

  const totalProgress = (checkedTasks.size / (initialPhases.reduce((acc, phase) => acc + phase.tasks.length, 0))) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Implementation Timeline</h2>
        <p className="mt-2 text-lg text-gray-600">Progress Tracking</p>
      </div>

      <div className="w-full h-4 bg-gray-100 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${totalProgress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {initialPhases.map((phase, phaseIndex) => (
          <div
            key={phaseIndex}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
              
              <div className="w-full h-2 bg-gray-100 rounded-full mb-6">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${calculatePhaseProgress(phase.tasks)}%` }}
                />
              </div>

              <ul className="space-y-4">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    <button
                      onClick={() => toggleTask(task)}
                      className="flex items-start w-full text-left group"
                    >
                      <span className="flex-shrink-0 mt-0.5">
                        {checkedTasks.has(task) ? (
                          <CheckSquare className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                        )}
                      </span>
                      <span className={`ml-3 ${
                        checkedTasks.has(task)
                          ? 'text-gray-500 line-through'
                          : 'text-gray-700'
                      }`}>
                        {task}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}