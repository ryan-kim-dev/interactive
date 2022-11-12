import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

function App() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const positionSetter = e => {
    return setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <Main onMouseMove={positionSetter}>
      <GlobalStyle />
      <main>
        <H1>
          x: {cursorPosition.x} y: {cursorPosition.y}
        </H1>
        <CursorDiv
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
        />
      </main>
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const H1 = styled.h1`
  color: #ffffff;
`;

const CursorDiv = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(to left, skyblue, blue);
  border-radius: 70%;
  top: 0;
  left: 0;
`;
