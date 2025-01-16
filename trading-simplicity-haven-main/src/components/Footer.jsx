const Footer = () => {
  return (
    <footer className="bg-[#2F4F4F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NinjaTrading</h3>
            <p className="text-gray-300">
              Your trusted partner in the trading journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#signup" className="text-gray-300 hover:text-white transition-colors">Sign Up</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@ninjatrading.com</li>
              <li>Phone: (787)-858-3989</li>
              <li>Address: 123 Pescao, Utuado Puerto Rico 00898</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} NinjaTrading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;