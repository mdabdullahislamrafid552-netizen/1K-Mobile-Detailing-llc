import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, MapPin, Star } from 'lucide-react';
import { business } from '../data/business';
import { assets } from '../data/assets';
import { services } from '../data/services';
import { Button } from '../components/ui/Button';
import { TrustStrip } from '../components/ui/TrustStrip';
import { HiringStrip } from '../components/ui/HiringStrip';
import { Gallery } from '../components/ui/Gallery';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export function Home() {
  const featuredServices = services.filter(s => !s.id.includes('only')).slice(0, 3);
  
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[640px] md:min-h-[690px] lg:min-h-[780px] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={assets.hero} 
            alt="Mobile detailing setup" 
            className="w-full h-full object-cover object-right md:object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-page-black via-page-black/80 to-transparent md:to-page-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-page-black/90 md:hidden"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-[18px] md:px-[32px] w-full pt-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-gold-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
              LUXURY MOBILE DETAILING • MARYLAND & WASHINGTON, DC
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-serif text-ivory mb-6">
              Professional Mobile Detailing, Delivered to Your Driveway.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-ivory/90 mb-10 text-balance leading-relaxed">
              Premium interior and exterior care with straightforward service packages and memberships designed to keep your vehicle looking its best.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/book">Book Your Detail</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={business.phoneLink}>Call or Text {business.phoneDisplay}</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 md:gap-4 mb-8">
              {['We Come to You', '5-Star Rated', 'Open 7 Days', 'Within 25 Miles of Bowie'].map((chip, idx) => (
                <span key={idx} className="inline-flex items-center text-xs md:text-sm text-ivory/80 bg-charcoal/80 backdrop-blur-sm border border-soft-border/50 px-3 py-1.5 rounded-full">
                  <Check size={14} className="text-gold-primary mr-2" />
                  {chip}
                </span>
              ))}
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-sm text-muted font-serif italic">
              {business.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Services Preview */}
      <section className="bg-page-black py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.p variants={fadeUp} className="text-gold-primary text-sm font-semibold tracking-widest uppercase mb-4">DETAILING SERVICES</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">A Service Level for Every Kind of Reset.</motion.h2>
            <motion.p variants={fadeUp} className="text-muted text-balance leading-relaxed">Choose essential upkeep, a deeper interior and exterior treatment, or a premium full reset.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {featuredServices.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-elevated rounded-[16px] overflow-hidden border border-soft-border/30 hover:border-gold-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-page-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="font-serif text-2xl text-ivory">{service.name}</h3>
                    <span className="text-gold-primary font-medium">{service.price}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-muted text-sm mb-4">Duration: {service.duration}</p>
                  <ul className="space-y-2 flex-grow mb-6">
                    {service.inclusions.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start text-ivory text-sm">
                        <Check size={16} className="text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-3 mt-auto">
                    <Link to={`/services#${service.id}`} className="text-sm text-gold-primary hover:text-gold-deep font-medium text-center transition-colors">
                      View Full Details
                    </Link>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link to={`/book?service=${service.id}`}>Book This Service</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            <Link to="/services#exterior-only" className="text-ivory hover:text-gold-primary transition-colors inline-flex items-center">
              Exterior Only — $60
            </Link>
            <span className="hidden sm:inline text-muted">•</span>
            <Link to="/services#interior-only" className="text-ivory hover:text-gold-primary transition-colors inline-flex items-center">
              Interior Only — from $60
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Mobile-service story */}
      <section className="bg-deep-bg py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[18px] overflow-hidden"
            >
              <img src={assets.exterior} alt="Mobile detailing exterior work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[18px]"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold-primary text-sm font-semibold tracking-widest uppercase mb-4">WE COME TO YOU</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6 leading-tight">Premium Care Without the Waiting Room.</motion.h2>
              <motion.p variants={fadeUp} className="text-muted text-balance leading-relaxed mb-8">
                1K Mobile Detailing brings professional interior and exterior care directly to customers across its Maryland service area. The goal is simple: convenient scheduling, careful work, and a polished result at your location.
              </motion.p>
              
              <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                {['Mobile setup brought to your location', 'Interior and exterior packages', 'Options for ongoing vehicle care', 'Clear appointment hours, seven days a week'].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-primary mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-ivory">{point}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Button asChild>
                  <a href="#service-area">Check Your Service Area</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Membership Teaser */}
      <section className="bg-page-black py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[18px] overflow-hidden"
            >
              <img src={assets.membership} alt="Membership finished car" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-page-black/40 to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[18px]"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold-primary text-sm font-semibold tracking-widest uppercase mb-4">MEMBERSHIPS</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6 leading-tight">Stay Clean Without Starting Over.</motion.h2>
              <motion.p variants={fadeUp} className="text-muted text-balance leading-relaxed mb-10">
                Recurring plans make it easier to maintain a consistently clean vehicle with priority booking and discounted add-ons.
              </motion.p>
              
              <motion.div variants={fadeUp} className="space-y-4 mb-10">
                <div className="bg-elevated border border-soft-border/30 rounded-xl p-5 flex justify-between items-center hover:border-gold-primary/50 transition-colors">
                  <span className="font-serif text-xl text-ivory">Monthly</span>
                  <span className="text-gold-primary font-medium">$90 every month</span>
                </div>
                <div className="bg-elevated border border-soft-border/30 rounded-xl p-5 flex justify-between items-center hover:border-gold-primary/50 transition-colors">
                  <span className="font-serif text-xl text-ivory">Bi-Weekly</span>
                  <span className="text-gold-primary font-medium">$60 every 2 weeks</span>
                </div>
                <div className="bg-elevated border border-soft-border/30 rounded-xl p-5 flex justify-between items-center hover:border-gold-primary/50 transition-colors">
                  <span className="font-serif text-xl text-ivory">Premium Reset</span>
                  <span className="text-gold-primary font-medium">$250 every 3 months</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button variant="outline" asChild>
                  <Link to="/memberships">Compare Memberships</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section id="process" className="bg-deep-bg py-20 md:py-28 border-y border-soft-border/30 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">A Cleaner Vehicle in Three Simple Steps.</motion.h2>
          </motion.div>

          <div className="relative">
            {/* Desktop horizontal line */}
            <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-soft-border/30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
              {[
                { title: 'Choose Your Service', desc: 'Compare the packages or membership plans and select the right level of care.' },
                { title: 'Confirm Your Location', desc: 'Share your vehicle, address or ZIP code, and preferred appointment time.' },
                { title: 'We Come to You', desc: '1K arrives with the mobile setup and completes the selected service at the approved location.' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center bg-charcoal/50 md:bg-transparent p-8 md:p-0 rounded-2xl border border-soft-border/20 md:border-none"
                >
                  <div className="w-12 h-12 bg-page-black border-2 border-gold-primary rounded-full flex items-center justify-center font-serif text-xl text-gold-primary mb-6 shadow-[0_0_15px_rgba(211,175,101,0.15)]">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-xl text-ivory mb-3">{step.title}</h3>
                  <p className="text-muted text-sm text-balance leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Results Gallery */}
      <section className="bg-page-black py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">Precision You Can See.</h2>
          </motion.div>

          <Gallery />

          <div className="mt-12 text-center flex flex-col items-center">
            <p className="text-muted mb-6">See recent work and updates from {business.instagramHandle}.</p>
            <Button variant="outline" asChild>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">View Instagram</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Social Proof / Review CTA */}
      <section className="bg-charcoal py-20 border-y border-soft-border/30">
        <div className="max-w-[800px] mx-auto px-[18px] md:px-[32px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center space-x-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="text-gold-primary fill-gold-primary" size={24} />)}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">{business.trustStatement}</h2>
            <h3 className="text-xl md:text-2xl font-serif text-ivory mb-4">Service Worth Sharing.</h3>
            <p className="text-muted leading-relaxed text-balance mb-8">
              If 1K Mobile Detailing made your ride shine, share your experience and help other Maryland drivers find dependable mobile detailing.
            </p>
            <Button asChild>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">View Recent Work on Instagram</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. Service Area */}
      <section id="service-area" className="bg-page-black py-20 md:py-28 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,175,101,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-[1240px] mx-auto px-[18px] md:px-[32px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6 leading-tight">Mobile Detailing Across the Local Maryland Area.</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="text-gold-primary mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Serving {business.markets}</h4>
                    <p className="text-muted text-sm">{business.serviceRadius}</p>
                    <p className="text-muted text-sm mt-1">Business base: {business.baseLocation}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 border-2 border-gold-primary rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
                    <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Operating Hours</h4>
                    <p className="text-muted text-sm">{business.hours}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild>
                  <Link to="/book">Check Availability</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`sms:${business.phoneDisplay.replace(/-/g, '')}?body=Hi,%20do%20you%20serve%20my%20ZIP%20code?%20My%20ZIP%20is%20`}>Text Your ZIP Code</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-elevated rounded-2xl p-8 border border-soft-border/20 shadow-2xl relative min-h-[300px] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0c0b0a] mix-blend-multiply opacity-50"></div>
              {/* Tasteful abstract map representation */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #D3AF65 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gold-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-primary/50 animate-pulse">
                  <MapPin className="text-gold-primary" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-2">Maryland & DC</h3>
                <p className="text-gold-primary text-sm tracking-widest uppercase">Mobile Service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Hiring Strip */}
      <HiringStrip />

      {/* 11. Final CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src={assets.hero} alt="Detailing final finish" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-page-black/85 md:bg-page-black/75"></div>
        </div>
        
        <div className="relative z-10 max-w-[800px] mx-auto px-[18px] md:px-[32px] text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-gold-primary text-sm font-semibold tracking-widest uppercase mb-4">READY TO BOOK?</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-serif text-ivory mb-6 leading-tight">Your Driveway. Our Detail. A Better Finish.</motion.h2>
            <motion.p variants={fadeUp} className="text-ivory/90 text-lg mb-10 max-w-2xl mx-auto">
              Choose your service, confirm your location, and let 1K bring professional detailing to you.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-page-black/50" asChild>
                <a href={business.phoneLink}>Call or Text</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
