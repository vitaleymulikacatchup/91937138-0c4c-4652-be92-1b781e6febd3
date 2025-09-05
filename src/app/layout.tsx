import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteThemeProvider>
          <NavbarLayoutFloatingOverlay 
            navItems={[{ name: 'Meme Coin', id: 'logo' }, { name: 'Menu', id: 'menu' }, { name: 'Contact', id: 'contact' }]}
            logoSrc="/images/logo.svg"
            logoWidth={100}
            logoHeight={50}
          />
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
