const Card = ({ item }) => {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#14CF93]/40 hover:scale-105 transition-all duration-300">
        <img
          src={item.download_url}
          alt={item.author}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-[#14CF93]">
            {item.author}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default Card;
