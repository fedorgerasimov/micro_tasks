import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Map/App';
import reportWebVitals from './reportWebVitals';
import Button from "./Button/Button";
import AppButton from "./AppButton/AppButton";
import AppHook from "./useState/AppHook";
import AppFilter from "./Filter/AppFilter";

ReactDOM.render(
    <>
        *<App/>*
       {/* <Button/>*/}
       {/*<AppButton/> */}    {/*универсальная кнопка*/}
        {/*<AppHook/>*/}
       {/* <AppFilter/>*/}
    </>,
    document.getElementById('root')
);
