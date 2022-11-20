/**
* @name: next.config
* @description：next.config
* @author: wkk
* @date: 2022-11-06
*/
/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  // console.log('phase', phase);
  // console.log('defaultConfig', defaultConfig);

  // console.log('process.env', process.env);
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV); // development/production
  return {
    // assetPrefix: '/0T1JP',
    // basePath: process.env.NODE_ENV === 'production' ? '/0T1JP' : '',
    // use dockerfile
    output: 'standalone',
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
      // loader: 'custom',
      // loaderFile: './loaders/imgLoader.ts',
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
}
