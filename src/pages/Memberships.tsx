import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { memberships } from '../data/memberships';
import { assets } from '../data/assets';
import { Button } from '../components/ui/Button';

export function Memberships() {
  return (
    <div className="w-full bg-page-black min-h-screen">
      {/* Page Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.membership} 
            alt="Recurring detailing memberships" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-page-black/85"></div>
        </div>
        <div className="relative z-10 text-center px-[18px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-4"
          >
            Stay Clean Without Starting Over
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-ivory/80 max-w-xl mx-auto"
          >
            Recurring plans make it easier to maintain a consistently clean vehicle with priority booking and discounted add-ons.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {memberships.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-charcoal rounded-2xl p-8 border ${
                  plan.isPopular || plan.isBestValue ? 'border-gold-primary shadow-[0_0_30px_rgba(211,175,101,0.1)]' : 'border-soft-border/30'
                } flex flex-col h-full hover:-translate-y-2 transition-transform duration-300`}
              >
                {(plan.isPopular || plan.isBestValue) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-primary text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    {plan.isPopular ? 'Most Popular' : 'Best Value'}
                  </div>
                )}
                
                <div className="text-center mb-8 pt-4">
                  <h2 className="font-serif text-2xl text-ivory mb-2">{plan.name}</h2>
                  <div className="text-3xl font-serif text-gold-primary mb-2">{plan.billing.split(' ')[0]}</div>
                  <div className="text-sm text-muted uppercase tracking-wider">{plan.billing.substring(plan.billing.indexOf(' ') + 1)}</div>
                  <p className="text-ivory font-medium mt-4 bg-elevated py-1.5 rounded-md text-sm">{plan.visits}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start text-ivory text-sm">
                        <Check size={18} className="text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted text-sm italic mb-8 border-t border-soft-border/30 pt-6">
                    {plan.supportLine}
                  </p>
                </div>

                <div className="mt-auto">
                  <Button 
                    variant={plan.isPopular || plan.isBestValue ? 'primary' : 'outline'} 
                    className="w-full" 
                    asChild
                  >
                    <Link to={`/book?membership=${plan.id}`}>Select {plan.name}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto bg-elevated/50 border border-soft-border/20 rounded-xl p-4 flex items-center justify-center text-center text-muted text-sm"
          >
            <Info size={18} className="text-gold-primary mr-2 flex-shrink-0" />
            <p>Membership billing and visit scheduling should be confirmed during booking.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
