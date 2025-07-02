import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    // 👇 Page Wrapper with max-width for center alignment and padding for responsiveness
    <div className="max-w-5xl mx-auto min-h-screen bg-[#1C1C1C] px-4 sm:px-8 md:px-10 py-6 space-y-8">

      {/* 🧑 Header Section with bottom border */}
      <div className="border-b border-gray-700 pb-4">
        <Header changeUser={props.changeUser} data={props.data} />
      </div>

      {/* 📊 Task Count Summary Cards - styled with padding, border, and shadow for separation */}
      <div className="bg-[#232323] p-6 rounded-xl shadow-inner border border-gray-800">
        <TaskListNumbers data={props.data} />
      </div>

      {/* 📦 Task Cards List Section - separated with heading and styled block */}
      <div className="bg-[#232323] p-6 rounded-xl shadow-inner border border-gray-800">
        <h2 className="text-white text-xl font-semibold mb-4">Your Tasks</h2>
        <TaskList data={props.data} />
      </div>

    </div>
  );
};

export default EmployeeDashboard;
