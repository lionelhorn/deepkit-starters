import {transformer, declarationTransformer} from "@deepkit/type-compiler";

/** @type {import('next').NextConfig} */
const nextConfig =  {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    console.log(`[${nextRuntime ?? "?"}] Adding deepkit transformer to webpack config`);
    config.module.rules.push({
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          //this enables @deepkit/type's type compiler
          getCustomTransformers: (program, getProgram) => ({
            before: [transformer],
            afterDeclarations: [declarationTransformer],
          }),
        }
      },
      exclude: /node_modules/,
    },);

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
