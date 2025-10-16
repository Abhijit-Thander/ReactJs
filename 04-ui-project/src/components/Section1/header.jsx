import React from "react";
import LeftText from "./LeftText";
import ImgCards from "./ImgCards";

const Header = () => {
  const cardInfo = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      btnText: "Satisfied",
      btnBg: "bg-green-500",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1625418343484-97ccbb756886?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      btnText: "UnderServed",
      btnBg: "bg-yellow-500",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1615292026763-3af006e59a67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxpbmRpYW4lMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      btnText: "UnderBanked",
      btnBg: "bg-red-500",
    },
  ];
  return (
    <div className="flex py-10 justify-around h-full ">
      <LeftText />
      {cardInfo.map((card, index) => (
        <ImgCards
          key={index}
          imgUrl={card.imgUrl}
          btnText={card.btnText}
          btnBg={card.btnBg}
        />
      ))}
    </div>
  );
};

export default Header;
