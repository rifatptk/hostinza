export default function Search(){
    return(
        <div className="my-4 flex flex-col md:flex-row space-x-4">
        <input
          type="text"
          className="block rounded-md w-2/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
          placeholder="Search ..."
        />

        <select className="block w-1/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
          <option selected>All Environments</option>
          <option>Option 2</option>
        </select>
        <select className="block w-1/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
          <option selected>Last Updated</option>
          <option>Option 2</option>
        </select>
      </div>
    )
}