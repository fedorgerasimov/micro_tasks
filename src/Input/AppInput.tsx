import React, {useState} from "react";
import './AppInput.css'
import {FullInput} from "./Components/FullInput";


function AppInput() {
    let [message, setMessage] = useState( [ // данные приходят из сервера
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    return (
        <div className={'AppInput'}>
            {/*   <div>
                <input/>      // вынесли в отдельную компоненту
                <button>+</button>
            </div>*/}
            <FullInput/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    )
}

export default AppInput;