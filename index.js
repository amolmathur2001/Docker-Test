const express = require('express')

const app = express();
app.get('/',(req,res) => {
    res.json({
        "status": "200",
        "message": "Hello Amol Mathur"
    });
});

app.get('/health',(req,res) => {
    res.json({
        "message" : "HEALTHY"
    });
});

app.listen(4000,() => {
    console.log("port is running");
});