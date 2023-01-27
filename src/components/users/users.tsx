import React from 'react'
import {NavLink} from "react-router-dom";
import { userPropsType } from './usersTypes'

export const Users = (props: userPropsType) => {
    //подсчет страниц
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let allPages: Array<number> = []
    let showPages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
      allPages.push(i)
    }
    for (let i = 1; i <= 10; i++) {
      showPages.push(i)
    }


  return (
    <div>users</div>
  )
}

