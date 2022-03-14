import React, {useState} from "react";
import './AppInput.css'
function AppInput() {
    let [message, setMessage] = useState( [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    return (
        <div className={'AppInput'}>
            <div>
                <input/>
                <button>+</button>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>

                )
            })}
        </div>
    )
}

export default AppInput;