import React from "react";

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98}
]

type NewComponentType = {
    students: Array<StudentType>  //StudentType[]

}
type StudentType = {
    id: number,
    name: string,
    age: number
}
const liElements = students.map((el, index) =>  // всегда добавлять в li key
    <li key={el.id}>
        <span>{el.id}</span>
        <span> {el.name} </span>
        <span>{el.age}</span>
    </li>)

export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {liElements}
                {/*                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}*/}
            </ul>
        </div>
    )
}