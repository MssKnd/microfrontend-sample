
import { Text, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex gap="1rem" direction="column">
      <Text>
        {/*
          Cosmetic Change 1
        */}
        Add by two each click <strong>APP-2</strong>            
      </Text>
      <Text>Your click count : {count} </Text>
      {/*
        Cosmetic Change 2
      */}
      <Button onClick={() => setCount(count + 2)}>Click me</Button>
    </Flex>
  );
};

export default Counter;
