import React from 'react';

export default function TaskCard({
  title,
  text,
  postDate,
  dueDate,
  id,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="bg-zinc-500 flex-col p-10 m-10 rounded-md">
      <div className="flex justify-between items-center pl-10">
        <h1>{title}</h1>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={(e) => handleEdit(e, id)}
        >
          Edit
        </button>
      </div>
      <div className="bg-zinc-600 flex items-center rounded-md m-10">
        <p>{text}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Posted on: {postDate}</p>
        <p>Finishes on: {dueDate}</p>
        <button
          onClick={(e) => handleDelete(e, id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Finished
        </button>
      </div>
    </div>
  );
}
