import React, { useState } from 'react';
import shortid from 'shortid';
import Form from './Form';
import List from './List';

export interface ToDo {
  content: string;
  id: string;
}

const App = () => {
  const [toDos, setToDos] = useState<ToDo[]>([
    {
      content: '課題をする',
      id: shortid.generate(),
    },
    {
      content: '洗濯をする',
      id: shortid.generate(),
    },
    {
      content: '電話をする',
      id: shortid.generate(),
    },
  ]);

  const addToDo = (content: string): void => {
    setToDos([
      ...toDos,
      {
        content: content,
        id: shortid.generate(),
      },
    ]);
  };

  const deleteToDo = (id: string): void => {
    const copyToDos = toDos.slice();
    alert(id + ' is deleted!!');

    const deleteIndex: number = copyToDos.findIndex(toDo => {
      return toDo.id === id;
    });

    copyToDos.splice(deleteIndex, 1);
    setToDos(copyToDos);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <Form addToDo={addToDo} />
      <List toDos={toDos} deleteToDo={deleteToDo} />
    </>
  );
};

export default App;
