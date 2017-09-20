import webpack from 'webpack';
import pkg from './package.json';

const MIN = process.argv.indexOf('-p') > -1;

const getBanner = () => {
  return `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
 `.trim();
};

export default {
  entry: `${__dirname}/src/angular-bluebird-promises.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: MIN ? 'angular-bluebird-promises.min.js' : 'angular-bluebird-promises.js',
    libraryTarget: 'umd',
    library: 'angularBluebirdPromisesModuleName'
  },
  externals: {
    angular: 'angular',
    bluebird: {
      root: 'Promise',
      commonjs: 'bluebird',
      commonjs2: 'bluebird',
      amd: 'bluebird'
    }
  },
  devtool: MIN ? 'source-map' : null,
  module: {
    preLoaders: [{
      test: /.*\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /.*\.js$/,
      loader: 'ng-annotate?regexp=angular.*?\\.module\\(.*?\\)$!babel',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin(getBanner(), {
      raw: true,
      entryOnly: true
    })
  ]
};
