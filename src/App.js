import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import Secondpage from "./SecondPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<FirstPage />}></Route>
        <Route path="/SecondPage" element={<Secondpage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
