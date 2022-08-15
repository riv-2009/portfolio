import { Heading, Center, Box, Link } from "@chakra-ui/react";
import ProjectContainer from "./projectLayout";
import hangman from "../data/hangman";
import bankApp from "../data/bankApp";
import stockApp from "../data/stock";
import wordApp from "../data/word";

const ProjectData = () => {
    return (
        <Box m={20}>
            <Center>
                <Heading id="project" m={10} fontWeight="bold">
                    My <span className="green">Projects</span>
                </Heading>
            </Center>

            <Link id="hangman-content"></Link>
            <ProjectContainer
                id="hangman"
                img={hangman[0].images}
                title={hangman[0].title}
                subTitle={hangman[0].subtitle}
                desc={hangman[0].desc}
                front="hang-front-end"
                back=""
                code={hangman[0].snippets}
                header="Hangman code snippets"
                snippet="hang-snippet"
            ></ProjectContainer>
            <Link id="bank-content"></Link>
            <ProjectContainer
                id="bank"
                img={bankApp[0].images}
                title="bank app"
                subTitle={bankApp[0].subtitle}
                desc={bankApp[0].desc}
                front="bank-front-end"
                back="bank-back-end"
                code={bankApp[0].snippets}
                header="Bank app code snippets"
                snippet="bank-snippet"
            ></ProjectContainer>

            <Link id="stock-content"></Link>
            <ProjectContainer
                id="stock"
                img={stockApp[0].images}
                title="stock investing practice"
                subTitle={stockApp[0].subtitle}
                desc={stockApp[0].desc}
                front="stock-front-end"
                back="stock-back-end"
                code={stockApp[0].snippets}
                header="Stock Investing Practice code snippets"
                snippet="stock-snippet"
            ></ProjectContainer>
            <Link id="word-content"></Link>
            <ProjectContainer
                id="word"
                img={wordApp[0].images}
                title="word finder"
                subTitle={wordApp[0].subtitle}
                desc={wordApp[0].desc}
                front="word-front-end"
                back="word-back-end"
                code={wordApp[0].snippets}
                header="Word Finder code snippets"
                snippet="word-snippet"
            ></ProjectContainer>
        </Box>
    );
};
export default ProjectData;
