import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'The Capital Circle: Connecting Innovators & Entrepreneurs',
  description: 'Join The Capital Circle, a platform for innovators, entrepreneurs, and investors. Explore opportunities, connect with thought leaders, and drive change.',

  metadataBase: new URL('https://www.thecapitalcircle.org/'),
  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/images/site-logo.webp', type: 'webp' }
    ],
  },
  openGraph: {
    title: 'The Capital Circle: Connecting Innovators & Entrepreneurs',
    description: 'Join The Capital Circle, a platform for innovators, entrepreneurs, and investors. Explore opportunities, connect with thought leaders, and drive change.',
    
  images: [
  {
    url: 'https://www.thecapitalcircle.org/images/the-capital-circle-og.webp',
    width: 1200,
    height: 630,
    alt: 'the-capital-circle-og',
  },
],
 type: 'website',
    locale: 'en_US',
    siteName: 'The Capital Circle',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.thecapitalcircle.org/",
              "name": "The Capital Circle",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.thecapitalcircle.org/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Capital Circle",
              "url": "https://www.thecapitalcircle.org/",
              "logo": "https://www.thecapitalcircle.org/_next/image?url=%2Fimages%2Fsite-logo.webp&w=96&q=75&dpl=dpl_8vAPHffisikeAYULnLy8AWLohqMK",
              "sameAs": [
                "https://linkedin.com/company/thecapitalcircle",
                "https://twitter.com/thecapitalcircle"
              ]
            })
          }}
        />
      </head>
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvishalsa5943back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
</body>
    </html>
  );
}
