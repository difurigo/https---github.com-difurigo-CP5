module.exports = {
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
