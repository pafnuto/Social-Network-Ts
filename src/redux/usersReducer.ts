import {Dispatch} from "redux";
import { followAPI, userAPI } from '../api/api';

export type InitialStatePropsType = typeof initialState;

export type UsersType = {
  name: string
  id: number
  photos: {
    small: null
    large: null
  },
  status: null,
  followed: boolean
};

type ActionsType =
  FollowType
  | UnFollowType
  | SetUsersType
  | SetCurrentPageType
  | SetTotalCountType
  | ToggleIsFetchingType
  | SetFirstPageType
  | ToggleIsFollowingType;

type FollowType = {
  type: 'FOLLOW'
  userID: number
};

type UnFollowType = {
  type: 'UNFOLLOW'
  userID: number
};

type SetUsersType = {
  type: 'SET-USERS'
  users: any
};

type SetCurrentPageType = {
  type: 'SET-CURRENT-PAGE',
  currentPage: number
};

type SetTotalCountType = {
  type: 'SET-TOTAL-COUNT'
  totalUsersCount: number
};

type ToggleIsFetchingType = {
  type: 'TOGGLE-IS-FETCHING'
  status: boolean
};

type SetFirstPageType = {
  type: 'SET-SHOW-VALUE'
  fistPage: number
  lastPage: number
};

type ToggleIsFollowingType = {
  type: 'TOGGLE-IS-FOLLOWING'
  isFetching: boolean
  userId: number
};

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[]
};

export const usersReducer = (state: InitialStatePropsType = initialState, action: ActionsType): 
InitialStatePropsType => {
  switch (action.type) {
    case 'FOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
    case 'UNFOLLOW':
      return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
    case 'SET-USERS':
      return {...state, users: action.users}
    case 'SET-CURRENT-PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    case 'SET-TOTAL-COUNT' : {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case 'TOGGLE-IS-FETCHING' : {
      return {...state, isFetching: action.status}
    }
    case 'TOGGLE-IS-FOLLOWING': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state
  }
};

export const follow = (userID: number) => ({type: 'FOLLOW', userID})
export const unFollow = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsers = (users: Array<UsersType>) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', totalUsersCount})
export const toggleIsFetching = (status: boolean) => ({type: 'TOGGLE-IS-FETCHING', status})
export const toggleIsFollowing = (isFetching: boolean, userId: number) => ({
  type: 'TOGGLE-IS-FOLLOWING',
  isFetching,
  userId
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
    })
  }
};

export const followThunkCreator = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.setFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toggleIsFollowing(false, userId))
    })
  }
};

export const unFollowThunkCreator = (userId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.setUnfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId))
      }
      dispatch(toggleIsFollowing(false, userId))
    })
  }
};

