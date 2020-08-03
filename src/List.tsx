import React from 'react';
import Item from './Item';
import { ToDo } from './App';

import './sass/list.styles.scss';

interface ListProps {
  toDos: ToDo[];
  deleteToDo: (id: string) => void;
}

const List = ({ toDos, deleteToDo }: ListProps) => {
  return (
    <ul className='list'>
      {toDos.map((toDo, index) => {
        return (
          <Item content={toDo.content} key={index} deleteToDo={deleteToDo} id={toDo.id} />
        );
      })}
    </ul>
  );
};

export default List;
