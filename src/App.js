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
    title : "Check out this app",
    desc : "This is my first try at a react application so I hope you will like it"
  },
  {
    sno : 2,
    title : "Check me out",
    desc : "You can hae a look at the projects made by me by clicking the 'meet the creator' link in the nav"
  }
]);

const deleteFunc= (todo)=>{
  // console.log("i am a delete function",todo)
  settodos(todos.filter((e)=>{
     return e!==todo;
  }))
}

const addTodo = (title,desc)=>{
let sno = todos[todos.length - 1].sno + 1;
const mytodo = {
  sno : sno,
  title: title,
  desc: desc
}
console.log(mytodo);
settodos([...todos,mytodo]);
}

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
