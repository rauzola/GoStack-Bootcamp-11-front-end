import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Projects</li>
          <li>GoStack</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
