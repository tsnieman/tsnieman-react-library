import React from 'react';

import {
  Button,
} from './components';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Default theme</h1>

        <Button>
          Default
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

        <br />
        <br />

        <Button loading>
          Default
        </Button>

        <Button variant="primary" loading>
          Primary
        </Button>

        <Button variant="secondary" loading>
          Secondary
        </Button>

        <Button variant="outline" loading>
          Outline
        </Button>
      </div>

      <div data-theme="dark">
        <h1>Dark theme</h1>

        <Button>
          Default
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

        <br />
        <br />

        <Button loading>
          Default
        </Button>

        <Button variant="primary" loading>
          Primary
        </Button>

        <Button variant="secondary" loading>
          Secondary
        </Button>

        <Button variant="outline" loading>
          Outline
        </Button>
      </div>

      <div className="sizes">
        <h1>Sizes</h1>

        <h2>
          Small
        </h2>

        <div data-size="0.5x">
          <Button>
            Default
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

        <div data-size="1x">
          <Button>
            Default
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

        <div data-size="2x">
          <Button>
            Default
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
    </div>
  );
}

export default Home;
