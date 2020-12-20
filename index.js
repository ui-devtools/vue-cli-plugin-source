const sourceModule = require('./module');

module.exports = (api) => {
  api.chainWebpack((config) => {
    const rule = config.module.rule('vue');

    rule.use('vue-loader').tap((vueLoaderOptions) => {
      const compilerOptions = vueLoaderOptions.compilerOptions;
      const modules = compilerOptions.modules || [];

      modules.push(sourceModule);

      compilerOptions.modules = modules;
      vueLoaderOptions.compilerOptions = compilerOptions;

      return { ...vueLoaderOptions };
    });
  });
};
