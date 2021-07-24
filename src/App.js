import './App.css';
import Header from './my components/Header';
import { Todos } from "./my components/Todos";
import { Footer } from "./my components/Footer";
import { Addtodo } from "./my components/Addtodo";
import React, { useState, useEffect } from 'react';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


const deleteFunc= (todo)=>{
  // console.log("i am a delete function",todo)
  setTodos(todos.filter((e)=>{
     return e!==todo;
  }))
  console.log("deleted", todos)
  localStorage.setItem("todos", JSON.stringify(todos));

}

const addTodo = (title,desc)=>{
  console.log("I am adding this todo", title, desc)
  let sno;
  if (todos.length === 0) {
    sno = 0;
  }
  else {
    sno = todos[todos.length - 1].sno + 1;
  }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
}

const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <> 
   <Header title="Todos App" searchBar={false}/>
   <Addtodo addTodo={addTodo}/>
   <Todos todos={todos} deleteFunc={deleteFunc}/>
   
   <Footer/>
    </>
  );
}

export default App;
