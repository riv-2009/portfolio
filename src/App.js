import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import ProjectData from "./components/projectData";
import Footer from "./components/footer";

const App = () => {
    return (
        <ChakraProvider>
            <Header></Header>
            <ProjectData></ProjectData>
            <Footer></Footer>
        </ChakraProvider>
    );
};

export default App;
