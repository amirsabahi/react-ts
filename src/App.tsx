import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { Provider as JotaiProvidor } from "jotai";
export function App() {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvidor>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </JotaiProvidor>
    </ChakraProvider>
  );
}
