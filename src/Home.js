import React from 'react';

import {
  useColorMode,
  Button as ChakraButton,
  Text as ChakraText,
  Heading as ChakraHeading,
} from "@chakra-ui/core";

import {
  Button,
} from './components';

import './Home.css';

function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log({ colorMode });

  return (
    <div class="home">
      <div>
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

      <hr />

      <div>
        <ChakraButton onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </ChakraButton>

        <ChakraText>
          Hello!
        </ChakraText>

        <ChakraHeading>
          Hello!
        </ChakraHeading>
      </div>
    </div>
  );
}

export default Home;
