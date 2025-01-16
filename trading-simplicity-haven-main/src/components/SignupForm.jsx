import { useState } from "react";
import { toast } from "sonner";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign up request received! We'll be in touch soon.");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <section id="signup" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2F4F4F]">
          Join Our Trading Community
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F4F4F] focus:border-[#2F4F4F]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F4F4F] focus:border-[#2F4F4F]"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2F4F4F] focus:border-[#2F4F4F]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2F4F4F] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;