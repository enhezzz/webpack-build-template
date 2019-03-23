const express = require("express")
const app = express()

app.get("/a",(req,res)=> {
    console.log(req.query);
    res.send("send from real server").end()
})
app.post("/post", (req,res)=> {
    res.send("post from server").end()
})
app.listen(3666, "localhost")