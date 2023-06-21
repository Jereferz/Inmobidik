require("dotenv").config();
const express = require("express");
const  conn = require("express-myconnection");
const route = require('./routes/index');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use("/", route);
app.listen(PORT, () =>{
    console.log(`escuchando puerto ${PORT}`);
});
