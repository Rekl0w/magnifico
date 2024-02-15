const Banner = () => {
  return (
    <div className="pt-40 pb-40 ">
      <div className="flex justify-around w-full items-center px-56">
        <div>
          <h1 className="text-8xl font-semibold text-[#1D1E28] leading-normal">
            <span className="font-extrabold">
              Team projects, <br /> done well
            </span>
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            The only platform that gives your team all the tools needed to work{" "}
            <br /> together on their awesome projects.
          </p>
          <div className="mt-10 flex gap-5">
            <div className="relative w-full">
              <img
                src="/assets/mail.png"
                alt="Work Email"
                className="absolute left-3 top-1/2 transform -translate-y-2.5 h-6 w-6"
              />
              <input
                type="text"
                placeholder="Enter work email"
                className="border-2 rounded-lg w-full h-full pl-12 placeholder:text-black"
              />
            </div>

            <button
              href="/"
              className="font-bold items-center justify-center flex h-14 border-2 flex-shrink-0 border-blue-600 bg-blue-600 text-white px-6 rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition duration-300 ease-in-out"
            >
              Sign Up Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 ml-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <img src="/assets/brands.svg" alt="" className="mt-5 w-full" />
        </div>
        <div>
          <img
            src="/assets/banner.svg"
            alt="banner"
            className="w-[800px] h-[640px] translate-x-32 translate-y-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
