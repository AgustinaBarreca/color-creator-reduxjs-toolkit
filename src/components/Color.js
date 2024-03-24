import React from 'react';
import RatingStar from './RatingStar';
import { FaTrash } from 'react-icons/fa';
import { colorActions } from '../slices';
import { useDispatch, useSelector } from 'react-redux';

const Color = ({ title, color, feedback, id }) => {
  const colorcitos = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div>
      <FaTrash onClick={() => dispatch(colorActions.removeColor(id))} />
      <h1>{title}</h1>
      <div
        style={{
          width: 'auto',
          height: '50px',
          backgroundColor: color,
        }}
      ></div>
      <RatingStar selectedStarsInit={feedback} />
    </div>
  );
};

export default Color;
