import React from "react";
import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {
    const totalItems = React.Children.count(children);

    const settings = {
        dots: false,
        infinite: false, // true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow:Math.min(5, totalItems),
        slidesToScroll: 1,
        arrows: totalItems > 5
    }

    return (
        <div>
            <Slider {...settings} >
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;
