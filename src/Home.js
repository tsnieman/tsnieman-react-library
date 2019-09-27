import React from 'react';

import {
  Button,
} from './components';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <Button>
        Hello there
      </Button>

      <Button className="hello-world">
        Hello there
      </Button>

      <Button disabled>
        Disabled
      </Button>
    </div>
  );
}

export default Home;
