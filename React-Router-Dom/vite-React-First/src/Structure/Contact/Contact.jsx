function Contact() {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <form action="" className="bg-amber-600 w-[700px] mt-5 p-20">
          <div className="flex justify-center mt-4 gap-2">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="border border-1 border-gray-400 text-sm py-2 px-2 w-64 rounded-md hover:border-black duration-300 outline-none focus:border-black"
                placeholder="Enter Your Password"
              />
              <input
                type="text"
                className="border border-1 border-gray-400 text-sm py-2 px-2 w-64 rounded-md hover:border-black duration-300 outline-none focus:border-black"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="border border-1 border-gray-400 text-sm py-2 px-2 w-64 rounded-md hover:border-black duration-300 outline-none focus:border-black"
                placeholder="Enter Email"
              />
              <input
                type="text"
                className="border border-1 border-gray-400 text-sm py-2 px-2 w-64 rounded-md hover:border-black duration-300 outline-none focus:border-black"
                placeholder="Password Confirmation"
              />
            </div>
          </div>
          <div className="flex justify-center mt-1">
            <textarea
              name=""
              className="w-[520px] h-20 text-sm px-2 py-1 rounded-md border border-gray-400 hover:border-black duration-300 outline-none focus:border-black"
              id=""
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <div className="flex justify-center mt-3">
            <button className="bg-orange-800 py-1 px-2 rounded-sm text-white text-sm hover:bg-orange-600 duration-300">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
