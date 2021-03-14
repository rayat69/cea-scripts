import { src, main } from "./package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: src,
  output: {
    file: main,
    format: "cjs",
    banner: "#!/usr/bin/env node",
    compact: true,
    minifyInternalExports: true,
  },
  plugins: [nodeResolve(), commonjs()],
};
