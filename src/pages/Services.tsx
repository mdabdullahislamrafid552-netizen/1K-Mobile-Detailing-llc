import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { services } from '../data/services';
import { assets } from '../data/assets';
import { Button } from '../components/ui/Button';

export function Services() {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.hero} 
            alt="Mobile detailing services" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-page-black/80"></div>
        </div>
        <div className="relative z-10 text-center px-[18px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-4"
          >
            Detailing Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-ivory/80 max-w-xl mx-auto"
          >
            A clear and comprehensive selection of interior and exterior detailing packages.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-page-black py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-[18px] md:px-[32px] space-y-16 md:space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} scroll-mt-28`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] shadow-2xl border border-soft-border/20">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                {service.isComplete && (
                  <div className="absolute top-4 left-4 bg-gold-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                    Most Complete
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
                <div className="flex items-end justify-between border-b border-soft-border/40 pb-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-serif text-ivory mb-2">{service.name}</h2>
                    <p className="text-muted text-sm">{service.duration}</p>
                  </div>
                  <div className="text-2xl font-serif text-gold-primary">{service.price}</div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold tracking-wide text-ivory/80 uppercase mb-4">Includes</h3>
                  <ul className="grid grid-cols-1 gap-y-3">
                    {service.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start text-ivory">
                        <Check size={18} className="text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.note && (
                  <div className="bg-charcoal/50 rounded-lg p-4 border border-soft-border/20 flex items-start mb-8">
                    <Info size={18} className="text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted leading-relaxed">{service.note}</p>
                  </div>
                )}

                <div className="mt-auto pt-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to={`/book?service=${service.id}`}>Book {service.name}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
