import React, { useState, FormEvent } from 'react';

interface FormProps {
  addToDo: Function;
}

const Form = ({ addToDo }: FormProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    if (value === '' || value === undefined) {
      return alert('文字を入力して下さい。');
    }
    addToDo(value);

    setValue('');
  };

  return (
    <form id='clear' onSubmit={handleSubmit}>
      ToDo:
      <input
        type='text'
        onChange={e => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button>送信</button>
    </form>
  );
};

export default Form;
