// src/components/SEOHead.jsx — Dynamic meta + schema markup injector
import { useEffect } from 'react';

const SITE_NAME = 'Srivenkateshwara Dental Hospital Kamareddy';
const SITE_URL  = import.meta.env.VITE_SITE_URL || 'https://svdentalkamareddy.com';

const BASE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Srivenkateshwara Dental Hospital',
  alternateName: 'SVDH Kamareddy',
  description: 'Top multispeciality dental and cosmetic clinic in Kamareddy, Telangana. Services: Root Canal, Teeth Whitening, Dental Implants, Orthodontics, Cosmetic Dentistry.',
  url: SITE_URL,
  telephone: '+91-XXXXX-XXXXX',
  email: 'info@svdentalkamareddy.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ashok Nagar, Vidya Nagar Colony',
    addressLocality: 'Kamareddy',
    addressRegion: 'Telangana',
    postalCode: '503111',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.3219,
    longitude: 78.3412,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '15:00' },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, EMI',
  medicalSpecialty: ['Dentistry', 'Orthodontics', 'Oral Surgery', 'Cosmetic Dentistry'],
  hasMap: 'https://maps.google.com/?q=Kamareddy+Dental+Hospital+Ashok+Nagar',
  sameAs: [
    'https://www.google.com/maps/place/Kamareddy',
    'https://www.justdial.com/Kamareddy',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '247',
    bestRating: '5',
  },
};

export default function SEOHead({ title, description, canonical, schema }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `Best Dental Clinic in Kamareddy | ${SITE_NAME}`;

  const metaDesc = description ||
    'Top dentist in Kamareddy for root canal, teeth whitening, dental implants & cosmetic dentistry. Book appointment at Srivenkateshwara Dental Hospital, Ashok Nagar, Kamareddy.';

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    setMeta('description', metaDesc);
    setMeta('keywords', 'dentist in Kamareddy, best dental clinic Kamareddy, teeth cleaning Kamareddy, root canal Kamareddy, dental clinic near me Kamareddy, teeth whitening Kamareddy, dental implants Kamareddy, orthodontist Kamareddy, Srivenkateshwara Dental Hospital');

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', metaDesc, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:locale', 'en_IN', 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', fullTitle, 'name');
    setMeta('twitter:description', metaDesc, 'name');

    // Canonical
    let canonTag = document.querySelector('link[rel="canonical"]');
    if (!canonTag) { canonTag = document.createElement('link'); canonTag.rel = 'canonical'; document.head.appendChild(canonTag); }
    canonTag.href = canonicalUrl;

    // Schema.org JSON-LD
    const schemaData = schema ? { ...BASE_SCHEMA, ...schema } : BASE_SCHEMA;
    let schemaTag = document.getElementById('schema-org');
    if (!schemaTag) { schemaTag = document.createElement('script'); schemaTag.id = 'schema-org'; schemaTag.type = 'application/ld+json'; document.head.appendChild(schemaTag); }
    schemaTag.textContent = JSON.stringify(schemaData);

    return () => {};
  }, [fullTitle, metaDesc, canonicalUrl]);

  return null;
}

function setMeta(nameOrProp, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, nameOrProp); document.head.appendChild(el); }
  el.content = content;
}
