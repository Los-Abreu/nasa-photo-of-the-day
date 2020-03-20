import React from "react";
import "./App.css";
import NasaImg from "./components/NasaImg";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color:white;
`;

const Wrapper = styled.section`
  padding: 20px;
  background:black;
`;

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Wrapper>
      <div className="App-header">
      <Title>Astronomy Picture Of The Day</Title>
      </div>
      <div className="imgCard">
      <NasaImg />
      </div>
      </Wrapper>
    </div>
  );
}

export default App;
