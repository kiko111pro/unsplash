import React, { useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Body from "./Body"

function App() {
  
  const [inputData, setInputData] = useState('nature') //By default pictures are set to nature

  return (
    <div className="App">
      <Navbar setInputData={setInputData}/>
      <Banner />
      <Body inputData={inputData} />
    </div>
  );
}

export default App;
