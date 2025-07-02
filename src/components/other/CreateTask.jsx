import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = [...userData];
    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(taskObj);
        elem.taskCounts.newTask += 1;
      }
    });

    setUserData(data);

    // Clear form
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className="bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task Title */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-300 font-semibold mb-1">Task Title</label>
          <input
            type="text"
            placeholder="e.g. Make a UI design"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-sm rounded-lg p-3 placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-300 font-semibold mb-1">Date</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-sm rounded-lg p-3 placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        {/* Assign To */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-300 font-semibold mb-1">Assign To</label>
          <input
            type="text"
            placeholder="Employee name"
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-sm rounded-lg p-3 placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-300 font-semibold mb-1">Category</label>
          <input
            type="text"
            placeholder="design, dev, etc"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-sm rounded-lg p-3 placeholder:text-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        {/* Description (full-width) */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-300 font-semibold mb-1">Description</label>
          <textarea
            rows="4"
            placeholder="Enter detailed task description..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full border border-gray-700 bg-gray-800 text-sm rounded-lg p-3 placeholder:text-gray-400 resize-none focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        {/* Submit button (full-width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
