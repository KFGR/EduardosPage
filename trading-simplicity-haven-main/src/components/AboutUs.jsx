const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2F4F4F]">
          Who Are We
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2F4F4F]">Our Mission</h3>
            <p className="text-gray-600">
              To provide traders with the most reliable and innovative trading solutions in the market.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2F4F4F]">Our Experience</h3>
            <p className="text-gray-600">
              With over 15 years of market expertise, we understand what traders need to succeed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#2F4F4F]">Our Promise</h3>
            <p className="text-gray-600">
              We're committed to providing exceptional service and support to our trading community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;