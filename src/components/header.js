import {
    Heading,
    Box,
    Center,
    Text,
    Link,
    Button,
    Icon,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Header = () => {
    const handleClick = () => {
        window.location.href = "https://github.com/riv-2009";
    };
    return (
        <Box className="header" fontSize="25px">
            <Breadcrumb spacing="8px" separator="" align="right">
                <BreadcrumbItem >
                    <BreadcrumbLink>
                        <Icon m={1} as={BsCodeSlash} />{" "}
                        <Menu>
                            <MenuButton fontWeight="bold">Projects</MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() =>
                                        console.log("hangman clicked")
                                    }
                                >
                                    Hangman
                                </MenuItem>
                                <MenuItem onClick={() => console.log("bank app clicked")}>
                                    Bank App
                                </MenuItem>
                                <MenuItem onClick={() => console.log("stock investing clicked")}>
                                    Stock Investing Practice
                                </MenuItem>
                                <MenuItem onClick={() => console.log("word clicked")}>
                                    Word Finder
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* <BreadcrumbItem >
                    <BreadcrumbLink fontWeight="bold" href="#">
                        <Icon m={1} as={FaTools} /> Skills
                    </BreadcrumbLink>
                </BreadcrumbItem >
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontWeight="bold" href="#">
                        <Icon m={1} as={AiOutlineMail} /> Contact
                    </BreadcrumbLink>
                </BreadcrumbItem> */}
            </Breadcrumb>
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
