const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { text } = req.query;
  console.log(text);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    max_tokens: 2048,
  });
  console.log(completion.data.choices[0].text);
  res.status(200).json({ data: completion.data.choices[0].text });
}
