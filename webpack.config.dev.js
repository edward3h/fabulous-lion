import webpack from 'webpack';
import path from 'path';

export default {
        mode: 'development',
        devtool: "inline-source-map",
        entry: "./client/src/app.js",
        output: {
                filename: 'client.js',
                path: path.resolve(__dirname, 'public'),
                publicPath: '/'
        },
        module: {
              rules: [
                    {
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            use: [
                              'babel-loader',
                            ],
                  },
                  {
                      test: /\.less$/,
                      use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                      }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                      }, {
                        loader: 'less-loader' // compiles Less to CSS
                      }]
                  }
          ],
    },
  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
     resolve: {
         extensions: ['.js', '.jsx'],
     }
}
