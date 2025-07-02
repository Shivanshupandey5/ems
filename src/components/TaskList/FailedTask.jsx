import React from 'react';

const FailedTask = ({ data }) => {
  return (
<div className="flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
      {/* Header: category + date */}
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full text-white">
          {data.category}
        </span>
        <span className="text-xs text-black/80">{data.taskDate}</span>
      </div>

      {/* Task Title */}
      <h2 className="text-lg font-semibold line-clamp-2">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm text-black/90 line-clamp-4">{data.taskDescription}</p>

      {/* Failed Button */}
      <div className="pt-3">
        <button className="w-full bg-red-600 hover:bg-red-700 transition-all text-xs font-semibold py-2 px-4 rounded-md text-white">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
