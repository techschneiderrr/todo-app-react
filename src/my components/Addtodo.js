import React from 'react'

export const Addtodo = () => {

const submit = () =>{
    
}

    return (
        <div className="container" style={{marginTop:"10vh",marginBottom:"7vh"}}>
            <h3 className="text-center">Add an item in the TODO list</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" class="form-label">Todo title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"/>
                </div>

                <div className="mb-3">
                    <label for="desc" class="form-label">Todo description</label>
                    <input type="text" class="form-control" id="desc" placeholder="Description"/>
                </div>
                <button type="submit" className="btn-success btn btn-sm my-3">Add todo </button>
            </form>
            
        </div>
    )
}
