import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { assets } from '../../data/assets';
import { services } from '../../data/services';
import { memberships } from '../../data/memberships';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-bg border-t border-soft-border pt-16 pb-8 px-[18px] md:px-[32px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <Link to="/">
            <img src={assets.logoMain} alt={business.name} className="h-16 w-auto drop-shadow-md" />
          </Link>
          <div>
            <h3 className="font-serif text-xl mb-2 text-ivory">{business.tagline}</h3>
            <p className="text-muted text-sm leading-relaxed">{business.positioning}</p>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-ivory tracking-wide mb-2 uppercase">Menu</h4>
          <Link to="/" className="text-muted hover:text-gold-primary transition-colors text-sm">Home</Link>
          <Link to="/services" className="text-muted hover:text-gold-primary transition-colors text-sm">Services</Link>
          <Link to="/memberships" className="text-muted hover:text-gold-primary transition-colors text-sm">Memberships</Link>
          <Link to="/#process" className="text-muted hover:text-gold-primary transition-colors text-sm">Process</Link>
          <Link to="/#service-area" className="text-muted hover:text-gold-primary transition-colors text-sm">Service Area</Link>
        </div>

        {/* Services & Memberships */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-ivory tracking-wide mb-2 uppercase">Offerings</h4>
          {services.filter(s => !s.id.includes('only')).slice(0, 3).map(service => (
            <Link key={service.id} to={`/book?service=${service.id}`} className="text-muted hover:text-gold-primary transition-colors text-sm">
              {service.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-soft-border/30"></div>
          {memberships.map(plan => (
            <Link key={plan.id} to={`/book?membership=${plan.id}`} className="text-muted hover:text-gold-primary transition-colors text-sm">
              {plan.name} Membership
            </Link>
          ))}
        </div>

        {/* Contact Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-ivory tracking-wide mb-2 uppercase">Contact & Info</h4>
          <div className="text-muted text-sm space-y-1">
            <p>{business.hours}</p>
            <p>{business.serviceRadius}</p>
          </div>
          <div className="pt-2 space-y-3">
            <a href={business.phoneLink} className="block text-ivory hover:text-gold-primary transition-colors text-sm">
              {business.phoneDisplay}
            </a>
            <a href={business.emailLink} className="block text-ivory hover:text-gold-primary transition-colors text-sm">
              {business.email}
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="block text-ivory hover:text-gold-primary transition-colors text-sm">
              {business.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto pt-8 border-t border-soft-border/30 flex flex-col md:flex-row items-center justify-between text-xs text-muted">
        <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Maryland & Washington, DC</p>
      </div>
    </footer>
  );
}
