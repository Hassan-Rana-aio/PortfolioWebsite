import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/layout/MotionProvider';
import Nav from '@/components/layout/Nav';
import Spotlight from '@/components/layout/Spotlight';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      <div id="top" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <Spotlight />
    </MotionProvider>
  );
}
