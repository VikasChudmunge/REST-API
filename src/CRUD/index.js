const express = require('express');
require('./Connection');
const Tasks = require('./Model/Todos');

const app = express();
const PORT = process.env.PORT || 3007; 
app.use(express.json());

app.post('/tasks', async (req,resp) => {
    try{
        const CreatingTask = new Tasks(req.body);
        const saveTask = await CreatingTask.save();
        resp.status(201).send(saveTask);
    }catch(e){
        resp.status(400).send('Task Not Created');
    }
})

app.get('/tasks', async (req,resp) => {
    try{
        const findTasks = await Tasks.find();
        resp.status(200).send(findTasks);
    }catch(e){
        resp.status(404).send('Task Not Found');
    }
})

app.get('/tasks/:_id', async (req,resp) => {
    try{
        const _id = req.params._id;
        const findOneTask = await Tasks.findOne({ _id : _id});
        resp.status(200).send(findOneTask);
    }catch(e){
        resp.status(404).send('Task Not Found');
    }
})

app.put('/tasks/:_id', async (req,resp) => {
    try{
        const _id = req.params._id;
        const updateTask = await Tasks.findByIdAndUpdate( _id, req.body, {
            new: true, //Return updated Document
            runValidator: true //Ensure the update complies with schema validation
        })
        resp.status(200).send(updateTask);
    }catch(e){
        resp.status(304).send('Task Not Update'); //304 Not Modified
    }
})

app.get('/search/:key', async (req,resp) => {
    try{
        const search = await Tasks.find({ 
            "$or": [  //$or used for when we search one or more field  in object
                { Title: { $regex: req.params.key }},
                { Description: { $regex: req.params.key }}
            ]
        })
        resp.status(200).send(search);
    }catch(e){
        resp.status(400).send('Task Not Found');
    }
})

app.delete('/tasks/:_id', async (req,resp) => {
    try{
        const _id = req.params._id;
        const deleteTask = await Tasks.findByIdAndDelete(_id);
        resp.status(200).send(deleteTask)
    }catch(e){
        resp.status(400).send('Task Not Deleted');
    }
})

// Handling Error for Unexpected issues:
app.use((err,req,resp,next) =>{
    console.error(err.stack); //err.stack is used for detailed error information to the console
    resp.status(500).send("Something Went Wrong!!!");
})

app.listen(PORT, ()=>{
    console.log(`Server Running On Port ${PORT}`);
})

