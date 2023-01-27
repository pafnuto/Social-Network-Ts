export type userPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    //users: Array<UsersType>
    followingInProgress: number[]
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
  };

export type UserspropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
  //users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

export type MapDispatchToPropsType = {
  setCurrentPage: (currentPage: number) => void
  toggleIsFollowing: (isFetching: boolean, userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  followThunk: (userId: number) => void
  unFollowThunk: (userId: number) => void
}
