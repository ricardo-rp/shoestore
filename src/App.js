import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
