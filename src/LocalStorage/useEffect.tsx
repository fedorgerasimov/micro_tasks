import React, {useEffect, useState} from "react";
import './LocalStorage.css'

function LocalStorageWithUseEffect() {

    const [value, setValue] = useState<number>(0)

    useEffect( ()=> {
        let valueAsString = localStorage.getItem('counterValue')  // вначале получаем значение и присваиваем переменной
        if (valueAsString) {          //делаем проверку на NULL, затем нам нужно в useState отправить то что получили, для это делаем преобразование
            let newValue = JSON.parse(valueAsString)   //JSON.parse  преобразовывает строку в объект
            setValue(newValue)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const onClickHandler = () => {
        setValue(value + 1)
    }
    
    return (
        <div className='storage'>
            <h1>{value}</h1>
            <button onClick={onClickHandler}>inc</button>
        </div>
    )
}

export default LocalStorageWithUseEffect