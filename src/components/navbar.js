import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { Icon, Link, Box } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Box className="nav">
            <Icon m={1} as={BsCodeSlash} />{" "}
            <Menu>
                <MenuButton fontWeight="bold">Projects</MenuButton>
                <MenuList>
                    <MenuItem onClick={() => console.log("hangman clicked")}>
                        <Link href="#hangman-content">Hangman</Link>
                    </MenuItem>
                    <MenuItem onClick={() => console.log("bank app clicked")}>
                        <Link href="#bank-content">Bank App</Link>
                    </MenuItem>
                    <MenuItem
                        onClick={() => console.log("stock investing clicked")}
                    >
                        <Link href="#stock-content">
                            Stock Investing Practice
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={() => console.log("word clicked")}>
                        <Link href="#word-content">Word Finder</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};
export default Navbar;
