import { Outlet } from 'react-router-dom';
import { UtilityBar } from './UtilityBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { TextUsButton } from '../ui/TextUsButton';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <UtilityBar />
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[105px]">
        <Outlet />
      </main>
      <Footer />
      <TextUsButton />
    </div>
  );
}
