import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

export default function TaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDate = '2024-03-05';
    dispatch(addTask({ title, text, dueDate, postDate }));
    setTitle('');
    setText('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center">
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
  );
}
