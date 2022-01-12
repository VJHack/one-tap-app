import React, { Fragment, useState, useEffect } from 'react'
import EditToDo from './EditToDo'
const ListToDos = () => {
    const [jobs, setJobs] = useState([]);

    //Get all the Todos
    async function getTodos() {
        const res = await fetch("http://localhost:5000/apply");
        const jobsToArray = await res.json();
        setJobs(jobsToArray)

    }

    //Delete one Todo
    // async function deleteTodos(id) {
    //     try {
    //         const res = await fetch(`http://localhost:5000/jobs/${id}`, {
    //             method: "DELETE"
    //         });
    //         setTodos(todos.filter(todo => todo.todo_id !== id));
    //         console.log(res);
    //     } catch (err) {
    //         console.log(err.message);
    //     }

    // }
    useEffect(() => {
        getTodos();
    }, [])

    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Location</th>
                        <th>Typical Pay</th>
                        <th>Application Link</th>
                        <th>Apply</th>
                    </tr>
                </thead>
                <tbody>
                    {/*  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}

                    {
                        jobs.map(job => (
                            <tr key={job.job_id}>
                                <td><img src={job.logo_link} height="50" width="50"></img></td>
                                <td>{job.company}</td>
                                <td>{job.position}</td>
                                <td>{job.location}</td>
                                <td>${job.typical_pay}</td>
                                <td> <a href={job.company} rel="noreferrer">
                                    Job Posting
                                    </a></td>
                                <td><EditToDo todo={job} /></td>
                                {/*<td><button className="btn btn-danger" onClick={() => deleteTodos(todo.todo_id)}>Delete</button></td>*/}
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </Fragment>



    );
}

export default ListToDos;