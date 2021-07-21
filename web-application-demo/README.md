# Binance MiniProgram Web Application Demo

## Usage

You need to first replace the `CLIENT_ID` and `CLIENT_SECRET` in the `index.js` to yours. 

```js
// You should replace the clientId and secret with yours
const CLIENT_ID = "[YOUR CLIENT ID]";
const CLIENT_SECRET = "[YOUR CLIENT SECRET]";
```

And if you want to play with the `bn.requestPayment` function, you need to get a `prepayId` from the Binance Pay service, and put it onto the `index.html`

```js
// You need to get the prepayId frist from your own server
const prepayId = "[YOUR PREPAY ID HERE]";
```

And then start the server by

```
yarn
yarn start
```

For more details information, please refer to [Documentation](https://developers.binance.com/docs/mini-program/webapp/overview)
