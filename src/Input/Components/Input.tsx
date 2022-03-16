import React, {ChangeEvent, useState} from "react";

type ValuePropsType = {
    title: string
    setTitle : (title: string) => void //
}

export const Input = (props: ValuePropsType) => {

    const onChangeButtonHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeButtonHandler}/>
    )
}