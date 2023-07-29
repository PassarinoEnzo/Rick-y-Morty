import axios from "axios"


export const ADDFAVORITE = "ADD"
export const DELETEFAVORITE = "DELETE"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


export function addFavorite(character){
  const endpoint = "http://localhost:3001/favorites/";

  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character); // Enviamos character por body
      const { data } = response;
      return dispatch({
        type: ADDFAVORITE,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  }
}

export const deleteFavorite = (id) => {
    const endpoint = "http://localhost:3001/favorites/" + id;

    return async (dispatch) => {
      try {
        const response = await axios.delete(endpoint)
        const { data } = response
      return dispatch({
        type: DELETEFAVORITE,
        payload: data,
      });
      } catch (error) {
        alert(error.message)
      }
    };
  };

export function filterCards(gender){
    return { type: FILTER, payload: gender }
}

export function orderCards(order){
    return { type: ORDER, payload: order }
}