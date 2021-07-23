import './App.css';
import Header from './my components/Header';
import { Todos } from "./my components/Todos";
import { Footer } from "./my components/Footer";
import { Addtodo } from "./my components/Addtodo";
import React, { useState } from 'react';

function App() {

  const [todos, settodos] = useState([
  {
    sno : 1,
    title : "task1",
    desc : "You have to go to market to get the job done"
  },
  {
    sno : 2,
    title : "task2",
    desc : "You have to go to dhobi to get the job done"
  },
  {
    sno : 3,
    title : "task3",
    desc : "You have to go to school to get the job done"
  }
]);

const deleteFunc= (todo)=>{
  // console.log("i am a delete function",todo)
  settodos(todos.filter((e)=>{
     return e!==todo;
  }))
}

  return (
    <> 
   <Header title="Todos App" searchBar={false}/>
   <Addtodo/>
   <Todos todos={todos} deleteFunc={deleteFunc}/>
   
   <Footer/>
    </>
  );
}

export default App;
