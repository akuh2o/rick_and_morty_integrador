import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail () {
    const { id } = useParams ()
    const [charDetail, setCharDetail] = useState ({});
    
    useEffect( ()=> {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)/*`https://rickandmortyapi.com/api/character/${id}`//en un principio sacabamos de aca la info*/
        .then(({ data }) => {
           if (data.name) {
              setCharDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharDetail({});
     }, [id]); //el chatch evita el error

    return (
    <div>
         <h4>{charDetail.id}</h4>
         <h4>{charDetail.name}</h4>
         <h4>{charDetail.status}</h4>
         <h4>{charDetail.species}</h4>
         <h4>{charDetail.gender}</h4>
         <h4>{charDetail.origin?.name}</h4>
         <img src={charDetail.image}/>
    </div>
    )
};

export default Detail;