import React, {ChangeEvent, useState} from "react";

export const FullInput = () => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)}

    return(
        <div>
            <div>
                <input onChange={onChangeInputHandler}/>
                <button onClick={()=> {}}>+</button>
            </div>
        </div>
    )
}