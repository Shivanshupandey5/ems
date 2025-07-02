import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-[320px] p-5 bg-gray-800 text-white rounded-xl shadow-md space-y-3 transition-all duration-200">
      {/* Top section: category and date */}
      <div className="flex justify-between items-center">
        <span className="bg-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      {/* Task title */}
      <h2 className="text-lg font-semibold line-clamp-2">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm text-gray-300 line-clamp-4">{data.taskDescription}</p>

      {/* Action buttons */}
      <div className="flex justify-between items-center pt-3">
        <button className="bg-green-600 hover:bg-green-700 transition-all text-xs font-medium py-1.5 px-3 rounded-md">
          Mark as Completed
        </button>
        <button className="bg-red-600 hover:bg-red-700 transition-all text-xs font-medium py-1.5 px-3 rounded-md">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
