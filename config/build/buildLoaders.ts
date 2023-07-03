import webpack from "webpack";
import { BuildOptions } from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const svgLoaders = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoaders = buildCssLoader(isDev)

  //If we don't use typescript, we should use babel
  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [svgLoaders, fileLoader, babelLoader, typescriptLoaders, cssLoaders];
}
