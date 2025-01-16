const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-accent min-h-[600px] flex items-center text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Trading Journey
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Join the leading trading platform that empowers traders with cutting-edge tools and insights.
          </p>
          <a
            href="#signup"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;