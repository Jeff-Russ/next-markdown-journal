module.exports = {
  reactStrictMode: true,

  // ----------------------------------
  // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
  webpack5: true,
  // future: { // https://stackoverflow.com/questions/67478532/module-not-found-cant-resolve-fs-nextjs
  //   webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
  //     // Looks like backward compatibility approach.
  // },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      // path: false
    };

    return config;
  },
  // ----------------------------------
  
}
