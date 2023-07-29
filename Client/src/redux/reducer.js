import {ADD_FAV, REMOVE_FAV} from './actions/action_types';

const initialState = {
    myFavorites:[],
    allCaracters:[], 
}

function reducer (state = initialState,action){
    switch(action.type){
        case ADD_FAV:
            return{...state,
                myFavorites: action.payload //[...state.myFavorites, action.payload],
                //allCaracters:[...state.allCaracters, action.payload]
            }
        case REMOVE_FAV:
            return{...state, 
                myFavorites: action.payload //state.myFavorites.filter(char => char.id !== action.payload),
                //allCaracters: state.myFavorites.filter(char => char.id !== action.payload) //verrrrrr que pasa si esto no esta
            }
        case 'FILTER':
            let copy2 = [...state.allCaracters];
            let filterGender = copy2.filter((character)=>{
                return character.gender === action.payload //aca hice cambio action.payload
            })
            return{
                ...state,
                myFavorites: filterGender,
            }
        case "ORDER":
            let copy3 = [...state.allCaracters];
            return {
                ...state,
                myFavorites: copy3.sort((a,b)=>{
                    return action.payload === "A"? a.id - b.id :  b.id - a.id //aca hice cambio en action.payload
                })
            }
        default:
            return {...state};
    }
}

export default reducer;