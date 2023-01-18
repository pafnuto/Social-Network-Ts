import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';
import logo from '../../assets/logo.png';
import {useDispatch, useSelector} from "react-redux";

//type HeaderPropsType = {    state: InitialStateType}           {props.state.isAuth ? 'Logout' : <NavLink to={'/login'}>Login</NavLink>}
//потом перенести logout в headerbody

export const Header = () => {
    return (
      <header className='header'>
        <img src={logo} alt={'logo'}/>
        <div className='headerbody'>
        </div>
      </header>
    )
  }
