import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ProjectImage from "./projectImage";
import { Box, Center } from "@chakra-ui/react";

export default function SimpleSlider({ img, alt }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {img.map((img) => (
                <Box key={img}>
                    <Center>
                        <ProjectImage img={img} alt={alt}></ProjectImage>
                    </Center>
                </Box>
            ))}
        </Slider>
    );
}
