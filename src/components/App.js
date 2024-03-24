import React, { useEffect } from 'react';
import ColorList from './ColorList';
import '../style.css';
import FormColorControlled from './FormColorControlled';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { loadColors, toggleLoading } from '../actions';
import {requestDataColor} from '../thunk'

export default function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(requestDataColor());
  }, []);
  return (
    <>
      {loading && <h1>Loading</h1>}
      <ColorList />
      <FormColorControlled />
    </>
  );
}
