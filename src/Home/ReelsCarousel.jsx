import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import reel1 from './reels.png';
import reel2 from './reels.png';
import reel3 from './reels.png';
import reel4 from './reels.png';
import reel5 from './reels.png';

const images = [reel1, reel2, reel3, reel4, reel5];

const ReelsCarousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Force re-initialization on mount to apply responsiveness
    setTimeout(() => {
      sliderRef.current?.slickGoTo(0);
    }, 100);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 2500,
    infinite: true,
    dots: true,
    arrows: false,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="reels-section text-white py-5 bg-black">
      <div className="text-center mb-5">
        <h2 className="reels-title">Inbestors TV</h2>
        <p className="reels-subtitle">
Explore sharp insights and smart moves & curated reelsto empower every<br/> investor's journey.        </p>
      </div>

      <div className="container-fluid px-3 sm:px-4 md:px-5 max-w-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, idx) => (
            <div className="reel-slide" key={idx}>
              <img src={img} alt={`Reel ${idx + 1}`} className="reel-img" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReelsCarousel;
