const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const TOKEN_KEY = "zaq1xsw2cde3vfr4bgt5nhy6mju7";

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token==null) return res.status(401).send("Token requerido");

    jwt.verify(token, TOKEN_KEY, (err, user)=>{
        if(err) return res.status(403).send("Token invalido");
        console.log(user);
        req.user = user;
        next();
    });
    
};

app.post("/usuario/login", (req, res)=>{
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    if(usuario=="fmendoza" && clave=="12345"){
        const datos = {
            id: "123",
            nombre: "Felipe Mendoza",
            gmail: "fmendoza@gmail.com",
            codigo: "ZXCVBNM"
        };
        const token = jwt.sign(
            {userId:datos.id, email:datos.gmail},
            TOKEN_KEY,
            {expiresIn: "2h"}
        );
        let nDatos = {...datos, token};
        res.status(200).json(nDatos);
    }else{
        res.status(400).send("credenciales incorrectas");
    }
});

app.get("/usuario/:id/ventas", verifyToken, (req, res)=>{
    const datos = [
        {id:1, nombre:"juan"},
        {id:2, nombre:"carlos"}
    ];
    res.json(datos);
});

app.listen(9999, ()=>{
    console.log("Sever run port: 9999");
});