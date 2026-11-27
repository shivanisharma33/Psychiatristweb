import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { ScrollManager } from './ScrollManager';

export function Layout() {
  return (
    <>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only z-50 rounded bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
