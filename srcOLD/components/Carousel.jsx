import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../components/Carousel/1.png";
import img2 from "../components/Carousel/2.png";
import img3 from "../components/Carousel/3.png";
import img4 from "../components/Carousel/4.png";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const images = [img1, img2, img3, img4];

  return (
    <Carousel
      activeIndex={currentSlide}
      onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-75" src={image} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
