export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //     ],
  //   },
  // ],
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
      headScripts: [],
      metas: [{ charset: 'utf-8' }],
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Averia+Sans+Libre&display=swap' },
      ],
    }],
  ],
};
