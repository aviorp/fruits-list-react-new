import React from 'react';
import { useSelector } from 'react-redux';
import FruitList from '../../components/FruitList/FruitList';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites)
  return <FruitList fruits={favorites}></FruitList>;
};

export default Favorites;
