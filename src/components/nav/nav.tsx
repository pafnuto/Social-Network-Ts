import React from 'react';
import './nav.scss';
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
    <li><NavLink to="/dialogs"className={({ isActive }) => (isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin')}>Диалоги</NavLink></li>
    <li><NavLink to="/profile"className={({ isActive }) => (isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin')}>Профиль</NavLink></li>

    </div>
  )
}
