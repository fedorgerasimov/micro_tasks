import React from "react";

type ButtonPropsType = {
    ButtonName: string
    callback: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return(
        <button onClick={onClickButtonHandler}>{props.ButtonName}</button>
    )
}