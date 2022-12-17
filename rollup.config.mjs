import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

export default [
  {
    input: `src/index.ts`,
    plugins: [
      esbuild(),
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      resolve(),
      terser(),
    ],
    output: [
      {
        file: `dist/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: "esm",
    },
  },
];
