import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-5 bg-purple-400 rounded-xl">
      {/* Top: category + date */}
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-white/80">{data.taskDate}</span>
      </div>

      {/* Task title */}
      <h2 className="text-lg font-semibold line-clamp-2">{data.taskTitle}</h2>

      {/* Task description */}
      <p className="text-sm text-white/90 line-clamp-4">{data.taskDescription}</p>

      {/* Accept button */}
      <div className="pt-3">
        <button className="bg-emerald-700 hover:bg-emerald-800 transition-all text-xs font-semibold py-1.5 px-4 rounded-md">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
