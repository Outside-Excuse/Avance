//npm install express
//const axios = require('axios');
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json())
//-------------python----------->


//pythonProcess.stdin.write('Aaron')

//------------------------------------------------------------>



app.post('/main', (request,response)=>{

    let Data = JSON.stringify(request.body)
    console.log(Data)
    response.send(Data)

    //area = Data["area terreno"]
    const spawn = require('child_process').spawn

    const pythonProcess = spawn('python', ['script_python.py'])
    let pythonResponse = ""

    pythonProcess.stdout.on('data', function(data) {
        pythonResponse += data.toString()
    })

    pythonProcess.stdout.on('end', function() {
        response.send(pythonResponse);
        console.log(pythonResponse) //-----pythonResponse

    })


        
  
    


    pythonProcess.stdin.write(Data)
    
    pythonProcess.stdin.end()

})



app.listen(3000,()=>{
    console.log("server running port",3000);
});
