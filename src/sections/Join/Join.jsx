const Join = () => {
  return (
    <div
      className="pb-40 flex items-center justify-center"
      style={{
        backgroundImage: "url(/assets/gradient.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "1500px",
      }}
    >
      <div className="flex w-full items-center text-center justify-center">
        <div>
          <h1 className="text-6xl font-semibold text-white leading-normal pt-40">
            <span className="font-extrabold ">Join the community today</span>
          </h1>
          <p className="text-white mt-5 w-full text-lg leading-loose">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac <br />
            turpis at amet. Purus malesuada placerat arcu at enim elit in
            accumsan.
          </p>
          <div className="mt-10 flex gap-5 justify-center items-center text-center">
            <button
              href="/"
              className="font-bold items-center justify-center text-2xl flex w-[263px] h-[74px] border-2 border-blue-600 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition duration-300 ease-in-out"
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
                className="w-7 h-7 ml-2"
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

export default Join;
