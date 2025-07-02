import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
        id="tasklist"
        className="mt-10 flex flex-col gap-6 w-full max-h-[70vh] overflow-y-auto pr-2"
        >

      <div className="flex flex-nowrap gap-4 px-2 min-w-[700px] sm:min-w-full">
        {data.tasks.map((elem, idx) => {
          if (elem.active) return <AcceptTask key={idx} data={elem} />;
          if (elem.newTask) return <NewTask key={idx} data={elem} />;
          if (elem.completed) return <CompleteTask key={idx} data={elem} />;
          if (elem.failed) return <FailedTask key={idx} data={elem} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default TaskList;
