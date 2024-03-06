import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getTasks, removeTask } from '../features/tasksSlice';
import TaskCard from './TaskCard';

export default function Tasks() {
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.task);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(removeTask({ id }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDate = '2024-03-05';
    dispatch(addTask({ title, text, dueDate, postDate }));
    setTitle('');
    setText('');
    setDueDate('');
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
            handleClick={handleClick}
          />
        ))
      )}
      <div className="bg-zinc-800 w-full p-10 m-10 rounded-md">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className=" bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="text"
            className=" bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            placeholder="date"
            className=" bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <button type="submit">Post Task</button>
        </form>
      </div>
    </div>
  );
}
