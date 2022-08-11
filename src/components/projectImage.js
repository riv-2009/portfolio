import { Image } from "@chakra-ui/react";

const ProjectImage = ({ img, desc }) => {
    return (
        <>
            <Image
                className="image"
                borderRadius="lg"
                width={{ md: 80, lg: 600 }}
                src={img}
                alt={desc}
                border="solid"
                borderColor="gray.300"
            />
        </>
    );
};
export default ProjectImage;
