const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('@rollup/plugin-replace');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'EmojiButton'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    }),
    postcss({
      extensions: ['.css']
    }),
    babel({
      compact: production
    }),
    resolve(),
    commonjs()
  ]
};
