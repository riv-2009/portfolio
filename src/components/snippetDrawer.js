import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
} from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";

const SnippetDrawer = ({ onClose, isOpen, header, snippet }) => {
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{header}</DrawerHeader>
                <hr />
                <DrawerBody>
                    {snippet.map((code,index) => (
                        <Box key={index}>
                            <pre>
                                {" "}
                                <Code m={5}>{code}</Code>
                            </pre>
                        </Box>
                    ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SnippetDrawer;
