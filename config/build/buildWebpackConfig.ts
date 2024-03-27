import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from './buildPligins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
  };
}
