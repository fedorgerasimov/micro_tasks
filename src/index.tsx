import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Map/App';
import reportWebVitals from './reportWebVitals';
import Button from "./Button/Button";
import AppButton from "./AppButton/AppButton";

ReactDOM.render(
    <>
        {/*<App/>*/}
       {/* <Button/>*/}
       <AppButton/>     {/*универсальная кнопка*/}
    </>,
    document.getElementById('root')
);
