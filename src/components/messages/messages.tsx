import React from 'react';

type MessageItemPropsType = {
    message: string
  }

export const messages = (props: MessageItemPropsType) => {
    return (
      <div>{props.message}</div>
    )
  }
