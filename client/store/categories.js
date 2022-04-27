import axios from 'axios';

const LOAD_CATS = 'LOAD_CATS';

const _loadCategories = (categories) => ({type:LOAD_CATS, categories});

export const loadCategories = () => {
  return async(dispatch) => {
    const categories = (await axios.get('/api/categories')).data;
    dispatch(_loadCategories(categories));
  }
};

export default (state=[], action) => {
  switch(action.type){
    case LOAD_CATS:
      return action.categories;
    default: 
      return state
  }
};
