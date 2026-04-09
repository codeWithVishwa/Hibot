import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import "./index.css"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Sponsors from "./pages/Sponsors"
import Stats from "./pages/Stats"
import FAQ from "./pages/FAQ"
import Footer from "./components/Footer"
import Particles from "./components/UI/Particles"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import CustomCursor from "./components/UI/CustomCursor"
import Speakers from "./pages/Speakers"
import Schedule from "./pages/Schedule"
import Testimonials from "./pages/Testimonials"
import NotFound from "./pages/NotFound"

const LandingPage = () => (
  <div className="bg-gray-950 min-h-screen text-white w-full overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200 relative">
    {/* Global Space Particles */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
    
    <div className="relative z-10 w-full">
      <CustomCursor />
      <Navbar />
      <Home />
      <Sponsors />
      <About />
      <Speakers />
      <Schedule />
      <Testimonials />
      <Stats />
      <Gallery />
      <Events />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;