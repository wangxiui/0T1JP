/**
* @name: next.config
* @description：next.config
* @author: wkk
* @date: 2022-11-06
*/
/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '/0T1JP',
  compiler: {
    // styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },

  /*  solve next export error in Static HTML Export   START*/
  images: {
    unoptimized: true,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" }
    };
  },
  /*  solve next export error in Static HTML Export   END*/
}
