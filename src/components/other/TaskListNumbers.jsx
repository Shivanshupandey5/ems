import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <div className="flex min-w-[700px] sm:min-w-full gap-4 px-2">
        {/* New Task */}
        <div className="flex-shrink-0 rounded-xl w-48 py-6 px-5 bg-blue-400">
          <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
          <h3 className="text-lg mt-1 font-medium">New Task</h3>
        </div>

        {/* Completed Task */}
        <div className="flex-shrink-0 rounded-xl w-48 py-6 px-5 bg-green-400">
          <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
          <h3 className="text-lg mt-1 font-medium">Completed</h3>
        </div>

        {/* Active Task */}
        <div className="flex-shrink-0 rounded-xl w-48 py-6 px-5 bg-yellow-400">
          <h2 className="text-3xl text-black font-bold">{data.taskCounts.active}</h2>
          <h3 className="text-lg mt-1 text-black font-medium">Accepted</h3>
        </div>

        {/* Failed Task */}
        <div className="flex-shrink-0 rounded-xl w-48 py-6 px-5 bg-red-400">
          <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
          <h3 className="text-lg mt-1 font-medium">Failed</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
