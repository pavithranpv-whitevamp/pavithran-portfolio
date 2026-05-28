import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import StatsBar from '../components/StatsBar';
import PortfolioPreview from '../components/PortfolioPreview';
import CTABanner from '../components/CTABanner';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <PortfolioPreview />
      <CTABanner />
    </main>
  );
}
