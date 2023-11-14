const router = require("express").Router()

router.post("/askquestion", (req, res) => {
  res.status(200).json({ success: true, message: "Generating Chatgpt response" })
})

module.exports = router
