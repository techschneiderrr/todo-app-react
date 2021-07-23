import React from "react";

export const Todoitem = (props) => {
  return (
    <div className="card my-5" style={{width:"80vw"}}>
      <div className="card-body">
        <h5 className="card-title">{props.todo.title}</h5>
        <p className="card-text">
          {props.todo.desc}
        </p>
        <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>
          Delete
        </button>
      </div>
    </div>
    
  );
};
