import express from "express";
const port = 3000;
const pathArguments = process.argv.slice(2);

const app = express();

// app.use( ()=>{throw new Error("Hello")});
console.log("Passed in paths:", pathArguments);
if (pathArguments.length) {
  for (let x of pathArguments) {
    console.log(`Serving http://localhost:${port}/${x} from out/${x}/`);
    app.use(`/${x}/`, express.static(`out/${x}/`));
  }
} else {
  console.log(`Serving http://localhost:${port}/ from out/_/`);
  app.use("/", express.static("out/_/"));
}

app.use((err, req, res, next) => {
  console.log("hello", err);
});

app.listen(port, (err) => {
  if (err) {
    console.log("Encountered an Error!");
    console.error(err);
  } else {
    console.log("App is listening at port " + port);
  }
});
