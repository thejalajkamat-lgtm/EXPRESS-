const express = require('express');
const app = express();

// console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
// app.use((req, res) => {
//     console.log(req);
//     console.log("request received")
//     res.send("this is a basic response");
//     res.send({
//         name: "apple",
//         color: "red",
//     })
//    let code  = "<h1>Fruits<h1><ul><li>apple</li><li>orange</li><ul>";
// //    res.send(code);
// })
app.get("/person1",(req,res)=> {
    res.send("you contacted person1 🤏")
})
app.get("/person2",(req,res)=> {
    res.send("you contacted person2 🤏")
})
app.get("*",(req, res) => {
    res.send("You contacted a wrong person 🤏")
})

// app.post("/", (req,res)=> {
//     res.send("you sent a post request to root")
// })