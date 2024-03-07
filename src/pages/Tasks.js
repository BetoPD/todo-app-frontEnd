import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, removeTask } from '../features/tasksSlice';
import TaskCard from './TaskCard';
import { useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm';

export default function Tasks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, isLoading } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(removeTask({ id }));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    navigate(`/home/edit/${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading Tasks</h1>
      ) : (
        tasks.map((tasks) => (
          <TaskCard
            key={tasks.id}
            title={tasks.title}
            text={tasks.text}
            dueDate={tasks.dueDate}
            postDate={tasks.postDate}
            id={tasks.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      )}
      <div className="bg-zinc-800 p-10 m-10 rounded-md">
        <TaskForm />
      </div>
    </div>
  );
}
