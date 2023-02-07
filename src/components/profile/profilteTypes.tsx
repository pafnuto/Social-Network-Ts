export type contactType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
  }

  export type photoType = {
    small: string
    large: string
  }

  export type profileType = {
    userId: number
    fullName: string
    aboutMe: string
    contacts: contactType
    lookForAJob: boolean
    lookForAJobDescrip: string
    photos: photoType
  } 