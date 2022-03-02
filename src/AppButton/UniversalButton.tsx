import React from "react";

type UniversalButton = {
    name:string
    callBack:()=>void
}

export const UniversalButton = (props:UniversalButton) => {
    const onClickHandler =() => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}