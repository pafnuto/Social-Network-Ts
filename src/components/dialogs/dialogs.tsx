import React, {ChangeEvent, useEffect} from "react";
import './dialogs.scss';
import {useNavigate, NavLink} from "react-router-dom";
import {DialogItemPropsType, MessageItemPorpsType, 
    MapStateToPropsType, MapDispatchPropsType, DialogsPropsType} from './dialogTypes'

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
      <div><NavLink to={path}>{props.name}</NavLink></div>
        )}

const MessageItem = (props: MessageItemPorpsType) => {
    return (
        <div>{props.message}</div>
        )}

let mapStateToProps = (state: AppStatetype): MapStateToPropsType => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addMessage: () => {
      dispatch(AddMessageAC())
    },
    onChangeHandler: (text: string) => {
      dispatch(UpdateNewMessageTextAC(text))
    }
  }
}
export const dialogs = (props:any) => {
    const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messagesPage.messages.map(m => <MessageItem message={m.message}/>)

//задаем константы с действиями
    const onAddMessage = () => {
        props.addMessage()}

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)}

    let navigate = useNavigate()
        useEffect(() => {
        if(!props.isAuth)
            {return navigate('/login')
           }
         })
            
  return (
    <div className='dialogs'>
    <div className='users'>
      <p>dialogsElement</p>
    </div>
    <div className='messages'>
      <p>messagesElement</p>
      <textarea placeholder={'Введите свое сообщение'} 
      value={props.messagesPage.newMessageText}
      onChange={onChangeHandler}/>
      <button onClick={onAddMessage}>Добавить сообщение</button>
    </div>
  </div>
)
}

