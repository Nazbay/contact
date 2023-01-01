import { ADD_FAVORITE, FILTER_USERS,GET_ALL_USERS, DELETE_FAVORITE, FILTER_SEARCH, CHANGE_USER  } from "./actions";

const defaultState = {
  users: [],
  favorite: [],
  searchName: "",
};
const SortAsc = (x, y, key) => {
  if (x[key] < y[key]) {
    return -1;
  }
  if (x[key] > y[key]) {
    return 1;
  }
  return 0;
};

const SortDesc = (x, y, key) => {
  if (x[key] > y[key]) {
    return -1;
  }
  if (y[key] > x[key]) {
    return 1;
  }
  return 0;
};

const filterUsers = (users, filterName) => {
  switch (filterName) {
    case "filterByAsc":
      return users.sort((x, y) => {
        return SortAsc(x, y, "firstName");
      });
    case "filterByDesc":
      return users.sort((x, y) => {
        return SortDesc(x, y, "firstName");
      });
    default:
      return users;
  }
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      action.payload.map((user) => {
        user.complete = false;
      });
      return { ...state, users: [...action.payload] };
    case ADD_FAVORITE:
      const addFavorite = () => {
        const newUser = Object.defineProperty(action.payload.user, "complete", {
          value: true,
        });
        const userId = action.payload.user.id;
        const hasId = state.favorite.find((user) => user.id === userId);
        if (hasId === undefined) {
          return [...state.favorite, newUser];
        }
        if (hasId !== undefined) {
          return [...state.favorite];
        }
      };
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              complete: true,
            };
          }
          return user;
        }),
        favorite: addFavorite(),
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              complete: false,
            };
          }
          return user;
        }),
        favorite: state.favorite.filter((user) => user.id !== action.payload),
      };

    case FILTER_USERS:
      const copyUsers = state.users.slice();
      const copyFavorite = state.favorite.slice();
      return {
        ...state,
        users: filterUsers(copyUsers, action.payload.filterName),
        favorite: filterUsers(copyFavorite, action.payload.filterName),
      };
    case FILTER_SEARCH:
      return {
        ...state,
        users: state.users,
        searchName: action.payload,
      };

    case CHANGE_USER:
      return {
        ...state,
        users: state.users.map(user=> user.id ===action.payload.id ?  action.payload.user : user)
      };

    default:
      return state;
  }
};


