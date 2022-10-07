
const express = require('express')
// const helmet = require('helmet');
const morgan = require('morgan');

const { getinfoFromDb, addCenter, getQuotes,addDataFromEnv, getCenters, deleteCenter } = require("./handler")

express()

    // .use(helmet())
    .use(morgan('tiny'))
    .use(express.json())

//Endpoints 
    .get('/api/get-info',getinfoFromDb)
    .post("/api/add-center", addCenter)
    .get("/api/zenquotes", getQuotes)
   //expect the body of username and password to .env)
   .post("/api/admin-login", addDataFromEnv) 
   .get("/api/get-centers", getCenters)
   .delete("/api/delete-center/:center", deleteCenter)

// 
    // this is our catch all endpoint.

    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })


 // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => {console.log(`Server listening on port 8000`)})