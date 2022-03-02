import React from "react";

function Button() {
   /* const myFirstSubscriber = (event:React.MouseEvent<HTMLElement>) => {
        console.log("Hello Jameson!")
    }*/

    const onClickHandler = (name:string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log(100200)    // ничего не передавать, но в консоли должно показаться 100200
    }
    const foo2 = (num: number) => {   //  передать 100200
        console.log(num)
    }
    return (
        <div className="Button">
            {/*<button onClick={(event) => {console.log("Hello")}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>*/}
            <button onClick={(event) => onClickHandler("Jameson")}>MyYouTubeChanel-2</button>
            <button onClick={(event) =>onClickHandler("Bob")}>MyYouTubeChanel-2</button>
            <button onClick={()=>onClickHandler("some info")}>MyYouTubeChanel-3</button>     {/*если нужно передать скобки нужны слева и справа*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>

        </div>
    )
}

export default Button;