import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const { REACT_APP_INSTAGRAM_TOKEN } = process.env;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalinkm&access_token=${process.env}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
