import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    teamSize: '',
    flavor: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (location.state && (location.state as any).prefillFlavor) {
      setFormData(prev => ({
        ...prev,
        flavor: (location.state as any).prefillFlavor
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbze6d1BV5rlum6OVzoiQGoBXpCS_R3ABMgj_oocVVLZ3InwdqW3PlTsj90jSw3ZjD7G/exec';


    try {
        // Using URLSearchParams is standard for sending data to Google Apps Script via POST
        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
            params.append(key, value);
        });

        // Use no-cors mode to avoid CORS errors from Google Scripts
        // Note: We won't get a readable response body in 'no-cors' mode, 
        // but the request will go through to the sheet.
        await fetch(scriptURL, { 
            method: 'POST', 
            body: params,
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        setStatus('success');
        setFormData({
            companyName: '',
            name: '',
            email: '',
            phone: '',
            teamSize: '',
            flavor: '',
            notes: ''
        });
    } catch (error) {
        console.error('Error submitting form', error);
        alert('There was an error submitting your request. Please try again.');
        setStatus('idle');
    }
  };

  return (
    <section id="contact" className="bg-black text-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 pt-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-10">
              ORDER NOW <br />
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Fill out the form and we'll send you a sample pack within 2 business days.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold mb-1">Email us</div>
                  <div className="font-medium text-lg">smeal-info@gbozzelli.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold mb-1">Headquarters</div>
                  <div className="font-medium text-lg">Madrid, Spain</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1c1c1c] p-8 rounded-3xl border border-gray-800">
              <h4 className="font-bold text-white mb-3">What's in the sample pack?</h4>
              <p className="text-white-400 text-sm mb-5 font-medium">
                In the sample pack you can choose which flavor to test and will receive 2 Smeals of your choice.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  <span>2x Coffee Kick</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  <span>2x Chocolate Punch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  <span>2x Cinnamon Lift</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  <span>Enterprise pricing guide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white text-black p-8 md:p-10 rounded-[40px] transition-all duration-300">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">Request Received!</h3>
                  <p className="text-gray-500 max-w-sm mb-8">
                    Thanks for your interest in Smeal. We've received your request and will follow up within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold uppercase mb-8">Request Sample</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Company Name *</label>
                      <input 
                        type="text" 
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Inc." 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Work Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Team Size *</label>
                      <select 
                        name="teamSize"
                        required
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors appearance-none text-gray-700"
                        style={{ color: formData.teamSize ? 'inherit' : '#9ca3af' }}
                      >
                        <option value="" disabled>Select team size</option>
                        <option value="1-50">1-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-1000">201-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Preferred Flavor</label>
                      <select 
                        name="flavor"
                        value={formData.flavor}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors appearance-none text-gray-700"
                        style={{ color: formData.flavor ? 'inherit' : '#9ca3af' }}
                      >
                        <option value="" disabled>Select flavor to test</option>
                        <option value="Belgian Chocolate">Chocolate Punch</option>
                        <option value="Cold Brew Coffee">Coffee Kick</option>
                        <option value="Madagascar Vanilla">Cinnamon Lift</option>
                        <option value="Surprise Me">Surprise Me</option>
                      </select>

                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Additional Notes</label>
                      <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about your wellness goals..." 
                        rows={4} 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Sample
                          <Send size={16} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-gray-400 text-center leading-tight">
                      By submitting, you agree to receive communications from SMEAL. We respect your privacy and never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;