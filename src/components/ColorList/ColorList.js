import React from 'react';
import Color from '../Color';
import { useSelector } from 'react-redux';

export const ColorList = () => {
  const colors = useSelector((state) => state.color.colors);
  console.log(colors, 'colors');
  if (!colors.length) return <p> dont have colors! </p>;
  return (
    <ul>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          // onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
