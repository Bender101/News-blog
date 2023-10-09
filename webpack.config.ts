import path from "path";
import webpack from "webpack";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const BuildPaths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", 'locales'),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const config: webpack.Configuration = BuildWebpackConfig({
    mode: mode,
    paths: BuildPaths,
    isDev,
    port: PORT,
    apiUrl,
    project: "frontend",
  });

  return config;
};
