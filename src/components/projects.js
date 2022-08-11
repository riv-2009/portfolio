import logo from "../images/glacier.jpg";
import {
    Heading,
    Box,
    Center,
    Text,
    Link,
    Button,
    Icon,
    Image,
} from "@chakra-ui/react";

const Projects = () => {
    return (
        <>
            <Center>
                {" "}
                <Heading m={10} fontWeight="bold">
                    My <span className="green">Projects</span>
                </Heading>
            </Center>
            <Image
                marginLeft="10%"
                marginTop={25}
                borderRadius="md"
                boxSize="25%"
                src={logo}
                alt="Matt"
            />{" "}
                        <Image
                marginLeft="10%"
                marginTop={25}
                borderRadius="md"
                boxSize="25%"
                src={logo}
                alt="Matt"
            />{" "}
                        <Image
                marginLeft="10%"
                marginTop={25}
                borderRadius="md"
                boxSize="25%"
                src={logo}
                alt="Matt"
            />{" "}
                        <Image
                marginLeft="10%"
                marginTop={25}
                borderRadius="md"
                boxSize="25%"
                src={logo}
                alt="Matt"
            />{" "}
        </>
    );
};
export default Projects;
