import axios from "axios";
import history from "../history";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
const UPDATE_AUTH = "UPDATE_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });
const updateAuth = (auth) => ({ type: UPDATE_AUTH, auth });
/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token
      },
    });
    console.log('user signed in!!', res.data)
    return dispatch(setAuth(res.data))
  }
};

export const updateUser = (auth) => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const updatedUser = (
        await axios.put("/auth/me", auth, {
          headers: {
            authorization: token,
          },
        })
      ).data;
      return dispatch(updateAuth(updatedUser));
    }
  } catch (error) {
    console.log(error);
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push('/logout')
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case UPDATE_AUTH:
      return action.auth;
    default:
      return state;
  }
}
