import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="w-full bg-page-black min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-[18px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-gold-primary mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-ivory mb-6">Page Not Found</h2>
          <p className="text-muted mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back to the garage.
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
