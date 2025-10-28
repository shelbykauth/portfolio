import express from "express";
import path from "path";
const __dirname = import.meta.dirname;

const app = express();

app.use( ()=>{throw new Error("Hello")});
app.use('portfolio', express.static(path.join(__dirname, 'out')));

app.use((err, req, res, next)=>{
  console.log("hello", err);
})

app.listen(3000);

