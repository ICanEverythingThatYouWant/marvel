import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_PERSON_FROM_FAVORITE:

      return {
        ...state,
        favorites: [...state.favorites.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
