import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const InicioHandler = () => {
  //redux
  const dispatch = useDispatch();
  const { state } = useSelector(state => state)

  return state;
}
