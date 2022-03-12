import React from "react";
import {FilterType} from "./AppFilter"
import FilterButton from "./FilterButton";

type MoneyProps = {
    banknots: string,
    value: number,
    number: string
}
type FilterProps = {
    currentMoneyComponent: Array<MoneyProps>,
    clickFilterComponent: (value: FilterType) => void

}

export const FilterComponent = (props: FilterProps) => {
    return (
        <>
            <ul>
                {props.currentMoneyComponent.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <FilterButton buttonName={'all'} callback={() => props.clickFilterComponent('all')}/>
                <FilterButton buttonName={'Rubls'} callback={() => props.clickFilterComponent('Rubls')}/>
                <FilterButton buttonName={'Dollars'} callback={() => props.clickFilterComponent('Dollars')}/>
            </div>
        </>
    )
}