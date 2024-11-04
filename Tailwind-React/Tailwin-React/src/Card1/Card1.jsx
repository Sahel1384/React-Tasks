/* eslint-disable react/prop-types */

function Card1({ course, teacher, text, image }) {
  return (
    <>
      <div className="w-80 bg-gray-700 rounded-tl-lg rounded-tr-lg pb-5 hover:shadow-allSides duration-500">
        <div>
          <img
            src={image}
            alt=""
            className="w-full h-44 rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="mx-3 flex flex-col items-start">
          <h2 className="text-orange-500 text-lg">{course}</h2>
          <h5 className="text-md text-white">{teacher}</h5>
          <p className="text-white text-sm">{text}</p>
          <button
            type="button"
            className="bg-blue-700 text-white text-xs py-1 px-8 rounded-lg mt-2 hover:bg-blue-600  border-[1px] border-blue-700 hover:border-white  duration-300"
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default Card1;
