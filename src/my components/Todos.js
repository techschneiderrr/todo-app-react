import React from 'react'
import {Todoitem} from './Todoitem'

export const Todos = (props) => {
    return (
        <div className="container">
            <center>
            <h2 className="text-center">ToDos List</h2>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                return(
                    <Todoitem todo={todo} key={todo.sno} onDelete={props.deleteFunc}/>
                )
            })
            }
            </center>
        </div>
    )
}
