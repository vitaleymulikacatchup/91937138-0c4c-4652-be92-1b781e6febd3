"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import { DollarSign, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        navItems={[{ name: 'Meme Coin', id: 'logo' }, { name: 'Menu', id: 'menu' }, { name: 'Contact', id: 'contact' }]}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        buttonText="Join Now"
        onButtonClick={() => {}}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Wow I changed text"
          subtitle="The fun way to invest in crypto"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MEME Coin"
          steps={[
            { title: "Step 1", description: "Set up your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase MEME Coin", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Enjoy your memes!", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Join the MEME Coin Community"
          descriptions={[
            "Follow us on social media for updates!",
            "Participate in community discussions and events.",
            "Engage with like-minded individuals who love memes!"
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and metrics of MEME Coin"
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "Total coins that will ever be minted.", icon: DollarSign },
            { value: "500K", description: "Liquidity", longDescription: "Available liquidity for trading.", icon: DollarSign },
            { value: "100K", description: "Market Cap", longDescription: "Current market capitalization.", icon: BarChart },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Meme Coin"
          logoText="Meme Coin"
        />
      </div>
    </SiteThemeProvider>
  );
}