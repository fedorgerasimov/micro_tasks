import React, {useState} from "react";
import './AppFilter.css'



type  FilterType = 'all' | 'Dollars' | 'Rubls'

function AppFilter() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])
    const[filter, setFilter]=useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'Dollars')
    }
    if (filter === 'Rubls') {
        currentMoney = money.filter((filterMoney) => filterMoney.banknots === 'Rubls')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
    <>

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
            </div>*/

        </>
    )
}

export default AppFilter;