import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import ProjectData from "./components/projectData";

const App = () => {
    return (
        <ChakraProvider>
            <Header></Header>
            <ProjectData></ProjectData>
        </ChakraProvider>
    );
};

export default App;
