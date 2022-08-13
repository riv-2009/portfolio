import {
    Heading,
    Box,
    Center,
    Text,
    Link,
    Button,
    Icon,
} from "@chakra-ui/react";

import { AiFillGithub } from "react-icons/ai";
//import { FaTools } from "react-icons/fa";
//import { AiOutlineMail } from "react-icons/ai";


const Header = () => {
    const handleClick = () => {
        window.location.href = "https://github.com/riv-2009";
    };
    return (
        <Box className="header" fontSize="25px">
            <Link id="top-content" />
  
            <Center>
                <Heading as="h1" m={10}>
                    HI, I'm <span className="green">Matt James</span>
                </Heading>
            </Center>
            <Center display={{ md: "flex" }}>
                <Text fontSize="xl" m={10}>
                    I'm a computer science student at{" "}
                    <Link
                        color="purple.300"
                        href="https://www.weber.edu/"
                        isExternal
                    >
                        Weber State
                    </Link>{" "}
                    in Ogden, Utah{" "}
                </Text>
            </Center>
            <Center>
                <Button
                    colorScheme="green"
                    color="green.300"
                    variant="outline"
                    onClick={handleClick}
                >
                    <Icon as={AiFillGithub} color="green.300" /> GitHub
                </Button>
            </Center>
        </Box>
    );
};
export default Header;
