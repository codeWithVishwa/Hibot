import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Plus, Edit2, Trash2, Cpu, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({ title: '', date: '', description: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchEvents();
  }, [navigate]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/events/${currentEvent.id}`, currentEvent, config);
      } else {
        await axios.post('http://localhost:5000/api/events', currentEvent, config);
      }
      setShowModal(false);
      setCurrentEvent({ title: '', date: '', description: '', imageUrl: '' });
      setIsEditing(false);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('WARNING: Deleting this architectural sequence is irreversible. Proceed?')) {
      try {
        await axios.delete(`http://localhost:5000/api/events/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchEvents();
      } catch (err) {
        console.error('Error deleting event', err);
      }
    }
  };

  const openEditModal = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
    setShowModal(true);
  };

  const openCreateModal = () => {
    setCurrentEvent({ title: '', date: '', description: '', imageUrl: '' });
    setIsEditing(false);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Background Ambient Layers */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-8"
        >
          <div>
            <h1 className="text-4xl font-heading font-black text-white tracking-widest uppercase flex items-center gap-3">
              <Cpu size={32} className="text-indigo-500" />
              Terminal <span className="text-gray-600">Core</span>
            </h1>
            <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em] mt-2 ml-11">Encrypted Architect Access</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 text-red-400 px-5 py-2.5 rounded-full transition-all text-xs font-mono uppercase tracking-widest"
          >
            <LogOut size={14} /> Sever Connection
          </button>
        </motion.div>

        {/* Database Control Center */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/[0.02] rounded-3xl p-8 border border-white/5 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Inner Glare */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-2xl font-heading font-semibold tracking-wider text-white">Event Infrastructure Map</h2>
              <p className="text-gray-500 text-sm font-light mt-1">Configure active sequences injected into the public spatial DOM.</p>
            </div>
            <button 
              onClick={openCreateModal} 
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95 px-6 py-3 rounded-full transition-all font-bold uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Plus size={16} /> Deploy New Event
            </button>
          </div>

          <div className="overflow-x-auto ring-1 ring-white/10 rounded-2xl bg-black/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-widest text-gray-400 font-mono">
                  <th className="py-5 px-6 font-medium">Designation</th>
                  <th className="py-5 px-6 font-medium">Timestamp</th>
                  <th className="py-5 px-6 font-medium text-right">Overrides</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-300">
                {events.map((ev, i) => (
                  <motion.tr 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={ev.id} 
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-white">{ev.title}</td>
                    <td className="py-5 px-6 font-mono text-gray-500 flex items-center gap-2">
                       <Calendar size={14} className="text-indigo-400" />
                       {new Date(ev.date).toLocaleDateString()}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 text-gray-500">
                        <button onClick={() => openEditModal(ev)} className="p-2 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg transition-colors" title="Modify Sequence">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(ev.id)} className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-colors" title="Eradicate Sequence">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
                {events.length === 0 && (
                  <tr>
                    <td colSpan="3" className="py-12 text-center text-gray-600 font-mono uppercase tracking-widest text-xs">
                      No active sequences found in core.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* High-Fidelity Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 font-sans"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#050505] rounded-3xl w-full max-w-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative"
            >
              {/* Modal Linear Top Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500"></div>

              <div className="p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
                  {isEditing ? 'Modify Active Sequence' : 'Initialize New Sequence'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 ml-1">Event Title</label>
                    <input required type="text" value={currentEvent.title} onChange={e => setCurrentEvent({...currentEvent, title: e.target.value})} className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-indigo-500/50 focus:bg-indigo-500/5 outline-none transition-all text-white placeholder-gray-700" placeholder="e.g. AI Hackathon" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 ml-1">Execution Date</label>
                    <input required type="date" value={currentEvent.date ? new Date(currentEvent.date).toISOString().split('T')[0] : ''} onChange={e => setCurrentEvent({...currentEvent, date: e.target.value})} className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-indigo-500/50 focus:bg-indigo-500/5 outline-none transition-all text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 ml-1">Public Image Source (URL)</label>
                    <input type="text" value={currentEvent.imageUrl || ''} onChange={e => setCurrentEvent({...currentEvent, imageUrl: e.target.value})} className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-indigo-500/50 focus:bg-indigo-500/5 outline-none transition-all text-white placeholder-gray-700" placeholder="https://images.unsplash.com/..." />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 ml-1">Architectural Brief</label>
                    <textarea required rows="4" value={currentEvent.description || ''} onChange={e => setCurrentEvent({...currentEvent, description: e.target.value})} className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-indigo-500/50 focus:bg-indigo-500/5 outline-none transition-all text-white placeholder-gray-700 resize-none" placeholder="Provide event context parameters..."></textarea>
                  </div>
                  <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                    <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 bg-transparent border border-white/10 hover:bg-white/5 text-gray-300 rounded-full font-medium text-xs uppercase tracking-widest transition-colors">Abort</button>
                    <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">Deploy</button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
