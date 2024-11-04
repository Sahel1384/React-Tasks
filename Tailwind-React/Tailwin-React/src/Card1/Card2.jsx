/* eslint-disable react/prop-types */
function Card2(props) {
  const { ingredients, text, image } = props;
  const paresed =
    typeof ingredients === "string" ? JSON.parse(ingredients) : ingredients;
  return (
    <div className="w-80 bg-gray-700 rounded-tl-lg rounded-tr-lg pb-5 hover:shadow-allSides duration-500">
      <div>
        <img
          src={image}
          alt=""
          className="w-full h-44 rounded-tl-lg rounded-tr-lg"
        />
        <div className="mx-2">
          <p className="text-white text-sm">{text}</p>
          {paresed.map((all, index) => {
            return (
              <ul key={index}>
                <li className="border border-white-1 rounded-md mt-1 px-2 text-sm py-1 text-orange-300 hover:bg-gray-600 duration-300 cursor-pointer">
                  {all}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card2;
