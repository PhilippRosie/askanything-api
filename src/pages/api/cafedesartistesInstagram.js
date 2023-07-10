const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalinkm&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`;
const data = await fetch(url);
const feedData = await data.json();
