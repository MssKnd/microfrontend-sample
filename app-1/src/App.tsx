import React from 'react';
import { Box } from '@chakra-ui/react'
import Counter from './components/Counter';

const App = () => {
  return <Box margin="1.2rem">
    <Box>Serving from App-1</Box>
    <Box>
      {/*
        ------------------------------
        This is the exported component 
        ------------------------------
      */}
      <Counter />
    </Box>
  </Box>
};

export default App;