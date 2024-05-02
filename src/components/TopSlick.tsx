"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
const TopSlick = () => {

var settings ={
dots: true,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
pauseOnHover: false,
};

const SlideData = [
    {
    id: 0,
    img: "/banner1.jpg",
    title: "Trending Item",
    mainTitle: "WOMEN'S LASTEST FASHION SALE",
    price: "$20",
    },
    {
    id: 1,
    img: "/banner2.jpg",
    title: "Trending Item",
    mainTitle: "Men'S LASTEST FASHION SALE",
    price: "$30",
    },
    {
      id: 3,
      img: "/banner2.jpg",
      title: "Trending Item",
      mainTitle: "Hot Offer",
      price: "$30",
      },
]
return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {SlideData.map((item) => (
            <Slide
            key={item.id}
            img={item.img} 
            title={item.title}
            mainTile={item.mainTitle}
            price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default TopSlick;