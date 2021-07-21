const express = require("express");
const sha1 = require("js-sha1");
const axios = require("axios");
const path = require("path");

const ACCOUNTS_HOST_PUBLIC = "https://accounts.binance.com";

// You should replace the clientId and secret with yours
const CLIENT_ID = "[YOUR CLIENT ID]";
const CLIENT_SECRET = "[YOUR CLIENT SECRET]";

const app = express();
const port = 3000;

// You should save the token and ticket in your cache or db
let prevToken = "";
let prevTicket = "";

const getUUID = () => Math.random().toString(16).slice(2, -2);

// To concatenate all the parameters into a string
const getQueryString = (params = {}, needEncode = true) =>
  Object.keys(params)
    .reduce((result, key) => {
      const v = params[key];
      const str = `${key}=${needEncode ? encodeURIComponent(v) : v}`;
      result.push(str);
      return result;
    }, [])
    .join("&");

// Request token from Binance server
const getToken = async (clientId, clientSecret) =>
  axios
    .post(`${ACCOUNTS_HOST_PUBLIC}/oauth/token`, null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      },
    })
    .then(({ data }) => data.access_token)
    .catch(console.log);

// Request ticket from Binance server with access_token
const getTicket = async (token) =>
  axios
    .post(`${ACCOUNTS_HOST_PUBLIC}/oauth-api/v1/js/get-ticket`, null, {
      params: {
        access_token: token,
      },
    })
    .then(({ data }) => data?.data?.ticket);

// Calculate signature for the url
const getSignature = async (url) => {
  const token = await getToken(CLIENT_ID, CLIENT_SECRET);
  let ticket;
  if (prevToken !== token) {
    prevToken = token;
    ticket = await getTicket(token);
    prevTicket = ticket;
  } else {
    ticket = prevTicket;
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = getUUID();

  // When generating signatures here, the keys need to be sorted alphabetically
  const content = getQueryString(
    {
      clientId: CLIENT_ID,
      nonce,
      ticket,
      timestamp,
      url,
    },
    false
  );
  const signature = sha1(content);
  return {
    clientId: CLIENT_ID,
    ts: `${timestamp}`,
    nonce,
    signature,
    ticket,
  };
};

app.get("/signature", async (req, res) => {
  const { url } = req.query;
  res.json(await getSignature(url));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use("/static", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
