import React from "react";
import heartBlack from "../../photos/heartEmpty.png";
import geo from "../../photos/geo.png";
import smartphone from "../../photos/phone.png";
import internet from "../../photos/web.png";
import massage from "../../photos/email.png";
import heart from "../../photos/heart.png";
import "./style.css";
import { styles } from "../Edits/buttonStyle";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addFavoriteAction } from "../../redux/actions";
import { removeFavoriteAction } from '../../redux/actions';
const Profile = ({user}) => {

  const dispatch = useDispatch()

  const handlerFavorite = (boolean, id , user) =>{
      if(!boolean){
        dispatch(addFavoriteAction({id,user}))
      }
      if(boolean){
        dispatch(removeFavoriteAction(id))
      }
  }
  const saveLocalUser = () =>{
    localStorage.setItem('dataUsers' , JSON.stringify(user))
  }
  
  return (
    <div className="user-cart">
      <img src={user.image} alt="" className="user-img" />
      <div className="user-cart__content">
      <div className="user-cart__name">
        <h3>{user.firstName} {user.lastName}</h3>
        <img src={user.complete ? heart : heartBlack} alt="" onClick={()=>handlerFavorite(user.complete , user.id , user)} />
      </div>

      <div className="user-cart__item">
        <img src={geo} alt="" />
        <p>{user.city}, {user.country}</p>
      </div>
      <div className="user-cart__item">
        <img src={smartphone} alt="" />
        <p>{user.phoneNumber}</p>
      </div>
      <div className="user-cart__item">
        <img src={internet} alt="" />
        <p>{user.website}</p>
      </div>
      <div className="user-cart__item">
        <img src={massage} alt="" />
        <p>{user.email}</p>
      </div>
      <Link to={"/edits"} onClick={()=>saveLocalUser(user)}><button style={styles.ButtonShow}>Show</button> </Link>     
      </div>
    </div>
  );
};

export default Profile;
