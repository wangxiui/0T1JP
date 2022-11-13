/**
* @name: next.config
* @description：next.config
* @author: wkk
* @date: 2022-11-06
*/
/** @type {import('next').NextConfig} */

module.exports = {
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
}
