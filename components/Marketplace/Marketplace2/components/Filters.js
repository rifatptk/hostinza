export default function Filters() {
  return (
    <div className="flex w-full justify-between mt-10">
      <div className="flex w-1/2">
        <select className="block mr-3 px-3 py-1.5 text-base font-light text-dark-blue-2  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-dark-blue-3 focus:bg-white focus:border-blue-600 focus:outline-none relative">
          <option selected>Category</option>
          <option>Option 2</option>
        </select>
        <select className="block mr-3 px-3 py-1.5 text-base font-light text-dark-blue-2  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-dark-blue-3 focus:bg-white focus:border-blue-600 focus:outline-none relative">
          <option selected>Budget</option>
          <option>Option 2</option>
        </select>
        <select className="block mr-3 px-3 py-1.5 text-base font-light text-dark-blue-2  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-dark-blue-3 focus:bg-white focus:border-blue-600 focus:outline-none relative">
          <option selected>Delivery Time</option>
          <option>Option 2</option>
        </select>
        <select className="block mr-3 px-3 py-1.5 text-base font-light text-dark-blue-2  bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-dark-blue-3 focus:bg-white focus:border-blue-600 focus:outline-none relative">
          <option selected>Services</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="flex">
        <label className="flex items-center cursor-pointer mr-5">
          <div className="mr-2 text-dark-blue-2 font-normal">
            Pro Services
          </div>
          <div className="relative">
            <input type="checkbox" id="toggleC" className="sr-only peer" />
            <div className="block bg-gray-400 peer-checked:bg-dark-blue-2 w-14 h-8 rounded-full"></div>
            <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="mr-2 text-dark-blue-2 font-normal">
            Online Sellers
          </div>
          <div className="relative">
            <input type="checkbox" id="toggleC" className="sr-only peer" />
            <div className="block bg-gray-400 peer-checked:bg-dark-blue-2 w-14 h-8 rounded-full"></div>
            <div className="peer-checked:translate-x-full absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
