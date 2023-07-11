import React, { useState } from "react";
import { connect , useDispatch , useSelector} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";

function Favorites(){
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const myFavorites = useSelector (state => state.myFavorites)


    const handleOrder = (e) =>{
        dispatch(orderCards(e.target.value))
        setAux (!aux); // niega el estado y lo cambia.
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }


    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div>{
            myFavorites.map((char)=>{
                return( 
                    <Card
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    gender={char.gender}
                    origin={char.origin?.name}
                    image={char.image}
                    onClose={char.onClose}
                    />)
                })
            }</div>
        </div>
    )
}

// chequear porque cambiamos el connect por useSelector
function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites

    }
}

export default Favorites;

//export default connect(mapStateToProps)(Favorites)

