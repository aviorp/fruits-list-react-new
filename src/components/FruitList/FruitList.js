import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './FruitList.scss';
const FruitList = ({fruits}) => {
  const dispatch = useDispatch();
  return(
       <ul  className="fruit-list-container">
        {fruits.map(fruit => <Link to={'/selected-fruit/'+fruit.name} onClick={() => dispatch({type:'SELECT_FRUIT' , fruit})}>{fruit.name}<span> > </span></Link>)}
       </ul>
  );
};

export default FruitList;
