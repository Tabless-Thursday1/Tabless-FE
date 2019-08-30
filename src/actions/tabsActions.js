import Axios from 'axios';

import { axiosWithAuth } from '../utils';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

const mainUrl = 'https://exampleurl.com';

export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';
export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';
export const POST_SIGNUP_START = 'POST_SIGNUP_START';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';
export const GET_TABS_START = 'GET_TABS_START';
export const GET_TABS_SUCCESS = 'GET_TABS_SUCCESS';
export const GET_TABS_FAILURE = 'GET_TABS_FAILURE';
export const ADD_TAB_START = 'ADD_TAB_START';
export const ADD_TAB_SUCCESS = 'ADD_TAB_SUCCESS';
export const ADD_TAB_FAILURE = 'ADD_TAB_FAILURE';
export const UPDATE_TAB_START = 'UPDATE_TAB_START';
export const UPDATE_TAB_SUCCESS = 'UPDATE_TAB_SUCCESS';
export const UPDATE_TAB_FAILURE = 'UPDATE_TAB_FAILURE';
export const REMOVE_TAB_START = 'REMOVE_TAB_START';
export const REMOVE_TAB_SUCCESS = 'REMOVE_TAB_SUCCESS';
export const REMOVE_TAB_FAILURE = 'REMOVE_TAB_FAILURE';

export const exampleFunction = () => ({
  type: EXAMPLE_TYPE,
  payload: 'Example Payload',
});

const buildThunkFactory = ({ restFunction }) => ({
  restCallType, start, success, failure, url, query,
}) => ({ data }) => async (dispatch) => {
  dispatch({ type: start });
  try {
    const response = await restFunction()[restCallType](`${url}${query}`, data);
    dispatch({ type: success, payload: response.data });
    return { error: false, response };
  } catch (error) {
    dispatch({ type: failure, payload: error.response });
    return { error: true, response: error.response };
  }
};

const buildAxiosThunk = buildThunkFactory({ restFunction: () => Axios });
const buildAxiosWithAuthThunk = buildThunkFactory({ restFunction: axiosWithAuth });

export const postLogin = buildAxiosThunk({
  restCallType: POST,
  start: POST_LOGIN_START,
  success: POST_LOGIN_SUCCESS,
  failure: POST_LOGIN_FAILURE,
  url: mainUrl,
  query: '/login',
});

export const postSignup = buildAxiosThunk({
  restCallType: POST,
  start: POST_SIGNUP_START,
  success: POST_SIGNUP_SUCCESS,
  failure: POST_SIGNUP_FAILURE,
  url: mainUrl,
  query: '/signup',
});

export const getTabs = buildAxiosWithAuthThunk({
  restCallType: GET,
  start: GET_TABS_START,
  success: GET_TABS_SUCCESS,
  failure: GET_TABS_FAILURE,
  url: mainUrl,
  query: '/tabs',
});

export const addTab = buildAxiosWithAuthThunk({
  restCallType: POST,
  start: ADD_TAB_START,
  success: ADD_TAB_SUCCESS,
  failure: ADD_TAB_FAILURE,
  url: mainUrl,
  query: '/tabs',
});

export const updateTab = buildAxiosWithAuthThunk({
  restCallType: PUT,
  start: UPDATE_TAB_START,
  success: UPDATE_TAB_SUCCESS,
  failure: UPDATE_TAB_FAILURE,
  url: mainUrl,
  query: '/tabs',
});

export const removeTab = buildAxiosWithAuthThunk({
  restCallType: DELETE,
  start: REMOVE_TAB_START,
  success: REMOVE_TAB_SUCCESS,
  failure: REMOVE_TAB_FAILURE,
  url: mainUrl,
  query: '/tabs',
});
