import React from 'react';
import './profile.scss';
import {profileType} from './profilteTypes';
import {ProfileInfo} from '../profile/profileContent/profileInfo';

type ProfilePropsType  = {
  profile: profileType
}

export const Profile = (props: ProfilePropsType ) => {
  return (
    <div className='profileBody'>
      <ProfileInfo profile={props.profile}/>
    </div>
  )
}