import React from 'react';
import { useInput } from '../hook/colorService';
import { colorActions } from '../slices';
import { useDispatch } from 'react-redux';

const FormColorControlled = () => {
  const dispatch = useDispatch();
  //const { onCreate } = useColor();
  const [propsTitle, resetTitle] = useInput('');
  const [propsColor, resetColor] = useInput('#000000');

  const onCreateColor = (e) => {
    console.log('estes es mi form');
    e.preventDefault();
    const newColor = {
      title: propsTitle.value,
      color: propsColor.value,
      feedback: 0,
    };
    dispatch(colorActions.addColor(newColor));
    resetTitle('');
    resetColor('');
  };

  return (
    <form onSubmit={(e) => onCreateColor(e)}>
      <label htmlFor="title">Title:</label>
      <input id="title" type="text" {...propsTitle} />
      <label htmlFor="color">Color:</label>
      <input id="color" type="color" {...propsColor} />
      <button>ADD</button>
    </form>
  );
};

export default FormColorControlled;
