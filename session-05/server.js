const express = require("express");
const PORT = 8001;

const app = express();
app.use(express.json())


const getRandomInt = (min, max )=>{
    return Math.floor((Math.random() * max) + min);
}

app.get("/api/v1/colors", (req , res) =>{
    var colors = {
        red: getRandomInt(0,256),
        green: getRandomInt(0,256),
        blue: getRandomInt(0,256)
    }
    res.status(200).json({
        status:"success",
        data:{
            colors
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`)
})