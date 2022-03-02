import React from "react";

type CarsComponentType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model:string
}

export const topCars = [
    {manufacturer:"BMW",model:'m5cs'},
    {manufacturer:"Mercedes",model:'e63s'},
    {manufacturer:"Audi",model:'rs6'}
]

export const CarsComponent = (props: CarsComponentType) => {
    return (

        <table>
            {props.cars.map((objectCar,index)=>{
                return(
                    <tr key={index}>
                        <th>{objectCar.manufacturer}</th>
                        <td>{objectCar.model}</td>
                    </tr>
                )
            })}
        </table>

    )
}

/*<tr>
    <th>manufacturer</th>
    <th>model</th>
</tr>
<tr>
    <td>BMW</td>
    <td>'m5cs'</td>
</tr>*/
// отрисовать и пронумеровать, сделать таблицей

