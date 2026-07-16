import { business } from '../../data/business';

export function UtilityBar() {
  return (
    <div className="hidden md:flex justify-between items-center px-8 py-2 text-[13px] text-muted border-b border-soft-border bg-page-black fixed top-0 w-full z-50">
      <div className="flex space-x-2">
        <span className="font-medium text-ivory">{business.category}</span>
        <span>&bull;</span>
        <span>{business.markets}</span>
      </div>
      <div className="flex space-x-6 items-center">
        <span>{business.hours}</span>
        <a href={business.phoneLink} className="hover:text-gold-primary transition-colors text-ivory font-medium">
          Call or Text {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
