export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true,
      },
      dynamicImport: false,
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      title: 'Default Title',
      headScripts: [],
      metas: [{ charset: 'utf-8' }],
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Averia+Sans+Libre&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap' },
      ],
    }],
  ],
};
