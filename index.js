import express from "express"; 

//allows taking incoming req from body  
import bodyParser from "body-parser"; 


//initiialixe express appn 
const app = express(); 

const PORT =5000; 


import usersRoutes from "./routes/users.js"; 


//initializing bodyparser middleware  
app.use(bodyParser.json);  


app.use("/people", usersRoutes);



// from homepage we are expecting req and response 
app.get("/", (req, res) => { 
    console.log(['TEST']),
    res.send("Welcome to the Users API!")} 
) ;


//app.listen(PORT,()=> console.log('Server running on port : http://localhost:${PORT}')); 
app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`)); 
