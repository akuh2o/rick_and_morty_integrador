import {ADD_FAV, REMOVE_FAV} from './action_types';
import axios from 'axios';

const URL = 'http://localhost:3001/rickandmorty/fav'

//Ver el video dijo que se habia equivocado en algo aca, 2:20hs

export const addFav = (character) => {
    return async function (dispatch){
        try {
            const { data } = await axios.post(`${URL}`, character)
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);            
        }
        //await axios.post(`${URL}`, character)
        /*.then(({data})=>{
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        })*/
    }
    /*return{
        type: ADD_FAV,
        payload: character
    }*/
}

export const removeFav = (id) => {
    return async (dispatch) => {
        try{
        const {data}= await axios.delete(`${URL}/${id}`)
        return dispatch ({
            type:REMOVE_FAV,
            payload:data
        })
    }catch (error){
        console.log(error);
    }
        /*axios.delete(`${URL}/${id}`)
        .then(({data})=>{
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        })*/
    }
}
/*({
    
    type: REMOVE_FAV,
    payload: id
})*/

export const filterCards = (gender) =>{
    return{
        type: "FILTER",
        payload: gender
    }
}

export const orderCards= (order) =>{
    return {
        type: "ORDEN",
        payload: order
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