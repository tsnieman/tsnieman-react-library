import React from 'react';

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

import {
  Button,
} from './components';

import logo from './logo.svg';

import './Home.css';

function Home({
  toggleTheme,
}) {
  return (
    <div className="home">
      <Button onClick={toggleTheme}>
        Hello there
      </Button>

      <hr />
      <hr />

      <Box
        width={256}
        bg='background'
      >
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}
        >
          <Image src={logo} />

          <Box>
            <Heading
              as="h3"
              color="text"
            >
              Some title
            </Heading>

            <Text
              color="text"
              fontSize={0}
            >
              Some description
            </Text>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Home;
