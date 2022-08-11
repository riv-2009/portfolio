import login from "../images/bank-app/login.png";
import signUp from "../images/bank-app/sign-up.png";
import deposit from "../images/bank-app/deposit.png";
import withdraw from "../images/bank-app/withdraw.png";
import transfer from "../images/bank-app/transfer.png";
import transaction from "../images/bank-app/transactions.png";
import { Heading, Center, Box } from "@chakra-ui/react";
import ProjectContainer from "./projectContainer";
import { useState } from "react";

const Projects = () => {
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
                <Heading m={10} fontWeight="bold">
                    My <span className="green">Projects</span>
                </Heading>
            </Center>

            <ProjectContainer
                img={imgBankApp}
                title="bank app"
                subTitle={bankSubTitle}
                desc={bankDesc}
            ></ProjectContainer>
            {/* <ProjectContainer img={login} title="Bank app" subTitle={bankSubTitle} desc={bankDesc}></ProjectContainer>
            <ProjectContainer img={signUp} title="Bank app" subTitle={bankSubTitle} desc={bankDesc}></ProjectContainer>
            <ProjectContainer img={login} title="Bank app" subTitle={bankSubTitle} desc={bankDesc}></ProjectContainer> */}
        </Box>
    );
};
export default Projects;
