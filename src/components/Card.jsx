import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
function Card() {
  return (
    <div className="bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 w-full">
          <img
            src={single}
            className="w-20 mx-auto mt-[-3rem] bg-white alt='/'"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">149$</p>

          <div className="text-center font-medium">
            <p className="mx-8 py-2 border-b mt-8">500 GB storage</p>
            <p className="mx-8 py-2 border-b">1 Granted user</p>
            <p className="mx-8 py-2 border-b">send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium ml-4 my-6 px-6 py-3  ">
              Start trial
            </button>
          </div>
        </div>

        <div className="shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300 w-full md:my-0 my-8 bg-gray-100">
          <img
            src={double}
            className="w-20 mx-auto mt-[-3rem] bg-transparent alt='/'"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">149$</p>

          <div className="text-center font-medium">
            <p className="mx-8 py-2 border-b mt-8">500 GB storage</p>
            <p className="mx-8 py-2 border-b">1 Granted user</p>
            <p className="mx-8 py-2 border-b">send up to 2 GB</p>
            <button className="bg-[#000] w-[200px] text-white rounded-md font-medium ml-4 my-6 px-6 py-3  ">
              Start trial
            </button>
          </div>
        </div>

        <div className="shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 w-full">
          <img
            src={triple}
            className="w-20 mx-auto mt-[-3rem] bg-white alt='/'"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">149$</p>

          <div className="text-center font-medium">
            <p className="mx-8 py-2 border-b mt-8">500 GB storage</p>
            <p className="mx-8 py-2 border-b">1 Granted user</p>
            <p className="mx-8 py-2 border-b">send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium ml-4 my-6 px-6 py-3  ">
              Start trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
