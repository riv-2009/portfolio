import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink,Icon,Link } from "@chakra-ui/react";

const Navbar = () =>{
    return(
        <>
                  <Breadcrumb spacing="8px" separator=""  className="nav">
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <Icon m={1} as={BsCodeSlash} />{" "}
                        <Menu >
                            <MenuButton fontWeight="bold">Projects</MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() =>
                                        console.log("hangman clicked")
                                    }
                                >
                                    <Link href="#hangman-content">Hangman</Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={() =>
                                        console.log("bank app clicked")
                                    }
                                >
                                    <Link href="#bank-content">Bank App</Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={() =>
                                        console.log("stock investing clicked")
                                    }
                                >
                                    <Link href="#stock-content">
                                        Stock Investing Practice
                                    </Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => console.log("word clicked")}
                                >
                                    <Link href="#word-content">
                                        Word Finder
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* <BreadcrumbItem >
                    <BreadcrumbLink fontWeight="bold" href="#">
                        <Icon m={1} as={FaTools} /> Skills
                    </BreadcrumbLink>
                </BreadcrumbItem >
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontWeight="bold" href="#">
                        <Icon m={1} as={AiOutlineMail} /> Contact
                    </BreadcrumbLink>
                </BreadcrumbItem> */}
            </Breadcrumb>
        </>
    );
}
export default Navbar;