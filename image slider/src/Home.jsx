import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setslider] = useState(0);

  const handleplus = () => {
    setslider(slider === imgData.length - 1 ? 0 : slider + 1);
  };
  const handleminus = () => {
    setslider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderclear = setInterval(() => {
      handleplus();
    }, 3000);

    return () => clearInterval(sliderclear);
  }, [slider]);

  return (
    <>
      <div className="mt-[30px]">
        <h1 className="text-[30px] underline text-center font-bold text-black flex justify-center">
          Image Slider
        </h1>
        <div className="w-[90%] mx-auto h-[80vh] my-5 relative ">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img
                src={item.url}
                alt=""
                className="w-full h-[80vh] rounded-2xl object-cover"
              />
            </div>
          ))}
          <div className="w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl"></div>
          <div className="absolute w-full text-[27px] top-[50%] text-center font-semibold text-white flex justify-center">
            <p>Welcome to the world of tasty and fresh food.</p>
          </div>
          <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
            <FaChevronLeft
              size={30}
              className="cursor-pointer"
              onClick={handleminus}
            />
            <FaChevronRight
              size={30}
              className="cursor-pointer"
              onClick={handleplus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
