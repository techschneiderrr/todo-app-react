import React, { useState } from 'react';

export const Addtodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Please fill Title and Description both.");
    }
    props.addTodo(title,desc);
}
    


    return (
        <div className="container" style={{marginTop:"10vh",marginBottom:"7vh"}}>
            <h3 className="text-center">Add an item in the TODO list</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Title"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Description"/>
                </div>
                <button type="submit" className="btn-success btn btn-sm my-3">Add todo </button>
            </form>
            
        </div>
    )
}
