import { business } from '../../data/business';

export function HiringStrip() {
  if (!business.showHiring) return null;

  return (
    <section className="bg-elevated border-y border-soft-border/30 py-12 md:py-16">
      <div className="max-w-[800px] mx-auto px-[18px] md:px-[32px] text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-ivory mb-2">Now Hiring a Mobile Detailer</h2>
        <p className="text-gold-primary font-medium mb-6">Upper Marlboro, Maryland</p>
        
        <p className="text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
          1K is looking for a reliable, motivated professional with strong customer service. Experience is a plus, and the right person can be trained.
        </p>

        <div className="bg-charcoal/50 rounded-xl p-6 border border-soft-border/20 mb-8">
          <h3 className="font-serif text-lg text-ivory mb-4">Requirements</h3>
          <ul className="text-left text-sm text-muted space-y-3 max-w-sm mx-auto">
            <li className="flex items-start">
              <span className="text-gold-primary mr-3">•</span>
              Valid driver's license
            </li>
            <li className="flex items-start">
              <span className="text-gold-primary mr-3">•</span>
              Reliable and motivated
            </li>
            <li className="flex items-start">
              <span className="text-gold-primary mr-3">•</span>
              Strong customer service
            </li>
            <li className="flex items-start">
              <span className="text-gold-primary mr-3">•</span>
              Experience or willingness to learn
            </li>
            <li className="flex items-start">
              <span className="text-gold-primary mr-3">•</span>
              Commission-based opportunity
            </li>
          </ul>
        </div>

        <a 
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-gold-primary text-black font-medium rounded-lg hover:bg-gold-deep transition-colors"
        >
          DM Us on Instagram
        </a>
      </div>
    </section>
  );
}
