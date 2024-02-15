const Workflow = () => {
  return (
    <div
      className="pb-40 flex items-center justify-center"
      style={{
        backgroundImage: "url(/assets/balloons.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "1500px",
      }}
    >
      <div>
        <div className=" w-[800px] h-[664px] translate-x-32 translate-y-10" />
      </div>
      <div className="flex justify-around w-8/12 items-center">
        <div className="mr-40">
          <h1 className="text-6xl font-semibold text-white leading-normal pt-40">
            <span className="font-extrabold ">
              Problems come and <br /> get solved with ease
            </span>
          </h1>
          <p className="text-white mt-5 w-full text-lg leading-loose">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.{" "}
            <br />
            Neque pellentesque donec et tellus ac varius tortor, bibendum.{" "}
            <br /> Nulla felis ac turpis at amet. Purus malesuada placerat arcu
            at <br /> enim elit in accumsan.
          </p>
          <div className="mt-2 flex gap-5">
            <button
              href="/"
              className="font-bold items-center justify-center flex h-14 flex-shrink-0 text-white rounded-lg transition duration-300 ease-in-out"
            >
              Improve workflow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
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
    </div>
  );
};

export default Workflow;
