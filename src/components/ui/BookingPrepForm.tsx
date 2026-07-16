import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { business } from '../../data/business';
import { services } from '../../data/services';
import { memberships } from '../../data/memberships';

export function BookingPrepForm() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const preselectedMembership = searchParams.get('membership');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleInfo: '',
    vehicleType: '',
    serviceOrMembership: preselectedService || preselectedMembership || '',
    location: '',
    date: '',
    time: '',
    notes: '',
    consent: false
  });

  const [isPrepared, setIsPrepared] = useState(false);

  useEffect(() => {
    if (preselectedService) setFormData(prev => ({ ...prev, serviceOrMembership: preselectedService }));
    if (preselectedMembership) setFormData(prev => ({ ...prev, serviceOrMembership: preselectedMembership }));
  }, [preselectedService, preselectedMembership]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setIsPrepared(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsPrepared(true);
  };

  const getStructuredMessage = () => {
    return `New Booking Request from ${business.name} Website:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Vehicle: ${formData.vehicleInfo} (${formData.vehicleType})
Service/Membership ID: ${formData.serviceOrMembership}
Location: ${formData.location}
Preferred Date/Time: ${formData.date || 'Flexible'} / ${formData.time || 'Flexible'}
Notes: ${formData.notes}
Consent Given: Yes`;
  };

  const handleSms = () => {
    const body = encodeURIComponent(getStructuredMessage());
    window.location.href = `sms:${business.phoneDisplay.replace(/-/g, '')}?body=${body}`;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Booking Request: ${formData.name} - ${formData.serviceOrMembership}`);
    const body = encodeURIComponent(getStructuredMessage());
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-elevated rounded-2xl p-6 md:p-10 border border-soft-border/20 shadow-2xl">
      <h3 className="font-serif text-2xl text-ivory mb-6">Prepare Your Booking Request</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-ivory">Full Name *</label>
            <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-ivory">Phone *</label>
            <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-ivory">Email (Optional)</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          
          <div className="space-y-2 md:col-span-2 pt-4 border-t border-soft-border/10">
            <label htmlFor="vehicleInfo" className="block text-sm font-medium text-ivory">Vehicle Year, Make, and Model *</label>
            <input required type="text" id="vehicleInfo" name="vehicleInfo" placeholder="e.g., 2022 BMW 330i" value={formData.vehicleInfo} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          <div className="space-y-2">
            <label htmlFor="vehicleType" className="block text-sm font-medium text-ivory">Vehicle Type *</label>
            <select required id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors appearance-none">
              <option value="" disabled>Select type</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Truck">Truck</option>
              <option value="SUV">SUV</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="serviceOrMembership" className="block text-sm font-medium text-ivory">Service or Membership *</label>
            <select required id="serviceOrMembership" name="serviceOrMembership" value={formData.serviceOrMembership} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors appearance-none">
              <option value="" disabled>Select option</option>
              <optgroup label="Services">
                {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </optgroup>
              <optgroup label="Memberships">
                {memberships.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </optgroup>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2 pt-4 border-t border-soft-border/10">
            <label htmlFor="location" className="block text-sm font-medium text-ivory">Service Address or ZIP Code *</label>
            <input required type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-ivory">Preferred Date (Optional)</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-ivory">Preferred Time (Optional)</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-ivory">Vehicle Condition / Notes *</label>
            <textarea required id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} className="w-full bg-charcoal border border-soft-border/30 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold-primary transition-colors resize-none"></textarea>
          </div>

          <div className="space-y-2 md:col-span-2 pt-2">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input required type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 shrink-0 w-4 h-4 rounded border-soft-border/50 text-gold-primary focus:ring-gold-primary focus:ring-offset-charcoal bg-charcoal" />
              <span className="text-sm text-muted">I agree to be contacted about this service request. *</span>
            </label>
          </div>
        </div>

        {!isPrepared ? (
          <button type="submit" className="w-full py-4 bg-gold-primary text-black font-semibold rounded-lg hover:bg-gold-deep transition-colors">
            Prepare Request
          </button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4 pt-4 border-t border-soft-border/20"
          >
            <p className="text-ivory text-sm text-center mb-4">Your request is ready. Choose how you would like to send it to us:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button type="button" onClick={handleSms} className="flex items-center justify-center space-x-2 w-full py-4 bg-charcoal text-ivory border border-soft-border/50 rounded-lg hover:border-gold-primary hover:text-gold-primary transition-colors">
                <MessageSquare size={20} />
                <span>Text This Request</span>
              </button>
              <button type="button" onClick={handleEmail} className="flex items-center justify-center space-x-2 w-full py-4 bg-charcoal text-ivory border border-soft-border/50 rounded-lg hover:border-gold-primary hover:text-gold-primary transition-colors">
                <Mail size={20} />
                <span>Email This Request</span>
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
