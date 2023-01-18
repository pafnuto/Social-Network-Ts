import React from 'react';
import './nav.scss';
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <div className='navitem'><NavLink to='/profile' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Profile</NavLink></div>
      <div className='navitem'><NavLink to='/dialogs' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Messages</NavLink></div>
      <div className='navitem'><NavLink to='/news' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>News</NavLink></div>
      <div className='navitem'><NavLink to='/music' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}>Music</NavLink></div>
      <div className='navitem'><NavLink to='/users' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}> Users</NavLink></div>
      <div className='navitem'><NavLink to='/settings' className={({isActive}) => isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'}> Settings</NavLink></div>
    </div>
  )
}
