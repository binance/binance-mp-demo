# Example: How to Migrate a React App to Binance Mini Program

This project describes the steps to migrate a simple React project (Weather app) into a Binance Mini Program. The project contains the basic parts of a React project: 
- Page
- Component
- API Reqeust


## How to use this project

### React app

Run the react weather app like all the common react apps:

```bash
$ cd weather-app-react
$ yarn
$ yarn start
```

It will open a browser with address: `http://localhost:3000/`. And you can see the weather app hosts there.


### Mini Program apps

All the steps are the same with the React app

```bash
$ cd weather-app-mp
$ yarn
$ yarn start
```

It will start a dev server locally. Now you should open [Binance DevTools](https://developers.binance.com/docs/mini-program/download) and import the path `weather-app-mp/.bmp/build` to open the mp weather app.

Please remember to check the setting `Does not verify valid domain names, web-view (business domain names), TLS versions and HTTPS certificates` at the `Details` panel of DevTools. Otherwise you may get en error: `net::ERR_BLOCKED_BY_CLIENT`

For more details, please reference to [Binance MiniProgram Docs](https://developers.binance.com/docs/mini-program/quick-start)
