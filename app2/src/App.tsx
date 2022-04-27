
import React from 'react';
import { Box } from '@chakra-ui/react'
import Counter from './components/Counter';

const App = () => {
  return <Box margin="1.2rem">
    {/*
      Cosmetic change from app-1/src/App.tsx
    */}
    <Box>Serving from App-2</Box>
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
