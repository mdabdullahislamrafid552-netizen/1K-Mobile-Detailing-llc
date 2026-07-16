import { CarFront, CalendarCheck, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustStrip() {
  const items = [
    {
      icon: <CarFront className="text-gold-primary mb-3" size={28} />,
      title: "Mobile Convenience",
      desc: "Professional service at your home or approved location."
    },
    {
      icon: <ShieldCheck className="text-gold-primary mb-3" size={28} />,
      title: "Clear Packages",
      desc: "Choose Standard, Deluxe, Premium, Exterior, or Interior service."
    },
    {
      icon: <CalendarCheck className="text-gold-primary mb-3" size={28} />,
      title: "Recurring Care",
      desc: "Monthly, bi-weekly, and quarterly membership options."
    },
    {
      icon: <Clock className="text-gold-primary mb-3" size={28} />,
      title: "Seven-Day Access",
      desc: "Appointments available Monday through Sunday."
    }
  ];

  return (
    <div className="bg-charcoal border-y border-soft-border/30">
      <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px] py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-2"
            >
              {item.icon}
              <h3 className="font-serif text-lg text-ivory font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted text-balance leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
