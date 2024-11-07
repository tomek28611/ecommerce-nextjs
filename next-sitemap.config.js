
module.exports = {
  siteUrl: 'https://www.autodilyexpress.cz',
  generateRobotsTxt: true,
  
  transform: async (config, path) => {
   
    return {
      loc: path, 
      changefreq: 'daily',
      priority: 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
 
  additionalPaths: async (config) => {
   
    const response = await fetch(`${config.siteUrl}/api/products`);
    const products = await response.json();

    return products.map((product) => ({
      loc: `/nahradni-dily/${product._id}`, 
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};

  