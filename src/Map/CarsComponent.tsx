import React from "react";

type CarsComponentType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const topCars = [
    {manufacturer: "BMW", model: 'm5cs'},
    {manufacturer: "Mercedes", model: 'e63s'},
    {manufacturer: "Audi", model: 'rs6'}
]

export const CarsComponent = (props: CarsComponentType) => {
    return (
        <>
            {props.cars.map((objectCar, index) => {
                return (
                    <table>
                        <tbody>
                        <tr key={index}>
                            <th>{index + 1} {objectCar.manufacturer}</th>
                            <td>{objectCar.model}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}</>
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

