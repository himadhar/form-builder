// import external from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
// import pkg from "./package.json" assert { type: "json" };

// export default [
//   {
//     input: pkg.source,
//     output: [
//       { file: pkg.main, format: "cjs", sourcemap: true },
//       { file: pkg.module, format: "esm", sourcemap: true },
//     ],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({
//         tsconfig: "./tsconfig.json",
//         declaration: true,
//         declarationDir: "dist",
//       }),
//       external(),
//     ],
//     external: Object.keys(pkg.peerDependencies || {}),
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//   },
// ];

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];