import {
    Box,
    Text,
    Center,
    Grid,
    GridItem,
    useDisclosure,
} from "@chakra-ui/react";
import ProjectButtons from "./projectButtons";
import SimpleSlider from "./simpleSlider";
import cSharp from "./logos/c#.png";
import bootstrap from "./logos/bootstrap.jpg";
import chakra from "./logos/chakra.jpg";
import js from "./logos/javascript.png";
import material from "./logos/material.png";
import mysql from "./logos/mysql.png";
import php from "./logos/php.png";
import react from "./logos/react.png";
import MadeWithLogo from "./madeWithLogo";
import ef from "./logos/ef.jpg";
import { useState } from "react";

const ProjectContainer = ({
    img,
    title,
    subTitle,
    desc,
    front,
    back,
    code,
    header,
    snippet,
}) => {
    const [bankLogos, setBankLogos] = useState([
        cSharp,
        ef,
        mysql,
        react,
        bootstrap,
        js,
    ]);
    const [stockLogos, setStockLogos] = useState([
        cSharp,
        ef,
        mysql,
        react,
        bootstrap,
        js,
        material,
    ]);
    const [wordLogos, setWordLogos] = useState([
        cSharp,
        ef,
        mysql,
        react,
        chakra,
        js,
    ]);
    const [hangLogos, setHangLogos] = useState([php, mysql, bootstrap, js]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = (e) => {
        switch (e.target.value) {
            case "hang-front-end":
                window.location.href =
                    "https://github.com/riv-2009/hangman";
                break;
            case "hang-snippet":
                onOpen();
                break;
            case "bank-front-end":
                window.location.href =
                    "https://github.com/riv-2009/bankproject-ui";
                break;
            case "bank-back-end":
                window.location.href =
                    "https://github.com/riv-2009/bankproject-back-end";
                break;
            case "bank-snippet":
                onOpen();
                break;
        }
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
                <SimpleSlider img={img} alt=""></SimpleSlider>
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
                        display="inline"
                        color="gray.500"
                        fontWeight="bold"
                        fontSize="lg"
                    >
                        Made with:
                    </Text>
                    {title == "hangman" && (
                        <MadeWithLogo logos={hangLogos}></MadeWithLogo>
                    )}
                    {title == "bank app" && (
                        <MadeWithLogo logos={bankLogos}></MadeWithLogo>
                    )}
                    {title == "stock investing practice" && (
                        <MadeWithLogo logos={stockLogos}></MadeWithLogo>
                    )}
                    {title == "word finder" && (
                        <MadeWithLogo logos={wordLogos}></MadeWithLogo>
                    )}
                </GridItem>
                <GridItem colSpan={3}>
                    <Text mt={3} color="gray.500">
                        {desc}
                    </Text>
                </GridItem>
            </Grid>
            <ProjectButtons
                handleClick={handleClick}
                front={front}
                back={back}
                snippet={snippet}
                code={code}
                header={header}
                isOpen={isOpen}
                onClose={onClose}
            ></ProjectButtons>
        </>
    );
};
export default ProjectContainer;


