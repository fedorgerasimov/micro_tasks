import React, {useState} from "react";
import './AppInput.css'
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";


function AppInput() {
    let [message, setMessage] = useState( [ // данные приходят из сервера
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('') //добавили для того, чтобы вынести в отдельную компоненту button и input

    const addMessage = (title: string) => {
       let newMessage = {message: title};
       setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')   // добавили функцию для очистки input
    }

    return (
        <div className={'AppInput'}>
            {/* <FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button ButtonName={'+'} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    )
}

export default AppInput;