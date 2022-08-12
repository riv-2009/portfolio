import { Center, Button, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { VscSymbolSnippet } from "react-icons/vsc";
import SnippetDrawer from "./snippetDrawer";
import { BsCodeSlash } from "react-icons/bs";

const ProjectButtons = ({
    handleClick,
    front,
    back,
    snippet,
    code,
    header,
    isOpen,
    onClose,
}) => {
    return (
        <>
            <Center mt={5} mb={50}>
                {back === "" && (
                    <>
                        <Button
                            value={snippet}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={() => {
                                window.location.href =
                                    "https://mj3750.epizy.com/hangman/login.php?i=1";
                            }}
                        >
                            <Icon as={BsCodeSlash} color="green.400" />
                            Hangman Game
                        </Button>
                        <Button
                            m={5}
                            value={snippet}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={VscSymbolSnippet} color="green.400" />
                            Code Snippet
                        </Button>
                        <Button
                            w={150}
                            value={front}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.400" /> Code
                        </Button>
                    </>
                )}
                {back !== "" && (
                    <>
                        <Button
                            value={snippet}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={VscSymbolSnippet} color="green.400" />
                            Code Snippet
                        </Button>
                        <Button
                            m={5}
                            value={front}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.400" /> Front
                            End Code
                        </Button>
                        <Button
                            value={back}
                            border="solid"
                            borderColor="#38A169"
                            color="#38A169"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.400" /> Back
                            End Code
                        </Button>
                    </>
                )}
            </Center>
            <SnippetDrawer
                isOpen={isOpen}
                onClose={onClose}
                header={header}
                snippet={code}
            ></SnippetDrawer>
        </>
    );
};
export default ProjectButtons;
