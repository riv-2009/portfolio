import login from "../images/bank-app/login.png";
import signUp from "../images/bank-app/sign-up.png";
import deposit from "../images/bank-app/deposit.png";
import withdraw from "../images/bank-app/withdraw.png";
import transfer from "../images/bank-app/transfer.png";
import transaction from "../images/bank-app/transactions.png";
import gameover from "../images/bank-app/hangman/game-over.png";
import game from "../images/bank-app/hangman/game.png";
import hangmanLogin from "../images/bank-app/hangman/login.png";
import hangmanSignup from "../images/bank-app/hangman/signup.png";
import hangmanResults from "../images/bank-app/hangman/results.png";
import { Heading, Center, Box } from "@chakra-ui/react";
import ProjectContainer from "./projectContainer";
import { useState } from "react";

const Projects = () => {
    const [imgHangmanApp, setHangmanApp] = useState([
        game,
        gameover,
        hangmanResults,
        hangmanLogin,
        hangmanSignup

    ]);
    const [imgBankApp, setImgBankApp] = useState([
        login,
        signUp,
        deposit,
        withdraw,
        transfer,
        transaction,
    ]);
    const hangmanSubTitle =
        "A word game where the goal is to find the missing word or words.";
    const hangmanDesc =
        "A word game where the goal is to find the missing word or words.";
    const bankSubTitle =
        "A simple banking app that allows users to deposit, store and withdraw money into three accounts.";
    const bankDesc =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    
        return (
        <Box m={20}>
            <Center>
                <Heading id="project" m={10} fontWeight="bold">
                    My <span className="green">Projects</span>
                </Heading>
            </Center>
            <hr />
            <ProjectContainer
                id="hangman"
                img={imgHangmanApp}
                title="hangman"
                subTitle={hangmanSubTitle}
                desc={hangmanDesc}
                front="hang-front-end"
                back=""
                code="some code"
                header="some header"
                snippet="hang-snippet"
            ></ProjectContainer>
            <hr />
            <ProjectContainer
                id="bank"
                img={imgBankApp}
                title="bank app"
                subTitle={bankSubTitle}
                desc={bankDesc}
                front="bank-front-end"
                back="bank-back-end"
                code="some code"
                header="some header"
                snippet="bank-snippet"
            ></ProjectContainer>
            <hr />
  
            {/* <ProjectContainer
                id="stock"
                img={imgBankApp}
                title="stock investing practice"
                subTitle={bankSubTitle}
                desc={bankDesc}
            ></ProjectContainer>
            <hr />
            <ProjectContainer
                id="word"
                img={imgBankApp}
                title="word finder"
                subTitle={bankSubTitle}
                desc={bankDesc}
            ></ProjectContainer>
            <hr /> */}
        </Box>
    );
};
export default Projects;
