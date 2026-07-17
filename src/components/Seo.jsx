import { useEffect } from 'react';
import { CONTACT } from '../config/contact';

const SITE_URL = CONTACT.website;
const DEFAULT_TITLE = 'MAKDEVS | Web Development & Software Solutions';
const DEFAULT_DESCRIPTION =
  'MAKDEVS offers professional web development, mobile apps, cloud solutions, and AI services. Custom software built for your business.';

const setMeta = (name, content, isProperty = false) => {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  path = '',
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | MAKDEVS` : DEFAULT_TITLE;
  const canonical = `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    if (keywords) {
      setMeta('keywords', keywords);
    }

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'MAKDEVS', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    setLink('canonical', canonical);
  }, [fullTitle, description, keywords, canonical, noindex]);

  return null;
};

export default Seo;
