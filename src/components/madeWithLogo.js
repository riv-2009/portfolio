import { Image, Box } from "@chakra-ui/react";
const MadeWithLogo = ({ logos }) => {
    return (
        <>
            {logos.map((logos) => (
                <Box key={logos} display="inline">
                    <Image
                        m={2}
                        className="image"
                        display="inline"
                        borderRadius="lg"
                        width="40px"
                        height="40px"
                        src={logos}
                    />
                </Box>
            ))}
        </>
    );
};
export default MadeWithLogo;
