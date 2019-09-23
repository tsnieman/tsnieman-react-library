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

      <Button variant="primary">
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <div data-theme="dark">
        <Button>
          Dark theme
        </Button>

        <Button variant="primary">
          Primary
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>
    </div>
  );
}

export default Home;
