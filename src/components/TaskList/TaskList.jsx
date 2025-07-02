import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full overflow-x-auto mt-10 pb-3"
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
