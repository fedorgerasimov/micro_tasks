import React from 'react';
import './App.css';
import {Header} from "../webpage/Header";
import {NewComponent} from "./NewComponents";
import {CarsComponent} from "./CarsComponent";
import {topCars} from "./CarsComponent";
import {students} from "./NewComponents";


function App() {

    return (
        <>
            <Header title={"New header"}/>
            <NewComponent students={students}/>
            <CarsComponent cars={topCars}/>

        </>

    );
}


export default App;
