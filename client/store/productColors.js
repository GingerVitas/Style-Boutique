import axios from 'axios';

// Action Types
const LOAD_COLORS = 'LOAD_COLORS';

// Action Creators
const _loadColors = colors => ({type: LOAD_COLORS, colors});

// Thunks
export const loadColors = productName => {
  return async(dispatch) => {
    const colors = (await axios.get(`/api/colors/${productName}`)).data
    dispatch(_loadColors(colors))
  }
}

// Store

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_COLORS:
      return action.colors;
    default:
      return state
  }
}