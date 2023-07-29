import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "../actions/actions"


const initialState = {
    favorites: [],
    allCharacters: []
}

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case ADDFAVORITE:
            return {
                ...state,
                favorites: action.payload,
                allCharacters: action.payload,
              };
            
        case DELETEFAVORITE:

        return {
            ...state,
            favorites: action.payload,
            allCharacters: action.payload,
          };
        
        case FILTER:
            
            return {
                ...state, favorites: state.allCharacters.filter((pj) => pj.gender === action.payload)
            }

        case ORDER:
            let copyOrder = state.favorites.sort((a,b)=>{
                if(action.payload === "A"){
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0
                }else{
                    if(a.id > b.id) return -1
                    if(a.id < b.id) return 1
                    return 0
                }
            })

            return {
                ...state, favorites: copyOrder
            }
    
        default:
            return {...state};
    }
}