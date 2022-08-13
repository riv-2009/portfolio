import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import ProjectData from "./components/projectData";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const App = () => {
    return (
        <ChakraProvider>
            <Navbar></Navbar>
            <Header></Header>
            <ProjectData></ProjectData>
            <Footer></Footer>
        </ChakraProvider>
    );
};

export default App;
