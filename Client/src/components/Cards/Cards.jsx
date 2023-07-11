import React from 'react';
import Card from '../Card/Card'; 
import style from './Cards.module.css';

export default function Cards(props) {
   return (
   <div className={style.prueba}>
      {props.characters.map( Character => 
      <Card
         key={Character.id}
         id={Character.id}
         name={Character.name}
         status={Character.status}
         species={Character.species}
         gender={Character.gender}
         origin={Character.origin.name}
         image={Character.image}
         onClose={props.onClose}
      />)}
   </div>
   );
}
