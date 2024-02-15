const Footer = () => {
    return (
      <div className="flex justify-around items-center w-full py-20 text-[#475468]">
        <p>
          <span className="font-extrabold text-black">magnifico</span> © 2024. All Rights
          Reserved.
        </p>

        <div className="flex gap-10 items-center">
          <ul className="flex space-x-8">
            <li>
              <button href="/">Terms</button>
            </li>
            <li>
              <button href="/">Privacy</button>
            </li>
            <li>
              <button href="/">Support</button>
            </li>
            <li>
              <button href="/">About</button>
            </li>
            <li>
              <button href="/">Resources</button>
            </li>
            <li>
              <button href="/">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    );
    }

export default Footer;
