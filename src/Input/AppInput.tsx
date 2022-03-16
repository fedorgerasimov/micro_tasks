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

    const addMessage = (title: string) => {
       let newMessage = {message: title};
       setMessage([newMessage, ...message])
    }

    return (
        <div className={'AppInput'}>
            {/*   <div>
                <input/>      // вынесли в отдельную компоненту
                <button>+</button>
            </div>*/}
           {/* <FullInput addMessage={addMessage}/>*/}
            <Input/>
            <Button ButtonName={'ButtonName'} callback={()=>{}}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    )
}

export default AppInput;