import { Image } from "@chakra-ui/react";
import {useState} from "react";

const ProjectImage = ({ img, desc }) => {
    const [imgWidth, setImgWidth] = useState(600)
    return (
        <>
            <Image
                className="image"
                borderRadius="lg"
                width={{ md: 80, lg: imgWidth }}
                src={img}
                alt={desc}
                border="solid"
                onMouseEnter={()=>{ setImgWidth(1000)}}
                onMouseLeave={()=>{ setImgWidth(600)}}
                borderColor="gray.300"
            />
        </>
    );
};
export default ProjectImage;
