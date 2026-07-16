import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Phone, Mail, Clock } from 'lucide-react';

const InstagramIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { business } from '../data/business';
import { BookingPrepForm } from '../components/ui/BookingPrepForm';
import { Button } from '../components/ui/Button';

export function Book() {
  return (
    <div className="w-full bg-page-black min-h-screen py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-6"
          >
            Book Mobile Detailing at Your Location.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
          >
            <Button size="lg" asChild>
              <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Continue to Square Booking
                <ExternalLink size={18} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col space-y-8"
          >
            <div className="bg-charcoal p-8 rounded-2xl border border-soft-border/20">
              <h2 className="font-serif text-2xl text-ivory mb-6">Contact & Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold-primary mr-4 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Service Area</h4>
                    <p className="text-muted text-sm">{business.serviceRadius}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-gold-primary mr-4 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Hours</h4>
                    <p className="text-muted text-sm">{business.hours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-gold-primary mr-4 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Phone</h4>
                    <a href={business.phoneLink} className="text-muted text-sm hover:text-gold-primary transition-colors block mb-1">Call: {business.phoneDisplay}</a>
                    <a href={business.textLink} className="text-muted text-sm hover:text-gold-primary transition-colors block">Text: {business.phoneDisplay}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-gold-primary mr-4 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Email</h4>
                    <a href={business.emailLink} className="text-muted text-sm hover:text-gold-primary transition-colors">{business.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <InstagramIcon className="text-gold-primary mr-4 mt-0.5 shrink-0" size={20} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Social</h4>
                    <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-gold-primary transition-colors">{business.instagramHandle}</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <BookingPrepForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
