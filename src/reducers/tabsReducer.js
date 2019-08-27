import {
  EXAMPLE_TYPE,
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_SIGNUP_START,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
  GET_TABS_START,
  GET_TABS_SUCCESS,
  GET_TABS_FAILURE,
  ADD_TAB_START,
  ADD_TAB_SUCCESS,
  ADD_TAB_FAILURE,
  UPDATE_TAB_START,
  UPDATE_TAB_SUCCESS,
  UPDATE_TAB_FAILURE,
  REMOVE_TAB_START,
  REMOVE_TAB_SUCCESS,
  REMOVE_TAB_FAILURE,
} from '../actions';

import { dummyData } from '../dummyData';

const initialState = {
  exampleVariable: 'Example',
  tabs: dummyData,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE_TYPE:
      return {
        ...state,
        exampleVariable: payload,
      };
    case POST_LOGIN_START:
      return {
        ...state,
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
      }
    case POST_LOGIN_FAILURE:
      return {
        ...state,
      }
    case POST_SIGNUP_START:
      return {
        ...state,
      }
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
      }
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
      }
    case GET_TABS_START:
      return {
        ...state,
      }
    case GET_TABS_SUCCESS:
      return {
        ...state,
      }
    case GET_TABS_FAILURE:
      return {
        ...state,
      }
    case ADD_TAB_START:
      return {
        ...state,
      }
    case ADD_TAB_SUCCESS:
      return {
        ...state,
      }
    case ADD_TAB_FAILURE:
      return {
        ...state,
      }
    case UPDATE_TAB_START:
      return {
        ...state,
      }
    case UPDATE_TAB_SUCCESS:
      return {
        ...state,
      }
    case UPDATE_TAB_FAILURE:
      return {
        ...state,
      }
    case REMOVE_TAB_START:
      return {
        ...state,
      }
    case REMOVE_TAB_SUCCESS:
      return {
        ...state,
      }
    case REMOVE_TAB_FAILURE:
      return {
        ...state,
      }
    default:
      if (state === initialState) return state;
      throw new Error(`${type} is not a valid type`);
  }
};

export default reducer;
