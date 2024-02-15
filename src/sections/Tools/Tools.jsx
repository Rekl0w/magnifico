const Tools = () => {
  return (
    <div className="pb-40 flex">
      <div className="flex justify-around w-7/12 items-center">
        <div>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            <span className="font-extrabold">
              Get all the tools your <br /> team needs
            </span>
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque <br /> donec et tellus ac varius tortor,
            bibendum. Nulla felis ac turpis at amet. Purus <br /> malesuada
            placerat arcu at enim elit in accumsan.
          </p>
          <div className="mt-2 flex gap-5">
            <button
              href="/"
              className="font-bold items-center justify-center flex h-14 flex-shrink-0 text-blue-600 rounded-lg transition duration-300 ease-in-out"
            >
              Check the tools
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
        </div>
      </div>
      <div>
        <img
          src="/assets/tools.svg"
          alt=""
          className=" w-[800px] h-[640px] translate-y-10"
        />
      </div>
    </div>
  );
};

export default Tools;
