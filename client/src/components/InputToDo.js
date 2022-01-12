import React, {Fragment, useState} from 'react'

const InputToDo = () => {
    const [description, setDescription] = useState("");
    console.log(description)
    const onSubmitForm = async(e) =>{
         e.preventDefault();
         try{
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"}, 
                body: JSON.stringify(body)
            });
            console.log(response.status);
         }catch(err){
            console.log(err.message)
         }
    }
    return (
        <Fragment>
        
        <form className = "d-flex" onSubmit={onSubmitForm}>
            <input type="text" placeholder="add todo" className="form-control" value={description} onChange={e =>setDescription(e.target.value)}/>
            <button className ="btn btn-success">Add</button>
        </form>
        </Fragment>
    )
}

export default InputToDo;