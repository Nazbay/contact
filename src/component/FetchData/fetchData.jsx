import { getAllUsers } from "../../redux/actions";
import axios from "axios";

export const fetchData = () => {

  return async function (dispatch) {
    const request = await axios
    .get(`https://my-json-server.typicode.com/RomanChasovitin/demo-api/users`)
    const result = await request.json()
    dispatch(getAllUsers(result))
  };
};