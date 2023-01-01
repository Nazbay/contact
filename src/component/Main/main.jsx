import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "../Search/search";
import Profile from "../Profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../FetchData/fetchData";

export default function Main() {
  const dispatch = useDispatch()
  const [handleUsers, setHandleUsers] = useState({
    usersAll:true,
    usersFavorite:false
  })
  const usersAll = useSelector(state=>{
    const {users,searchName} = state.users
    if (!searchName)
      return users

    return users.filter((user) => {
      const firstLastName = user.firstName + " " + user.lastName;
      return firstLastName
        .toLowerCase()
        .includes(searchName.toLowerCase());
    })
  }
  )
  const usersFavorite = useSelector(state=>state.users.favorite)

  useEffect(() => {
    const localUsers = localStorage.getItem('persist:root')
    if(!localUsers){
      dispatch(fetchData())
    }
  },[])


  return (
    <div>
      <Search handleUsers={handleUsers} setHandleUsers={setHandleUsers}/>
      <div className="contactesList">
        {
         (usersAll && handleUsers.usersAll)? usersAll.map((user,index)=>{
            return(
              <Profile key={user.id} user = {user}  />
            )
          }):
          (usersFavorite && handleUsers.usersFavorite)?usersFavorite.map((user,index)=>{
            return(
              <Profile key={user.id} user = {user}  />
            )
          }):<div>empty...</div>
        }
      </div>
    </div>
  );
}
