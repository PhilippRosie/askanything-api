const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.CHAT_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { text } = req.query;
  console.log("4", text);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    max_tokens: 2048,
  });
  console.log("xi", completion.data.choices[0].text);
  res.status(200).json({ data: completion.data.choices[0].text });
}
