import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Map/App';
import reportWebVitals from './reportWebVitals';
import Button from "./Button/Button";
import AppButton from "./AppButton/AppButton";
import AppHook from "./useState/AppHook";
import AppFilter from "./Filter/AppFilter";
import AppInput from "./Input/AppInput";
import App_Associative_Array from "./Tuesday_Associative_Array/App_Associative_Array";
import LocalStorage from "./LocalStorage/LocalStorage";

ReactDOM.render(
    <>
        {/*<App/>*/}
       {/* <Button/>*/}
       {/*<AppButton/> */}    {/*универсальная кнопка*/}
        {/*<AppHook/>*/}
        {/*<AppFilter/>*/}
        {/*<AppInput/>*/}
        {/*<App_Associative_Array/>*/}
        <LocalStorage/>
    </>,
    document.getElementById('root')
);
