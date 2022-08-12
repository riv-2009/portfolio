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
                    <Code>
                        <Box>{snippet}</Box>
                    </Code>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SnippetDrawer;
