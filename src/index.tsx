import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Map/App';
import reportWebVitals from './reportWebVitals';
import Button from "./Button/Button";
import AppButton from "./AppButton/AppButton";
import AppHook from "./useState/AppHook";

ReactDOM.render(
    <>
        {/*<App/>*/}
       {/* <Button/>*/}
       {/*<AppButton/> */}    {/*универсальная кнопка*/}
        <AppHook/>
    </>,
    document.getElementById('root')
);
