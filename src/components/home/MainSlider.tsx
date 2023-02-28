import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const MainSlider = () => {
  const PrevArrow = (props: any) => {
    return (
      <SlArrowLeft
        onClick={props.onClick}
        className='xxs:hidden md:block w-8 h-8 absolute text-gray-300 bottom-1/2 left-1 cursor-pointer z-10'
      />
    );
  };

  const NextArrow = (props: any) => {
    return (
      <SlArrowRight
        onClick={props.onClick}
        className='xxs:hidden md:block w-8 h-8 absolute text-gray-300 bottom-1/2 right-1 cursor-pointer'
      />
    );
  };

  const settings: any = {
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToscroll: 1,
    draggable: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoints: 480,
      },
    ],
  };

  return (
    <Slider {...settings} className='relative pb-5 border-b border-gray-200 border-solid'>
      <div>
        <img src='images/slider-1.png' className='rounded-lg' />
      </div>
      <div>
        <img src='images/slider-2.png' className='rounded-lg' />
      </div>
    </Slider>
  );
};

export default MainSlider;