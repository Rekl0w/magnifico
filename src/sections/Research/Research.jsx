const Research = () => {
  return (
    <div className="pb-40 flex">
      <div className="flex justify-around w-6/12 items-center">
        <div>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            <span className="font-extrabold">Improve workflow</span>
          </h1>
          <div className="flex justify-around items-center border rounded-lg h-14">
            <button className="bg-[#F1F4F8] w-full text-center h-full flex items-center justify-center">
              Research
            </button>
            <button className="border-r border-l w-full text-center h-full  flex items-center justify-center">
              Plan
            </button>
            <button className="w-full text-center h-full flex items-center justify-center">
              Design
            </button>
          </div>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque <br /> pellentesque donec et tellus ac varius tortor,
            bibendum. Nulla felis ac turpis <br /> at amet. Purus malesuada
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
          src="/assets/study.svg"
          alt=""
          className=" w-[800px] h-[664px] translate-x-20 translate-y-10"
        />
      </div>
    </div>
  );
};

export default Research;
