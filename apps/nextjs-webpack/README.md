### NextJs webpack + Deepkit

- App's code is transformed via webpack + ts-loader + deepkit compiler
- Deepkit runtime types are usable in the app

Next app
```shell
nx run nextjs-webpack:serve:development
```

#### Notes

Transforming code with Deepkit type compiler is not possible.
So we need to find a way to disable SWC in NextJs to fallback to webpack.

To disable SWC: 
- https://nextjs.org/docs/architecture/nextjs-compiler#unsupported-features
- https://nextjs.org/docs/pages/building-your-application/configuring/babel

Disabling SWC will break next/font
https://nextjs.org/docs/messages/babel-font-loader-conflict
==> Removing next/font

Configure webpack + deepkit + ts-loader
https://deepkit.io/documentation/runtime-types/getting-started#webpack
./apps/nextjs-webpack/next.config.mjs

set "noEmit": true => false for ts-loader
