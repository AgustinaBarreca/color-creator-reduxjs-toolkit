import React, { useState, createContext, useContext } from 'react';
import colorData from './data/color-data.json';
import { v4 } from 'uuid';
import { createSlice, configureStore } from '@reduxjs/toolkit';

export const colorContext = createContext(); //retorna dos componentes (Provider, Consumer)
export const useColor = () => useContext(colorContext);

const ColorProvider = ({ children }) => {
  //statefull  context component
  const [colors, setColors] = useState(colorData);

  //
  const onRemove = (id) => {
    const newColors = colors.filter((colors) => colors.id !== id);
    setColors(newColors);
  };

  const onCreate = (color) => {
    const newColor = {
      id: v4(),
      ...color,
    };

    setColors([...colors, newColor]);
  };

  return (
    <colorContext.Provider
      value={{
        colors,
        setColors,
        onRemove,
        // ,     onCreate
      }}
    >
      {children}
    </colorContext.Provider>
  );
};

export default ColorProvider;

