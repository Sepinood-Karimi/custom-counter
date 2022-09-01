import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import MultipleTwoCounter from "./components/MultipleTwoCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
        <MultipleTwoCounter/>
    </React.Fragment>
  );
}

export default App;
