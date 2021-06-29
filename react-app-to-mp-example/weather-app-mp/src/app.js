import React from "react";
import "./app.css";

function App({ children }) {
  // We don't have to place a router provider here.
  // MP uses its own logic to deal with the router.
  // For the router, please reference to:
  // https://developers.binance.com/docs/mini-program/framework/router
  // For more about the lifecycle of App component, please reference to:
  // https://developers.binance.com/docs/mini-program/framework/lifecycle
  return <>{children}</>;
}

export default App;
