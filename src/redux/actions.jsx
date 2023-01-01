
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CHANGE_USER = "CHANGE_USER";
export const FILTER_SEARCH = "FILTER_SEARCH";
export const SEARCH_NAME = "SEARCH_NAME";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER_USERS = "FILTER_USERS";




export const getAllUsers = (payload) => ({ type: GET_ALL_USERS, payload });
export const addFavoriteAction = (payload) => ({ type: ADD_FAVORITE, payload });
export const removeFavoriteAction = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

export const filterUsersAction = (payload) => ({ type: FILTER_USERS, payload });
export const searchFilterAction = (payload) => ({
  type: FILTER_SEARCH,
  payload,
});
export const changeUserAction = (payload) => ({
  type: CHANGE_USER,
  payload,
});