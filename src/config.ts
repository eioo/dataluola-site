export default {
  siteName: process.env.SITE_NAME || '',
  siteImage: process.env.SITE_IMAGE || '',
  newsKeywords: (process.env.NEWS_KEYWORDS || '').split(','),
};
