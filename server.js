const expresss = require("express")
const compression = require("compression")
const path = require("path")

const app =express()

app.use(compression())
app.use(express.stati(path.join(__dirname,"build")))
app.get("*", (req,res)=>{
  res.sentFile(path.join(__dirname, "build", "index.html"))
})

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log("start server"))