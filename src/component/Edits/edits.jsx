import React, {useState} from "react";
import "./style.css";
import avatar from "../../photos/avatar.png";
import heart from "../../photos/favorite.png";
import heartBlack from "../../photos/unfavorite.png";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { addFavoriteAction, changeUserAction } from "../../redux/actions";
import { removeFavoriteAction } from '../../redux/actions';
import { styles } from "./buttonStyle";

const Edits = () => {
  const localUser = JSON.parse(localStorage.getItem("dataUsers"));
  const { firstName, lastName, country, city, email, phoneNumber, website , complete , id, image} = localUser;
  const [isFavorite,setIsFavorite] = useState(complete)

  
  const dispatch = useDispatch()
  const handlerFavorite = (boolean, id , user) =>{
      if(!boolean){
        dispatch(addFavoriteAction({id,user}))
      }
      if(boolean){
        dispatch(removeFavoriteAction(id))
      }
      setIsFavorite(!isFavorite)
  }
  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Обязательное поле";
    }
    if (!values.lastName) {
      errors.lastName = "Обязательное поле";
    }
    if (!values.email) {
      errors.email = "Обязательное поле";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Некорректная почта!";
    }
    if (!values.country) {
      errors.country = "Обязательное поле";
    }
    if (!values.city) {
      errors.city = "Обязательное поле";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Обязательное поле";
    }
    if (!values.website) {
      errors.website = "Обязательное поле";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      id,firstName,lastName,email,phoneNumber,country,city,website,complete,image
    },
    onSubmit: (user) => {
      const id = user.id
      dispatch(changeUserAction({id , user}))
    },
    validate,
  });

  return (
    <div className="contact-detail">
      <div className="contact-detail__wrapper">
        <div className="contact-detail__avatar">
          <img src={avatar} alt="" />
          <img src={isFavorite ? heart : heartBlack} alt="" className="heart" onClick={()=>handlerFavorite(complete, id , localUser)}/>
        </div>
        <form className="contact-detail__form" onSubmit={formik.handleSubmit}>
          <div className="contact-detail__form-left">
            <div className="contact-detail__form-input">
              <p>First name:</p>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.errors.firstName && formik.touched.firstName? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="contact-detail__form-input">
              <p>City:</p>
              <input
                type="text"
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.errors.city && formik.touched.city ? (
                <div style={{ color: "red" }}>{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="contact-detail__form-input">
              <p>Phone Number:</p>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            <div className="contact-detail__form-input">
              <p>Website:</p>
              <input
                type="text"
                id="website"
                name="website"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website}
              />
              {formik.errors.website && formik.touched.website ? (
                <div style={{ color: "red" }}>{formik.errors.website}</div>
              ) : null}
            </div>
          </div>
          <div className="contact-detail__form-right">
            <div className="contact-detail__form-input">
              <p>Last name:</p>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className="contact-detail__form-input">
              <p>Country:</p>
              <input
                type="text"
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.errors.country && formik.touched.country ? (
                <div style={{ color: "red" }}>{formik.errors.country}</div>
              ) : null}
            </div>
            <div className="contact-detail__form-input">
              <p>Email:</p>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <button type='submit' style={styles.Button}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edits;
