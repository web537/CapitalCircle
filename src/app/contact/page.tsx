import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title:{absolute: 'The Capital Circle Contact: Get in Touch with Us',},
  description:
    "Have questions? Reach out to The Capital Circle team for inquiries, partnership opportunities, or event details. We're here to help!",
  
   metadataBase: new URL('https://www.thecapitalcircle.org/'),
  alternates: {
    canonical: '/contact/',
  },

  openGraph: {
  title:{absolute: ' The Capital Circle Contact: Get in Touch with Us',},
    description:
      "Have questions? Reach out to The Capital Circle team for inquiries, partnership opportunities, or event details. We're here to help!",
        images: [
      {
        url: 'https://www.thecapitalcircle.org/images/The-Capital-Circle-OG.png',
        width: 1200,
        height: 630,
        alt: 'The-Capital-Circle-OG',
      },
    ],
  },
};

export default function Page() {
  return <ContactPage />;
}
