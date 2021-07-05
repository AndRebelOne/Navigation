import React, {useContext} from 'react';
import {TodosContext} from './ProviderApp';

export const Todos:React.FC = () => {
    const {todos, addTodo} = useContext(TodosContext);
    const handleAdd = (item:string) => {
        addTodo(item);
    } 
    return (
    <>
        {todos.map((todo, index) => (
            <div key={index}>{todo}</div>
        ))}
        <button onClick={ () => handleAdd("New Todo item")}>Add</button>

    </>)
}