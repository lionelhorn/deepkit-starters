### Nextjs

- Server side rendered page fetching data from deepkit server via RPC (apps/nextjs/src/app/page.tsx)
- Server action fetching data from deepkit server via RPC (apps/nextjs/src/app/actions/UserActions.ts)
- Next route fetching data from deepkit server via RPC (apps/nextjs/src/app/api/hello/route.ts)

Note that as the code from nextjs app is not transformed by deepkit type compiler, no runtime types are available in the nextjs app.

# Dev
From two terminal at the repo's root, run the following commands

Deepkit server
```shell
nx run deepkit-app:dev
```

Next app
```shell
nx run nextjs:serve:development
```

