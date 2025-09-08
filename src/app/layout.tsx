"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function Layout({ children }) {
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
      {children}
    </SiteThemeProvider>
  );
}
