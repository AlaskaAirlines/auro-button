import { nodeResolve } from '@rollup/plugin-node-resolve';

const createConfig = (input, output) => ({
  input,
  output: {
    format: 'esm',
    dir: output,
    entryFileNames: '[name].js'
  },
  plugins: [
    nodeResolve({
      preferBuiltins: false,
      moduleDirectories: ['node_modules']
    })
  ]
});


const createExampleConfig = (entryPoint) => ({
  input: {
    [`${entryPoint}.min`]: `./demo/${entryPoint}.js`,
  },
  output: {
    format: 'esm',
    dir: `./demo/`,
  },
  plugins: [nodeResolve()],
});

export default [
  createConfig('./src/index.js', 'dist'),
  createConfig('./src/registered.js', 'dist'),
  createExampleConfig('index'),
  createExampleConfig('api')
];
