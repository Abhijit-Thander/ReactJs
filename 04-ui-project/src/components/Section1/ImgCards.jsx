const ImgCards = ({ imgUrl, btnText, btnBg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={`bg-cover  h-[80%] w-72 rounded-4xl p-4 relative overflow-hidden`}
    >
      <div className="backdrop-blur-[3px] absolute bottom-0 left-0 w-full h-1/2 p-4 bg-transparent-to-black  flex flex-col">
        <p className="text-zinc-300 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          nobis laudantium quam!
        </p>
        <button
          className={`mt-10 w-1/2 py-2 text-white font-semibold ${btnBg} rounded-lg`}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ImgCards;
