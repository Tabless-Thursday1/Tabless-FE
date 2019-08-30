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
  sendingSignup: false,
  errorSigningUp: false,
  sendingLogin: false,
  errorLoggingIn: false,
  loadingTabs: false,
  errorLoadingTabs: false,
  sendingTabData: false,
  errorSendingTab: false,
  deletingTab: false,
  errorDeletingTab: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE_TYPE:
      return {
        ...state,
        exampleVariable: payload,
      };
    case POST_SIGNUP_START:
      return {
        ...state,
        sendingSignup: true,
        errorSigningUp: false,
      };
    case POST_SIGNUP_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        sendingSignup: false,
        errorSigningUp: false,
      };
    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        sendingSignup: false,
        errorSigningUp: true,
      };
    case POST_LOGIN_START:
      return {
        ...state,
        sendingLogin: true,
        errorLoggingIn: false,
      };
    case POST_LOGIN_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        sendingLogin: false,
        errorLoggingIn: false,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        sendingLogin: false,
        errorLoggingIn: true,
      };
    case GET_TABS_START:
      return {
        ...state,
        loadingTabs: true,
        errorLoadingTabs: false,
      };
    case GET_TABS_SUCCESS:
      return {
        ...state,
        loadingTabs: false,
        errorLoadingTabs: false,
        tabs: payload,
      };
    case GET_TABS_FAILURE:
      return {
        ...state,
        loadingTabs: false,
        errorLoadingTabs: true,
      };
    case ADD_TAB_START:
      return {
        ...state,
        sendingTabData: true,
        errorSendingTab: false,
      };
    case ADD_TAB_SUCCESS:
      return {
        ...state,
        sendingTabData: false,
        errorSendingTab: false,
        tabs: [...state.tabs, payload],
      };
    case ADD_TAB_FAILURE:
      return {
        ...state,
        sendingTabData: false,
        errorSendingTab: true,
      };
    case UPDATE_TAB_START:
      return {
        ...state,
        sendingTabData: true,
        errorSendingTab: false,
      };
    case UPDATE_TAB_SUCCESS:
      return {
        ...state,
        sendingTabData: false,
        errorSendingTab: false,
        tabs: state.tabs.map((tab) => (tab.id === payload.id ? payload : tab)),
      };
    case UPDATE_TAB_FAILURE:
      return {
        ...state,
        sendingTabData: false,
        errorSendingTab: true,
      };
    case REMOVE_TAB_START:
      return {
        ...state,
        deletingTab: true,
        errorDeletingTab: false,
      };
    case REMOVE_TAB_SUCCESS:
      return {
        ...state,
        deletingTab: false,
        errorDeletingTab: false,
        tabs: state.tabs.filter((tab) => tab.id !== payload.id),
      };
    case REMOVE_TAB_FAILURE:
      return {
        ...state,
        deletingTab: false,
        errorDeletingTab: true,
      };
    default:
      if (state === initialState) return state;
      throw new Error(`${type} is not a valid type`);
  }
};

export default reducer;
