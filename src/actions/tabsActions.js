import Axios from 'axios';

import { axiosWithAuth } from '../utils';

const GET = 'get';
// const POST = 'post';
// const PUT = 'put';
// const DELETE = 'delete';

export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_DATA_WITH_AUTH_START = 'GET_DATA_WITH_AUTH_START';
export const GET_DATA_WITH_AUTH_SUCCESS = 'GET_DATA_WITH_AUTH_SUCCESS';
export const GET_DATA_WITH_AUTH_FAILURE = 'GET_DATA_WITH_AUTH_FAILURE';
export const EXAMPLE_TYPE = 'EXAMPLE_TYPE';

const buildThunkFactory = ({ restObject }) => ({
  start,
  success,
  failure,
  restCallType,
}) => ({ url, query, data }) => (dispatch) => {
  (async () => {
    dispatch({ type: start });
    try {
      const response = await restObject[restCallType](`${url}${query}`, data);
      dispatch({ type: success, payload: response.data });
    } catch (error) {
      dispatch({ type: failure, payload: error.response });
    }
  })();
};

const buildAxiosThunk = buildThunkFactory({ restObject: Axios });
export const getData = buildAxiosThunk({
  start: GET_DATA_START,
  success: GET_DATA_SUCCESS,
  failure: GET_DATA_FAILURE,
  restCallType: GET,
});

const buildAxiosWithAuthThunk = buildThunkFactory({ restObject: axiosWithAuth() });
export const getDataWithAuth = buildAxiosWithAuthThunk({
  start: GET_DATA_WITH_AUTH_START,
  success: GET_DATA_WITH_AUTH_SUCCESS,
  failure: GET_DATA_WITH_AUTH_FAILURE,
  restCallType: GET,
});

export const exampleFunction = () => ({
  type: EXAMPLE_TYPE,
  payload: 'Example Payload',
});
