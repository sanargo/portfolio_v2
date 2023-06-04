function Nav() {
  return (
    <nav className="flex items-center justify-end h-20 pr-5 lg:px-24">
      <ul className="flex items-center">
        {/* <li>
          <a
            className="text-gray-300 text-md hover:text-white hover:underline decoration-gray-500 underline-offset-4 mr-7"
            href=""
          >
            Homepage
          </a>
        </li> */}
        <li>
          <a
            className="text-gray-300 text-md hover:text-white hover:underline decoration-gray-500 underline-offset-4 mr-7"
            href="#services"
          >
            Services
          </a>
        </li>
        {/* <li>
          <a
            className="text-gray-300 text-md hover:text-white hover:underline decoration-gray-500 underline-offset-4 mr-7"
            href=""
          >
            Portfolio
          </a>
        </li> */}
        <a
          href="#contact"
          className="p-2 bg-creme text-slate-800 font-bold  rounded-md flex justify-center items-center"
        >
          {/* h-8 w-28 */}
          Get in touch
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
