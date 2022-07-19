import React from 'react';

//Destructuring in functions:
export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?:string }>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    car: {model:string}
}
export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man: {name}} = props;
    //    const {title, man: {name}, ...restProps} = props;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};
//or we can destructure in parameters of function:
/*
export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};*/
