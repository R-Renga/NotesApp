const express = require('express');
const notes = require('./Data/Notes');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("api is running")
});

app.get('/api/notes', (req, res) => {
    res.send(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    res.send(notes.find(e=> e._id === id))
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log("server running on port 5000")
})