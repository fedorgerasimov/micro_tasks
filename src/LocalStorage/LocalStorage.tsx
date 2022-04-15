import React, {useState} from "react";
import './LocalStorage.css'

function LocalStorage() {

    const [value, setValue] = useState<number>(0)

    const onClickHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value)) // setItem = сетаем(сохраняем) какое-либо значение. Затем stringify - преобразовывает любые данные в строку
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1)) // также можно сетать несколько значений
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')  // вначале получаем значение и присваиваем переменной
        if (valueAsString) {          //делаем проверку на NULL, затем нам нужно в useState отправить то что получили, для это делаем преобразование
            let newValue = JSON.parse(valueAsString)   //JSON.parse  преобразовывает строку в объект
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorage = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className='storage'>
            <h1>{value}</h1>
            <button onClick={onClickHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorage}>removeItemFromLocalStorage</button>
        </div>
    )
}

export default LocalStorage