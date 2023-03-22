import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px]  m-auto mt-[96px] w-full h-screen text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, felxible, financing for
            <Typed
              className="text-gray-500 md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2"
              strings={[" BTB ", " BTC", " SASS "]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>

        <p className="text-gray-500 md:text-2xl text-xl">
          Monitor your data analytics to increase revenue for BTB, BTC, SASS
          platforms.
        </p>

        <button className="bg-[#00df9a] self-center px-6 py-2 rounded-md mt-4 text-black">
          Get started
        </button>
      </div>
    </div>
  );
}
export default Hero;
