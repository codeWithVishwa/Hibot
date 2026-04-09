"use client";
import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "./ScrollReveal";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.JPG";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";

const DEFAULT_IMAGES = [img1, img2, img3, img4, img5];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);
  const [regType, setRegType] = useState('internal'); // 'internal', 'other_department', 'other_college'
  
  // Registration Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: '', college: '' });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching events", err);
      setLoading(false);
    }
  };

  const calculateTimeLeft = (eventDate) => {
    const distance = new Date(eventDate).getTime() - new Date().getTime();
    if (distance <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
      minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
    };
  };

  const handleRegisterClick = (event) => {
    setActiveEvent(event);
    setShowModal(true);
    setRegistrationStatus(null);
    setRegType('internal');
    setFormData({ name: '', email: '', phone: '', department: '', college: '' });
  };

  const submitRegistration = async (e) => {
    e.preventDefault();
    setRegistrationStatus({ type: 'loading', message: 'Registering...' });
    try {
      await axios.post("http://localhost:5000/api/public/register", {
        ...formData,
        eventId: activeEvent.id,
        registrationType: regType
      });
      setRegistrationStatus({ type: 'success', message: 'Successfully registered!' });
      
      setTimeout(() => {
        setShowModal(false);
      }, 2500);
    } catch (err) {
      setRegistrationStatus({ type: 'error', message: 'Registration failed. Please try again.' });
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section id="events" className="py-24 bg-black relative">
      <RevealOnScroll>
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-16 text-center tracking-tighter text-white">
            Upcoming Events.
          </h2>

          {loading ? (
            <div className="text-center text-white py-20 text-xl animate-pulse font-mono tracking-widest text-gray-500 uppercase">Loading Core Data...</div>
          ) : events.length === 0 ? (
            <div className="text-center text-white py-20 text-xl font-mono text-gray-500 uppercase tracking-widest">No Events Scheduled. Wait for the Drop.</div>
          ) : (
            <div className="space-y-16">
              {events.map((ev) => (
                <EventCard 
                  key={ev.id} 
                  event={ev} 
                  calculateTimeLeft={calculateTimeLeft} 
                  onRegister={() => handleRegisterClick(ev)}
                  images={ev.imageUrl ? [ev.imageUrl] : DEFAULT_IMAGES}
                  sliderSettings={sliderSettings}
                />
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>

      {/* Registration Modal */}
      {showModal && activeEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-purple-500/30 w-full max-w-xl rounded-2xl p-6 md:p-8 relative shadow-[0_0_50px_rgba(168,85,247,0.3)] max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-2">Register for Event</h3>
            <p className="text-gray-400 mb-6 font-mono text-sm">{activeEvent.title}</p>
            
            {registrationStatus?.type === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-6 rounded-2xl text-center py-10 font-bold tracking-wider animate-pulse">
                {registrationStatus.message}
              </div>
            ) : (
              <>
                {/* Registration Tabs */}
                <div className="flex gap-2 mb-8 bg-black/40 border border-white/5 p-1.5 rounded-xl w-full">
                  <button 
                    onClick={() => setRegType('internal')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg uppercase tracking-widest transition-all ${regType === 'internal' ? 'bg-fuchsia-600 text-white shadow-lg' : 'text-gray-400 shadow-none hover:text-white hover:bg-white/5'}`}
                  >
                    CS / AI
                  </button>
                  <button 
                    onClick={() => setRegType('other_department')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg uppercase tracking-widest transition-all ${regType === 'other_department' ? 'bg-fuchsia-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    Other Dept
                  </button>
                  <button 
                    onClick={() => setRegType('other_college')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg uppercase tracking-widest transition-all ${regType === 'other_college' ? 'bg-fuchsia-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    Outside
                  </button>
                </div>

                <form onSubmit={submitRegistration} className="space-y-4 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-purple-300">Full Name</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-purple-300">Phone</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="+91..." />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-300">Email Address</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="john@example.com" />
                  </div>

                  {regType === 'other_department' && (
                    <motion-div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}}>
                      <label className="block text-sm font-medium mb-1 text-purple-300 mt-4">Department Name</label>
                      <input required type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="e.g. Commerce, Physics..." />
                    </motion-div>
                  )}

                  {regType === 'other_college' && (
                    <motion-div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}}>
                      <label className="block text-sm font-medium mb-1 text-purple-300 mt-4">College Name</label>
                      <input required type="text" value={formData.college} onChange={e => setFormData({...formData, college: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="Enter Full College Name" />
                      
                      <label className="block text-sm font-medium mb-1 text-purple-300 mt-4">Department Name / Stream</label>
                      <input required type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full bg-black/50 border border-gray-700 px-4 py-3 rounded-xl outline-none focus:border-purple-500 transition" placeholder="e.g. B.Tech IT, B.Sc Maths..." />
                    </motion-div>
                  )}
                  
                  {registrationStatus?.type === 'error' && (
                    <p className="text-red-400 text-sm mt-2">{registrationStatus.message}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={registrationStatus?.type === 'loading'}
                    className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-lg hover:opacity-90 transition disabled:opacity-50"
                  >
                    {registrationStatus?.type === 'loading' ? 'Processing...' : 'Confirm Registration'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

// EventCard component logic matches strictly
const EventCard = ({ event, calculateTimeLeft, onRegister, images, sliderSettings }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(event.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(event.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [event.date]);

  return (
    <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-fuchsia-500/40 transition-all duration-700 shadow-2xl">
      <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden md:flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="md:w-5/12 relative bg-black/50 h-[300px] md:h-full min-h-[450px]">
          {images.length > 1 ? (
             <Slider {...sliderSettings}>
               {images.map((src, idx) => (
                 <div key={idx} className="relative overflow-hidden h-[300px] md:h-[450px]">
                   <img src={src} alt="Event" className="w-full h-full object-cover transform scale-105" />
                 </div>
               ))}
             </Slider>
          ) : (
            <img src={images[0]} alt="Event" className="w-full h-full object-cover origin-center" />
          )}
          <div className="absolute inset-0 bg-yellow-200/5 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>

        <div className="md:w-7/12 p-8 md:p-14 relative flex flex-col justify-center h-full">
          <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
            {event.title}
          </h3>
          <p className="text-gray-400 mb-10 text-base lg:text-lg font-light leading-relaxed max-w-xl">
            {event.description || 'Join us for this amazing upcoming event!'}
          </p>

          <div className="grid grid-cols-4 gap-3 mb-10 max-w-md">
            {["Days", "Hrs", "Mins", "Secs"].map((label, i) => {
              const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
              return (
                <div key={label} className="p-3 lg:p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center min-w-[70px]">
                  <div className="text-xl lg:text-3xl font-heading font-extrabold text-white">{values[i]}</div>
                  <div className="text-[10px] lg:text-xs uppercase text-gray-500 mt-2 font-mono tracking-widest">{label}</div>
                </div>
              );
            })}
          </div>

          <div>
            <button
              onClick={onRegister}
              className="inline-block bg-white text-black hover:bg-gray-200 font-heading font-bold uppercase tracking-widest text-sm py-4 px-12 rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
