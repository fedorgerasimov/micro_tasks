import React from "react";
import './AppButton.css'
import {UniversalButton} from "./UniversalButton";

function AppButton() {
    const Button1Foo= (subcriber:string, age:number, address:string) => {
        console.log(subcriber, age, address)
    }
    const Button2Foo= (subcriber:string) => {
        console.log(subcriber)
    }
    const Button3Foo = () => {
        console.log("I am stupid button")
    }
    return (
        <div className={"AppButton"}>
            <UniversalButton name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo("I'm Jameson", 21, "LA") }/>
            <UniversalButton name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo("I'm Bob")}/>
            <UniversalButton name={'Button'} callBack={Button3Foo}/>
        </div>
    )

}

export default AppButton;