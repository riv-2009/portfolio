import { Box, Center, Link, Icon, Text } from "@chakra-ui/react";
import { FiFacebook } from "react-icons/fi";
import {
    BsInstagram,
    BsTwitter,
    BsLinkedin,
    BsArrowUpCircle,
} from "react-icons/bs";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <Box id="footer">
                <Box id="contactIcons">
                    <Center>
                        {" "}
                        <Text color="#FFFFFF" fontSize={20} fontWeight="bold">
                            {" "}
                            You can reach me at ...
                        </Text>
                    </Center>

                    <Center>
                        <Box>
                            <Icon
                                as={FiFacebook}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                            <Icon
                                as={BsInstagram}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                            <Icon
                                as={BsTwitter}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                            <Icon
                                as={BsLinkedin}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                            <Icon
                                as={AiFillGithub}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                            <Icon
                                as={AiOutlineMail}
                                color="#48BB78"
                                fontSize={40}
                                m={2}
                            />
                        </Box>
                    </Center>
                    <Icon
                        id="uparrow"
                        as={BsArrowUpCircle}
                        color="#FFFFFF"
                        fontSize={30}
                        m={2}
                    />
                </Box>
            </Box>
        </>
    );
};
export default Footer;
