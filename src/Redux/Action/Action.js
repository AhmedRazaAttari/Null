import axios from 'axios';
import { BASE_URL } from '../Base_url';
import { LOGIN_ACTION, SIGNUP_ACTION } from './types';

export const Loginaction = (data) => {

  console.log(data)


  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}loginUser`,
      data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
        },
      },
    );

    if (res.data.status) {
      dispatch({
        type: LOGIN_ACTION,
        userdata: res.data.data,

      });
      return res;
    } else {
      return res;
    }
  };
};



export const Signupaction = (data) => {

  console.log(data)


  return async (dispatch) => {
    const res = await axios.post(
      `${BASE_URL}signup`,
      data,
      {

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Auth: 'c7e1249ffc03eb9ded908c236bd1996d',
        },
      },
    );
    console.log(res)
    if (res.data.status) {
      dispatch({
        type: SIGNUP_ACTION,
        signdata: res.data.data,

      });
      return res;
    } else {
      return res;
    }
  };
};