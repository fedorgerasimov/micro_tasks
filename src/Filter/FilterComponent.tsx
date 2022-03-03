import React from "react";
// протипизировать и пропсы

export type CurrentMoneyType = {
    banknots: string,
    value: number,
    numer: string
}

export const FilterComponent = (props: CurrentMoneyType) => {
    return (<>
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
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
            <button onClick={() => onClickFilterHandler('all')}>all</button>
            <button onClick={() => onClickFilterHandler('Rubls')}>Rubls</button>
            <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        </div>
    </>)
}