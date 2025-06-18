import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: true,
    },
  ],
  tools: {
    swc: {
      jsc: {
        transform: {
          react: {
            pragma: "h",
            pragmaFrag: "Fragment",
          },
        },
      },
    },
  },
});
