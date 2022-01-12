import React, {Fragment, useState} from 'react';


const EditToDo = ({todo}) => { 
    const editText = async (id) => {
        try{
            const body = {description};
             const res = await fetch(`http://localhost:5000/todos/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            });
            console.log(res)
        }catch(err){
            console.log(err.message)
        }
    }
    const [description, setDescription] = useState(todo.description);
    return (
        <Fragment>
<button type="button" className="btn btn-success" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Apply
</button>

<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" className="close" data-dismiss="modal" onClick = {() => setDescription(todo.description)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className = "form-control" value={description} onChange= {e => setDescription(e.target.value)} />
      </div>

      <div class="modal-footer">
        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={() => editText(todo.todo_id)}> Edit</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}



export default EditToDo;