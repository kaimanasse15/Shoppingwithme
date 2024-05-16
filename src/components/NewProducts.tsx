import React from 'react';
import ProductCard from './ProductCard';
const productsData =[
{
    img: "/ManWatch.png",
    title: "Men's Watch",
    desc: "Hi",
    rating: 5,
    price: "58.00",
},
{
  img: "/WomenWatch.png",
  title: "Women's Watch",
  desc: "Hi",
  rating: 3,
  price: "58.00",
},
{
  img: "/MenShirt.png",
  title: "Men's Shirt",
  desc: "Hi",
  rating: 3,
  price: "58.00",
},
{
  img: "/WomenShirt.png",
  title: "Women's Shirt",
  desc: "Hi",
  rating: 3,
  price: "58.00",
},
{
  img: "/1.png",
  title: "Men's Pants",
  desc: "Hi",
  rating: 3,
  price: "58.00",
},
{
  img: "/image.png",
  title: "Women's Pants",
  desc: "Hi",
  rating: 3,
  price: "58.00",
},
]
const NewProducts = () => {
  return (  <div><div className="container pt-16">
    <h2 className="font-medium text-2xl pb-4"> New Products</h2>

    <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
    lg:grid-col-3 xl:grid:cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {
            productsData.map((item,index) => (
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}/>
         ))}
    </div>
    </div>
</div>
  );
};

export default NewProducts