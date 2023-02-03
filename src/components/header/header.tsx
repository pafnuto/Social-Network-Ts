import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';
import logo from '../../assets/logo.png';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, setAuthUserDataThunk} from '../../redux/authReducer';
import {AppStatetype} from "../../redux/store";

type HeaderPropsType = {
  state: InitialStateType
};

export const Header = (props: HeaderPropsType) => {
    return (
      <header className='header'>
        <img src={logo} alt={'logo'}/>
        <div className='headerbody'>
        {props.state.isAuth ? 'Logout' : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    )
  };

  export const HeaderState = () => {
    let state = useSelector((state: AppStatetype) => state.auth)
    let dispatch = useDispatch()
    useEffect(() => {
      setAuthUserDataThunk(dispatch)
      }
    )
    return (
      <Header state={state}/>
    );
  };
