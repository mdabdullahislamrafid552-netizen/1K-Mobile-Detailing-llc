import { MessageSquare } from 'lucide-react';
import { business } from '../../data/business';

export function TextUsButton() {
  return (
    <a
      href={business.textLink}
      className="fixed bottom-6 right-6 z-40 bg-charcoal/90 backdrop-blur-sm border border-soft-border text-ivory p-4 rounded-full shadow-lg hover:bg-elevated hover:text-gold-primary transition-all duration-300 md:hidden"
      aria-label="Text Us"
    >
      <MessageSquare size={24} />
    </a>
  );
}
