import React from 'react';

type FilterButtonType = {
    buttonName: string,
    callback: () => void,
}

const FilterButton = (props: FilterButtonType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <button onClick={onClickHandler}>{props.buttonName}</button>
    );
};

export default FilterButton;
//  вынес функцию в отдельную компонентку как на видео у Игоря
