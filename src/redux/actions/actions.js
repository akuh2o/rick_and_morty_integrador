import {ADD_FAV, REMOVE_FAV} from './action_types';

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => ({
    type: REMOVE_FAV,
    payload: id
})

export const filterCards = (gender) =>{
    return{
        type: "FILTER",
        payload: gender
    }
}

export const orderCards= (order) =>{
    return {
        type: "ORDEN",
        payload: orden
    }
}

// dos formas para lo mismo
// si fueran asincronas seria
// export const getFav = () => {
  /*  return function(dispatch){
        axios()
        .then()
        retunr dispatch 'etc etc'
    }
} */