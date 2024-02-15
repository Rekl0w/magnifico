const Features = () => {
  return (
    <div className="pb-40 flex">
      <div>
        <img
          src="/assets/people.svg"
          alt=""
          className=" w-[800px] h-[664px] translate-x-32 translate-y-10"
        />
      </div>
      <div className="flex justify-around w-7/12 items-center">
        <div>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            <span className="font-extrabold">
              Enjoy your time <br /> working
            </span>
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose">
            Etiam condimentum duis molestie malesuada volutpat pellentesque sed.{" "}
            <br />
            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus
            quis <br /> massa tellus imperdiet aenean nulla id.
          </p>
          <div className="mt-2 flex gap-5">
            <button
              href="/"
              className="font-bold items-center justify-center flex h-14 flex-shrink-0 text-blue-600 rounded-lg transition duration-300 ease-in-out"
            >
              See how it helped others
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
    </div>
  );
};

export default Features;
