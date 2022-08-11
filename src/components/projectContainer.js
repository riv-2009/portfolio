import {
    Box,
    Text,
    Center,
    Grid,
    GridItem,
    Image,
    Button,
    Icon,
} from "@chakra-ui/react";
import SimpleSlider from "./simpleSlider";
import cSharp from "./logos/c#.png";
import bootstrap from "./logos/bootstrap.jpg";
import chakra from "./logos/chakra.jpg";
import js from "./logos/javascript.png";
import material from "./logos/material.png";
import mysql from "./logos/mysql.png";
import php from "./logos/php.jpg";
import react from "./logos/react.png";
import MadeWithLogo from "./madeWithLogo";
import ef from "./logos/ef.jpg";
import { useState } from "react";
import { AiFillGithub, } from "react-icons/ai";
import { VscSymbolSnippet } from "react-icons/vsc";

const ProjectContainer = ({ img, title, subTitle, desc }) => {
    const [bankLogos, setBankLogos] = useState([
        cSharp,
        ef,
        mysql,
        react,
        bootstrap,
        js,
    ]);
    const handleClick = (e) => {
        alert(e.target.value + " click");
    };
    return (
        <>
            <Center mt={50}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="green.300"
                >
                    {title}
                </Text>
            </Center>
            <Box>
                <SimpleSlider img={img} alt="bank-app"></SimpleSlider>
            </Box>

            <Center mt={10}>
                <Text
                    mt={1}
                    fontSize="xl"
                    lineHeight="normal"
                    fontWeight="semibold"
                >
                    {subTitle}
                </Text>
            </Center>

            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2} mt={5}>
                    <Text
                        m={5}
                        color="gray.500"
                        fontWeight="bold"
                        fontSize="lg"
                    >
                        Made with:
                        <MadeWithLogo logos={bankLogos}></MadeWithLogo>
                    </Text>
                </GridItem>
                <GridItem colSpan={3}>
                    <Text mt={3} color="gray.500">
                        {desc}
                    </Text>
                    <Center mt={5}>
                        <Button
                            value="snippet"
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={VscSymbolSnippet} color="green.300" />
                            Code Snippets
                        </Button>
                        <Button
                            m={5}
                            value="front-end"
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.300" /> Front
                            End Code
                        </Button>
                        <Button
                            value="back-end"
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.300" /> Back
                            End Code
                        </Button>
                    </Center>
                </GridItem>
            </Grid>
        </>
    );
};
export default ProjectContainer;
