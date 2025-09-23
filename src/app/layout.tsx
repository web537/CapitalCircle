import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  // title: 'The Capital Circle',
  // description: 'Here is evrything you want',
  icons: {
    icon: [
      { url: '/images/img_group.png', type: 'png' }
    ],
  },
  openGraph: {
    title: 'The Capital Circle',
    description: 'Connect with cutting-edge AI investment opportunities.',
    
    images: [
  {
    url: 'https://www.thecapitalcircle.org/images/The-Capital-Circle-OG.png',
    width: 1200,
    height: 630,
    alt: 'The-Capital-Circle-OG',
  },
],
 type: 'website',
    locale: 'en_US',
    siteName: 'The Algorithm Alliance',
    url: 'https://www.thecapitalcircle.org/', 

  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvishalsa5943back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
</body>
    </html>
  );
}
