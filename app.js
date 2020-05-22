const express = require("express")
const app = express()
const http = require("http")
const hostname = "127.0.0.1"
const PORT = process.env.PORT || 3000
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()
const protect = require("./controllers/auth")
const postRoutes = require("./routes/posts")
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/product")
const commentRoutes = require("./routes/comment")

const cartRoutes = require("./routes/cart")

const fs = require("fs")
const cors = require("cors")
app.use(cors())
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/estore", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
mongoose.connection
  .once("open", () => {
    console.log("Connection has been successfully build!")
  })
  .on("error", () => {
    console.log("error in connection with mongodb!")
  })
app.get("/apiDocs", (req, res) => {
  fs.readFile("apiDocs/api.json", (err, data) => {
    if (err) {
      res.status(404).json({
        error: err,
      })
    }
    const docs = JSON.parse(data)
    res.json(docs)
  })
})
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(cookieParser())

app.use("/uploads", express.static("uploads"))
app.use("/", authRoutes)
app.use("/", commentRoutes)
app.use("/", cartRoutes)
app.use("/", postRoutes)
app.use("/", userRoutes)
app.use("/", productRoutes)

app.use("/uploads//", express.static("uploads"))
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World")
})

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`)
})
