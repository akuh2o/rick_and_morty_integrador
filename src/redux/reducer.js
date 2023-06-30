import {ADD_FAV, REMOVE_FAV} from './actions/action_types';

const initialState = {
    myFavorites:[],
    allCaracters:[], 
}

function reducer (state = initialState,action){
    switch(action.type){
        case ADD_FAV:
            return{...state,
                myFavorites:[...state.myFavorites, action.payload],
                allCaracters:[...state.allCaracters, action.payload]
            }
        case REMOVE_FAV:
            return{...state, 
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload),
                allCaracters: state.myFavorites.filter(char => char.id !== action.payload) //verrrrrr que pasa si esto no esta
            }
        case 'FILTER':
            let copy2 = [...state.allCaracters];
            let filterGender = copy2.filter((character)=>{
                return character.gender === payload
            })
            return{
                ...state,
                myFavorites: filterGender,
            }
        default:
            return {...state};
    }
}

export default reducer;