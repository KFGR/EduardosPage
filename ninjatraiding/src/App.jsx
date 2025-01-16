import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import SignupForm from "./components/SignupForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <AboutUs />
      <SignupForm />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default App;