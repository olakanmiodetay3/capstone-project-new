import { Link } from "react-router-dom";
import { Buttons } from "../../../../components/button";
function Header() {
  return (
    <div className="relative">
      <img
        className="background-image object-cover"
        src={`${process.env.PUBLIC_URL}/assets/header-bg.png`}
        alt="header"
      />
      <div className="absolute overlay inset-0"></div>
      <div className="absolute inset-0 lg:flex lg:flex-col lg:justify-center text-white mx-2 lg:mx-auto lg:w-1/3 content">
        <h2 className="text-base lg:text-2xl lg:font-semibold text-center lg:text-left">
          Welcome to Chatter: A Haven for Text-Based Content
        </h2>
        <p className="text-white my-1 lg:my-4 text-sm text-center lg:text-left">
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link to="/signup">
            {" "}
            <Buttons
              content="Get started"
              styles="bg-blue text-white rounded px-3 py-2 text-sm font-semibold"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
