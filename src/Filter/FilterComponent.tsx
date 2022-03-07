import React from "react";
import {FilterType} from "./AppFilter"

type MoneyProps = {
    banknots: string,
    value: number,
    number: string
}
type FilterComponentProps = {
    current_money: Array<MoneyProps>,
    click_filter: (value: FilterType) => void

}
type FilterButtonType = {
    name: string,
    callback: () => void  // типизация функции
}

export const FilterButton = (props: FilterButtonType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export const FilterComponent = (props: FilterComponentProps) => {
    return (
        <>
            <ul>
                {props.current_money.map((objFromMoneyArr, index) => {
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
                <FilterButton name={'all'} callback={() => props.click_filter('all')}/>
                <FilterButton name={'Rubls'} callback={() => props.click_filter('Rubls')}/>
                <FilterButton name={'Dollars'} callback={() => props.click_filter('Dollars')}/>
            </div>
        </>
    )
}