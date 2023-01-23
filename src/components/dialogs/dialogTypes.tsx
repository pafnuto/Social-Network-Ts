export type DialogItemPropsType = {
    id: number
    name: string
  };

export type MessageItemPorpsType = {
    message: string
  };

  export  type MapStateToPropsType = {
    //messagesPage: InitialStatePropsType
    isAuth: boolean
  };

  export  type MapDispatchPropsType = {
    addMessage: () => void
    onChangeHandler: (text: string) => void
  };

  export type DialogsPropsType = MapStateToPropsType & MapDispatchPropsType;
