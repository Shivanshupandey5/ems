import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] text-white px-4 py-6 sm:px-6 md:px-10 overflow-x-hidden">
      <Header changeUser={props.changeUser} data={props.data} />
      <div className="mt-6 space-y-6">
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
