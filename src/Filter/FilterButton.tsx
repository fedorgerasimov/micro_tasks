import React from 'react';

type FilterButtonType = {
    name: string,
    callback: () => void,
}

const FilterButton = (props: FilterButtonType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default FilterButton;
// можно вынести функцию в отдельную компонентку как на видео у Игоря
// потом сделаю