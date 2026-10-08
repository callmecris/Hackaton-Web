export default function Navbar() {
  return (
    <nav id="navbar" className="flex bg-gray-800 w-full items-center justify-between border-b border-solid border-white px-16 py-4">
      <div className="flex items-center gap-2">
        <label className="flex items-center pd-10">
            <h1 className="text-2xl font-bold text-white">Navbar</h1>
        </label>
        <div className="w-4"></div>

        <div className="flex items-center">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 px-5 text-lg active:font-bold text-white in-hover:hover:font-bold"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 px-5 text-lg active:font-bold text-white in-hover:hover:font-bold"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Features
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 px-5 text-lg active:font-bold text-white in-hover:hover:font-bold"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pricing
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 px-5 text-lg active:font-bold text-white in-hover:hover:font-bold"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </div>

      </div>
      <div className="flex items-center gap-2">
          <input
              type="text"
              placeholder="Search..."
              className="rounded-md bg-white border px-4 py-2 text-black border-gray-300 focus:outline-none"
          />
          
          <button className="rounded-md bg-transparent px-4 py-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
              Search
          </button>
      </div>
    </nav>
  );
}