const express = require("express");
const app = express()
const cors = require("cors");
const pool = require("./db")


//middleware
app.use(cors());
app.use(express.json())

//ROUTES//

//get all jobs
app.get("/apply", async(req, res) => {
    try{
        const allJobs = await pool.query("SELECT * FROM jobs")
        res.json(allJobs.rows)
    } catch(err){
        console.log(err.message)
    }
})

//get a job
app.get("/apply/:id", async(req, res) => {
    try{
        const {id} = req.params
        const job = await pool.query("SELECT * FROM job WHERE job_id = $1", [id])
        res.json(job.rows[0])
    }catch(err){
        console.log(err.message)
    }
})
//create a todo
app.post("/apply", async(req,res)=>{
    try{
        const company =  req.body.company;
        const position =  req.body.position;
        const typical_pay =  req.body.typical_pay;
        const location =  req.body.location;
        const application_link =  req.body.application_link;
        const logo_link =  req.body.logo_link;
        const newJob = await pool.query("INSERT INTO jobs (company, position, typical_pay, location, application_link, logo_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [company, position, typical_pay, location, application_link, logo_link]);
        res.json(newJob);
    } catch(err){
        console.error(err.message);
    }
})


//update a todo
app.put("/apply/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updatejob = await pool.query("UPDATE jobs SET description = $1 WHERE job_id = $2", [description, id])
        res.json("job was updated")
    } catch(err){
        console.log(err.message)
    }
})


//delete job
app.delete("/apply/:id", async(req, res) =>{
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updatejob = await pool.query("DELETE FROM jobs WHERE job_id = $1", [id])
        res.json("job was deleted")
    } catch(err){
        console.log(err.message)
    }
})

app.listen(5000, ()=>{
    console.log("Server is starting on port 5000");
})