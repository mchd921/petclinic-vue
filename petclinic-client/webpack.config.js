module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'vue': vue.runtimeTemplate,
        },
      },
      plugins: [
        new webpack.DefinePlugin({
          '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true,
        }),
      ],
    },
  };
  