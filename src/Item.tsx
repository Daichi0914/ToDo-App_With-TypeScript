import React, { useState } from 'react';

interface ItemProps {
  content: string;
  deleteToDo: Function;
  id: string;
}

const Item = ({ content, deleteToDo, id }: ItemProps) => {
  const [isDone, setIsDone] = useState(false);

  const textDecoration: object = {
    textDecoration: isDone ? 'line-through' : 'none',
  };

  const handleDelete = (): void => {
    deleteToDo(id);
  };

  return (
    <li>
      <input
        type='checkbox'
        onChange={(): void => {
          setIsDone(!isDone);
        }}
      />
      <span style={textDecoration}>{content}</span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
