import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#2F4F4F] text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">TradeCo</div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors">Who are we</a>
            <a href="#signup" className="hover:text-gray-300 transition-colors">Signup</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#about" className="block hover:text-gray-300 transition-colors">Who are we</a>
            <a href="#signup" className="block hover:text-gray-300 transition-colors">Signup</a>
            <a href="#contact" className="block hover:text-gray-300 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;