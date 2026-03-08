function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0">

      <h1 className="text-xl font-bold">
        Radha Krishna Men PG
      </h1>

      <ul className="flex gap-6 items-center">

        <li>
          <a href="#home" className="hover:underline">Home</a>
        </li>

        <li>
          <a href="#rooms" className="hover:underline">Rooms</a>
        </li>

        <li>
          <a href="#facilities" className="hover:underline">Facilities</a>
        </li>

        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>

        {/* Admin button */}
        <li>
          <a
            href="/admin-login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
          >
            Admin
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;