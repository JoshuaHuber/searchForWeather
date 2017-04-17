import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data; this is the same as below
      return [ action.payload.data, ...state]; //[city, city, city]
    default:

  }
    return state;
}
