import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { changeTask, getTask } from '../features/tasksSlice';
import { getDate } from '../utils/date';
import { format } from 'date-fns';

export default function EditTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { individualTask, isLoading } = useSelector((state) => state.task);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    dispatch(getTask({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    setTitle(individualTask.title || '');
    setText(individualTask.text || '');
    setDueDate(
      individualTask.dueDate
        ? format(new Date(individualTask.dueDate), 'yyyy-MM-dd')
        : ''
    );
  }, [individualTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDate = getDate();
    dispatch(changeTask({ id, title, text, dueDate, postDate }));
    navigate('/home');
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
