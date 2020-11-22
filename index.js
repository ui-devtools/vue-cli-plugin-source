const generateCompilerModule = () => {
  return {
    preTransformNode(node, options) {
      const { filename } = options;
      const { start, end } = node;

      const meta = { filename, start, end };
      const value = JSON.stringify({
        filename: meta.filename,
        start: meta.start,
        end: meta.end,
      });

      if (!node.attrsList) node.attrsList = [];
      node.attrsList.push({ name: 'data-source', value: value });

      return node;
    },
  };
};

module.exports = (api) => {
  api.chainWebpack((config) => {
    const rule = config.module.rule('vue');

    rule.use('vue-loader').tap((vueLoaderOptions) => {
      const compilerOptions = vueLoaderOptions.compilerOptions;
      const modules = compilerOptions.modules || [];

      modules.push(generateCompilerModule());

      compilerOptions.modules = modules;
      vueLoaderOptions.compilerOptions = compilerOptions;

      return { ...vueLoaderOptions };
    });
  });
};
