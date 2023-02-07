import React from "react";
import "./profileContent.scss";
import {profileType} from "../profilteTypes";
import ProfileStatus from "./profileStatus";

type profileInfoPropsType = {
    profile: profileType
  }

  export const ProfileInfo = (props: profileInfoPropsType) => {
    return (
        <div className='profileInfoBody'>
          <div className="profilePhoto">
            <img  alt={'img'}/>
          </div>
          <div className='profileInfo'>
            <span><span className='profileName'>Имя и фамилия : </span> {props.profile.fullName}</span>
            <span><span className='profileAbout'> Обо мне : </span> {props.profile.aboutMe}</span>
            <span><span className='profileDescrip'> Ищу работу : </span> {props.profile.lookForAJobDescrip}</span>
            <span><span className='profileContact'> Мои контакты :</span>
              <div className='profileContacts'>
                <li> Facebook: {props.profile.contacts.facebook}</li>
                <li> Twitter: {props.profile.contacts.twitter}</li>
                <li> VK: {props.profile.contacts.vk}</li>
                <li> Github: {props.profile.contacts.github}</li>
              </div>
            </span>
          </div>
          <ProfileStatus status={'Привет'}/>
        </div>
    )
  }