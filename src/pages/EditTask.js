import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeTask, getTask } from '../features/tasksSlice';

export default function EditTask() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const { individualTask, isLoading } = useSelector((state) => state.task);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    dispatch(getTask({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    setTitle(individualTask.title);
    setText(individualTask.text);
    setDueDate(individualTask.dueDate);
  }, [individualTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDate = '2024-03-05';
    console.log({ id, title, text, dueDate, postDate });
    dispatch(changeTask({ id, title, text, dueDate, postDate }));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <form className="bg-zinc-800 p-10 rounded-md" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="text"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            placeholder="date"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-green-500 text-white px-2 py-1 rounded">
            Edit
          </button>
        </form>
      )}
    </div>
  );
}
