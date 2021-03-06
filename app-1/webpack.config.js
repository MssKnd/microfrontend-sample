const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const buildDate = new Date();
  const mode = 'production';
  console.log({ mode });
  return {
    performance: {
      hints: false
    },
    entry: `./src/index.ts`,
    output: {
      path: path.resolve(__dirname, '___dist___'),
      filename: 'app-1-module.js'
    },
    devServer: {
      port: 3000,
      open: false,
    },
    devtool: 'inline-source-map',
    mode,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        }
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({ 
        BUILD_DATE: buildDate.toISOString() 
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new HtmlWebpackPlugin({
        template: `./public/index.html`,
      }),
      /*
        ---------------------------------------------------
        This needs to be modified for the new remote module
        ---------------------------------------------------
      */
      new ModuleFederationPlugin({
        name: 'app1',
        /*
          the remote module is held as filename
        */
        filename: 'app1.js',
        /*
          it exposes components named  here
        */
        exposes: {
          './CounterApp1': './src/components/Counter',
        },
        /*
          this should be the same as the container one.
        */
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    ]
  };
};
