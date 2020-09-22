const preprocess = require('svelte-preprocess');
module.exports = {
  preprocess: [
    preprocess.typescript(),
    preprocess.postcss(),
    preprocess({
      typescript: false, // svite -ts injects it's own typescript preprocessor
      postcss: false
    }),
  ],
};
