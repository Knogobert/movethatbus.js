import pkg from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import progress from "rollup-plugin-progress";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy-assets";

export default {
  input: "./src/movethatbus.js",
  output: [{
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  plugins: [
    progress({
      clearLine: false
    }),
    del({
      targets: [
        "lib/*"
      ]
    }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs({
      namedExports: {}
    }),
    terser(),
    copy({
      assets: [
        "src/sound",
        "src/img",
      ],
    }),
    cleanup()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
}