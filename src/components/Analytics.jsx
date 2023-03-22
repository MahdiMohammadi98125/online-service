import laptop from "../assets/laptop.jpg";
function ANALYTICS() {
  return (
    <div className="bg-white py-16 px-4 w-full">
      <div className="grid md:grid-cols-2 mx-w-[1240px] mx-auto">
        <img
          src={laptop}
          alt="laptop picture"
          className="w-[400px] mx-auto py-4"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-medium">DATA ANALYTICS DASHBOARD</p>
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-black font-bold mt-4">
            Manage Data Analytics Centerally
          </h1>
          <p className=" text-black mt-4">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document.
          </p>
          <button className="bg-black  self-start px-6 py-2 rounded-md my-6 mx-auto md:mx-0 text-white font-medium">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
export default ANALYTICS;
