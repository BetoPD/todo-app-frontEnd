import React from 'react';

export default function TaskCard({
  title,
  text,
  postDate,
  dueDate,
  id,
  handleClick,
}) {
  return (
    <div className="flex-col m-5 h-300">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="flex items-center justify-between">
        <p>Posted on: {postDate}</p>
        <p>Finishes on: {dueDate}</p>
        <button onClick={(e) => handleClick(e, id)}>Finshed</button>
      </div>
    </div>
  );
}
