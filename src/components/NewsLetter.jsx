function NewsLetter() {
  return (
    <div className="text-white w-full py-16 px-4 ">
      <div className="mx-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="lg:text-4xl md:text-3xl text-2xl py-2">
            Want tips and tricks to optimize your flow
          </h1>
          <p className="">signup to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              className="rounded-md p-3 flex w-full text-black"
              placeholder="enter your email"
            />
            <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium ml-4 my-6 px-6 py-3">
              Get started
            </button>
          </div>
          <p>
            we care about protection of your data Read our
            <span>privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
