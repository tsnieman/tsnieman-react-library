import React from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div>
      <Button>
        Hello there
      </Button>

      <Button className="hello-world">
        Hello there
      </Button>
    </div>
  );
}

export default App;
