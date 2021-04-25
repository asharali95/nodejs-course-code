const http = require("http"); // node core module - handle networking
const fs = require("fs");
const PORT = 8000;

const server = http.createServer((request, response) => {
    // call on hit
    // fs.readFile(`random.json`,'utf-8',(error,data) =>{
    //     if(error){
    //         console.log(error)
    //         return 0
    //     }
    //     console.log(data)
    // })

    console.log(file)
    response.end("hello node")
});

server.listen(PORT, () =>{
    console.log(`Server hosted on PORT ${PORT}`)
})