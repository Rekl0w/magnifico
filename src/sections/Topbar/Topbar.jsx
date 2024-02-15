export default function Topbar() {
  return (
    <div className="bg-white fixed w-full border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <button href="/">
              <h1 className="text-4xl font-bold">magnifico</h1>
            </button>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li className="flex ">
                <button href="/" className="font-semibold">
                  Products
                </button>
                <img src="/assets/down.png" alt="" />
              </li>
              <li className="flex ">
                <button href="/" className="font-semibold">
                  Solutions
                </button>
                <img src="/assets/down.png" alt="" />
              </li>
              <li className="flex ">
                <button href="/" className="font-semibold">
                  Services
                </button>
                <img src="/assets/down.png" alt="" />
              </li>
              <li className="flex ">
                <button href="/" className="font-semibold">
                  Help Center
                </button>
                <img src="/assets/down.png" alt="" />
              </li>
              <li>
                <button href="/" className="font-semibold">
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-10 items-center">
              <li>
                <button href="/" className="text-blue-600  font-bold">
                  Log In
                </button>
              </li>
              <li>
                <button
                  href="/"
                  className="font-bold items-center justify-center flex h-14 border-2 border-blue-600 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition duration-300 ease-in-out"
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
