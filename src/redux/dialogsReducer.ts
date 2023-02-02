export type InitialStatePropsType = typeof initialState;

export type DialogsPropsType = {
  id: number
  name: string
};

export type MessagePropsType = {
  id: number
  message: string
};

type ActionsType = AddMessageProsType | UpdateNewMessageTextProsType

type AddMessageProsType = {
  type: 'ADD-MESSAGE'
};

type UpdateNewMessageTextProsType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT'
  newMessage: string
};

let initialState = {
  messages: [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Ого'},
  ] as Array<MessagePropsType>,

  dialogs: [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Кроликов'},
    {id: 3, name: 'Череповец'},
    {id: 4, name: 'Россия'}
  ] as Array<DialogsPropsType>,newMessageText: ''};

export const dialogsReducer = (state: InitialStatePropsType = initialState, action: ActionsType): InitialStatePropsType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage: MessagePropsType = {
        id: 4,
        message: state.newMessageText
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case 'UPDATE-NEW-MESSAGE-TEXT': {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newMessage
      return stateCopy
    }
    default:
      return state
  }
};

export const AddMessage = () => ({type: 'ADD-MESSAGE'} as const)
export const UpdateNewMessageText = (newMessage: string) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newMessage: newMessage
} as const);