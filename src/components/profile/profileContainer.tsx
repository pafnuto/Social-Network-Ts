import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { contactType, photoType, profileType} from './profilteTypes';
import {Profile} from './profile'
import {AppStatetype} from '../../redux/store';
import {setUserThunk} from '../../redux/profilesReducer';

export const ProfileContainer = () => {
  const state = useSelector((state: AppStatetype) => state.profilePage)
  const auth = useSelector((state: AppStatetype) => state.auth)
  const dispatch = useDispatch()

  let {userId} = useParams()
  if (!userId) {
    userId = '777'
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
