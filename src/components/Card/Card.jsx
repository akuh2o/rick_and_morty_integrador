import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//prueba

//se borra el export default porque usamos connect
/*export default*/  function Card({id, name, status, species, gender, origin,image, onClose, addFav, removeFav, myFavorites, allCaracters}) {
   const [ isFav, setIsFav] = useState(false);


   // ver los cambios de myfavorites  por allcaracters, asi no pierde el corazon. ver el video al final
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin,image});
      }
   }

   const {pathname} = useLocation () //revisar que falta

   return (
      <div className={style.div}>
         <hr/>
         {pathname === '/home' && <button onClick={()=>onClose(id)}>X</button>}
         
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
         }


         <h2>{id}</h2>
         <Link to ={`/detail/${id}`}>
         <h2 className = {style.nombre}>{name}</h2>
         </Link>
         {/*<h2>{status}</h2>
         <h2>{species}</h2>
         <h2 className= {style.otra}>{gender}</h2>
   <h2 className= {style.otra}>{origin}</h2>*/}
         <img className = {style.image} src={image} alt='img not found.' />
         </div>
   );
}

// se suscribe o se despacha, si solo despacha, es (null, y el dispatch)
//export default connect('funcion-state', 'funcion-dispatch')(card)
function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card) //connect le da (null, mapDispatchToProps) a Card como Props

/* id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image} */