import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../features/tasksSlice';
import TaskCard from './TaskCard';

export default function Tasks() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      {tasks.length &&
        tasks.map((tasks) => (
          <TaskCard
            key={tasks.id}
            title={tasks.title}
            text={tasks.text}
            dueDate={tasks.dueDate}
            postDate={tasks.postDate}
          />
        ))}
    </div>
  );
}
