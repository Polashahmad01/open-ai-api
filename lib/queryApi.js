const openai = require("./chatgpt")

const query = async (prompt, chatId, model) => {
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model,
    temperature: 0.9,
    top_p: 1,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0
  })

  console.log("response", response)
}

query("Who are you?", "chatId", "davinci")
