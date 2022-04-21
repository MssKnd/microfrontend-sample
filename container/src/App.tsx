import { Box, Center, Flex, Heading, Image, Link, Spinner, Text } from "@chakra-ui/react";
import React from "react";

/*
  --------------------------
  We are using React.lazy to perform
  asynchronously loading of remote 
  components.
  --------------------------
*/

const CounterApp1 = React.lazy(() => import('app1/CounterApp1'));
const CounterApp2 = React.lazy(() => import('app2/CounterApp2'));

const version = 1;

const App = () => {
return (
<>
  <Center
    height="100vh"
    width="100%"
    backgroundColor="#1B1A29"
    margin="0"
    p="0"
    flexDirection="column"
  >
    <Box color="#fff" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
      Latest Build Date: <Text fontWeight="bold">{version}</Text>
    </Box>
    <Flex
      border="1px solid #151421"
      borderRadius="1rem"
      height="50vh"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      padding="5rem"
      backgroundColor="#6F60EA"
    >

      <Heading color="#fff">CONTAINER</Heading>
      <Flex direction="row" justifyContent="space-around">

        {/* 
          --------------------------
          We are using React.Suspense which 
          will render a Spinner component while
          waiting for the remote component to
          load.
          -------------------------- 
        */}
        
        <React.Suspense fallback={<Spinner size="xl" />}>
          <Box
            p="2rem"
            mr="2rem"
            border="1px solid #aeaeae"
            borderRadius="1rem"
            backgroundColor="#fff"
          >
            <Heading color="#6F60EA" mb="1rem">
              APP-1
            </Heading>
            {/* 
              -------------------------- 
              This is a remote component
              -------------------------- 
            */}
            <CounterApp1 />
          </Box>
        </React.Suspense>
      
        {/* 
          --------------------------
          We are using React.Suspense which 
          will render a Spinner component while
          waiting for the remote component to
          load.
          -------------------------- 
        */}

        <React.Suspense fallback={<Spinner size="xl" />}>
        <Box
            p="2rem"
            mr="2rem"
            border="1px solid #aeaeae"
            borderRadius="1rem"
            backgroundColor="#fff"
          >
            <Heading color="#6F60EA" mb="1rem">
              APP-2
            </Heading>
            {/* 
              -------------------------- 
              This is a remote component
              -------------------------- 
            */}
            <CounterApp2 />
          </Box>
        </React.Suspense>

      </Flex>
    </Flex>
  </Center>
</>
);
}

export default App;