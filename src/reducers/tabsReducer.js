import {
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_WITH_AUTH_START,
  GET_DATA_WITH_AUTH_SUCCESS,
  GET_DATA_WITH_AUTH_FAILURE,
} from '../actions';

const initialState = {
  exampleVariable: 'Example',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_START:
      return {
        ...state,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
      };
    case GET_DATA_WITH_AUTH_START:
      return {
        ...state,
      };
    case GET_DATA_WITH_AUTH_SUCCESS:
      return {
        ...state,
      };
    case GET_DATA_WITH_AUTH_FAILURE:
      return {
        ...state,
      };
    default:
      if (state === initialState) return state;
      throw new Error(`${type} is not a valid type`);
  }
};

export default reducer;
