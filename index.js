const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const colors = require("colors")
const cors = require("cors")

const askQuestionRoutes = require("./api/askquestion")

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(cors())

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Open AI APIS" })
})

app.use("/api", askQuestionRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close app & exit process
  app.close(() => process.exit(1))
})
