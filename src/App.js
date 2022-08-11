import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Projects from "./components/projects";

const App = () => {
    return (
        <ChakraProvider>
            <Header></Header>
            <Projects></Projects>
        </ChakraProvider>
    );
};

export default App;
