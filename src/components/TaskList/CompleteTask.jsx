import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-[320px] p-5 bg-blue-500 text-white rounded-xl shadow-md space-y-3 transition-all duration-200">
      {/* Top: Category & Date */}
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-white/80">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold line-clamp-2">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm text-white/90 line-clamp-4">{data.taskDescription}</p>

      {/* Completed Button */}
      <div className="pt-3">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all text-xs font-semibold py-2 px-4 rounded-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
