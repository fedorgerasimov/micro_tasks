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

const trElements = topCars.map((el, index) =>
    <tr key={index}>
        <th>{index + 1}</th>
        <td>{el.manufacturer}</td>
        <td>{el.model}</td>
    </tr>
)

export const CarsComponent = (props: CarsComponentType) => {
    return (
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {trElements}
            {props.cars.map((objectCar, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1} </th>
                        <td> {objectCar.manufacturer}</td>
                        <td>{objectCar.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

