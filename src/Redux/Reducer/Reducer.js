import { LOGIN_ACTION, SIGNUP_ACTION } from '../Action/types';

const initialState = {
  job: null,
  jobs: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_ACTION:
      return {
        ...state,
        job: action.userdata,
      };
    case SIGNUP_ACTION:
      return {
        ...state,
        jobs: action.signdata
      }
    default:

      return state;
  }
};
