import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './SelectedFruit.scss'
const SelectedFruit = () => {
  const fruit = useSelector(state => state.selectedFruit);
  const dispatch = useDispatch();
  return <div className="selected-fruit-container">
    <Link to="/" className="back-button">Back</Link>
     <h1>Fruit Info</h1>
     <section className="fruit-info">
       <img src={fruit.image} alt="fruit"></img>
       <div className="fruit-name-section">
         <h2>Fruit Name:</h2>
         <div style={{display:"flex" , alignItems:"center"}} className="space-left">
         <h2>{fruit.name}</h2><button onClick={()=>dispatch({type:'TOGGLE_FAVORITE' , id:fruit.id})}>Add To Favorites</button>
         </div>
       </div>
     </section>
     <h2>Overview:</h2>
     <section className="details-section">
<p>Origin : <span>{fruit.origin}</span></p>
<p>Year Of Development : <span>{fruit.year}</span></p>
     </section>

     <h2>Nutrition:</h2>
     <section className="details-section">

      {fruit.nutrition.map(el => <p>{el.title} <span>{el.value}</span></p>)}
     </section>
  </div>
};

export default SelectedFruit;
