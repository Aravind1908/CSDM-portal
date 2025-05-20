import techlogo from "../assets/images/mainlogo.png"; 

function Navbar() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={techlogo} alt="Logo" className="h-20 w-auto object-contain" />
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </header>
  );
}

export default Navbar;
