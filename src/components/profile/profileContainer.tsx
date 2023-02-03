import React, {useEffect} from "react";
import {profile} from './profile'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStatetype} from '../../redux/store';
import { setUserThunk } from '../../redux/profilesReducer';
import { contactsType, photoType, profileType} from './profilteTypes';

export const profileContainer = () => {
  const state = useSelector((state: AppStatetype) => state.profilePage)
  const auth = useSelector((state: AppStatetype) => state.auth)
  const dispatch = useDispatch()
  let {userId} = useParams()
  if (!userId) {
    userId = '21580'
  }
  let navigate = useNavigate()
  useEffect(() => {
    if(!auth.isAuth){
      return navigate('/login')
    }
  })
  useEffect(() => {
    setUserThunk(userId, dispatch)
  }, [userId, dispatch])

  return (
    <div>
      <Profile profile={state.profile}/>
    </div>
  )
}
