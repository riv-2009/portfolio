import { Center, Button, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { VscSymbolSnippet } from "react-icons/vsc";
import SnippetDrawer from "./snippetDrawer";

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
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={VscSymbolSnippet} color="green.300" />
                            Code Snippet
                        </Button>
                        <Button
                            m={5}
                            w={150}
                            value={front}
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon  as={AiFillGithub} color="green.300" /> Code
                        </Button>
                    </>
                )}
                {back !== "" && (
                    <>
                        <Button
                            value={snippet}
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={VscSymbolSnippet} color="green.300" />
                            Code Snippet
                        </Button>
                        <Button
                            m={5}
                            value={front}
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
                            value={back}
                            border="solid"
                            borderColor="#68D391"
                            color="#68D391"
                            variant="outline"
                            onClick={handleClick}
                        >
                            <Icon as={AiFillGithub} color="green.300" /> Back
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
