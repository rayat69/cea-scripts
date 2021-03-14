import { src, main } from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import Json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
import gzipPlugin from "rollup-plugin-gzip";

export default {
  input: src,
  output: {
    file: main,
    format: "cjs",
    banner: "#!/usr/bin/env node",
    compact: true,
    minifyInternalExports: true,
  },
  plugins: [
    gzipPlugin(),
    commonjs(),
    Json(),
    uglify(),
  ],
  // plugins: [gzipPlugin(), nodeResolve(), commonjs(), Json(), uglify()],
};
