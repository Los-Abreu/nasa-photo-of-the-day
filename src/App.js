import React from "react";
import "./App.css";
import NasaImg from "./components/NasaImg";


function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <div className="App-header">
      <h1>Astronomy Picture Of The Day</h1>
      </div>
      <div className="imgCard">
      <NasaImg />
      </div>
    </div>
  );
}

export default App;
