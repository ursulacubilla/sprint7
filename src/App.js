import React from "react";
import Application from "./Application";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";
import Links from "./Links";


function App() {

  return (
    <div className="App">

      <Links />

      <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/App/" element={<Application />} />
        </Routes>

    </div>
  );
}

export default App;

