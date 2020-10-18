import React from 'react';
import { useSelector } from 'react-redux';
import FruitList from '../../components/FruitList/FruitList';

const Home = () => {
  const fruits = useSelector(state => state.fruits);
  return <FruitList fruits={fruits}></FruitList> ;
};

export default Home;
