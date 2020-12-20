const sourceModule = {
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

module.exports = sourceModule;
