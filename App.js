require("dotenv").config();

const express=require("express");
const path=require("path");

const app=express();

app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes"));

app.listen(2999,()=>{
console.log("Servidor en http://localhost:2999");
});