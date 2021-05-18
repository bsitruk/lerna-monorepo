# Lerna/Yarn/Vite/TypeScript/React Monorepo

## Setup Yarn v2 (VSCode, .gitignore)
- https://yarnpkg.com/getting-started

## Setting up the monorepo
- Run `npx lerna init --independent`
- Install yarn (check above link)
- Configure `lerna.json` and `package.json` to support Yarn Workspaces

### root/
- Contains some default configuration such as `tsconfig, eslint...`
- The `tsconfig` should contain the `paths` aliases

### packages/button
- Package containing a `Button.jsx` component
- Regular node package intialized with `yarn init`
- Update the `package.json (name, version, main, types)` fields
- `tsconfig.json` extends the default config, and add the `composite` option
- `yarn tsc` compiles the code

### packages/counter
- Package containing a `Counter.jsx` component
- Regular node package intialized with `yarn init`
- Update the `package.json (name, version, main, types)` fields
- `yarn add @lerna-monorepo/button` (first run `yarn install` to generate symlink of local packages)
- `tsconfig.json` extends the default config, and add `references` pointing to the button/ package
- `yarn tsc` compiles the code

### packages/core-app
- Vite app initiliazed with `yarn create @vite/app core-app --template react-ts`
- `yarn add @lerna-monorepo/button` links the button package to the core-app
- The button can be used in the Vite app without further configuration since [Vite is able to handle linked-deps at build time](https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies)


## Resources
- https://github.com/alejandroq/vite-react-typescript-monorepo
- https://github.com/jaredpalmer/tsdx-monorepo
- [Chakra is a good example of monorepo](https://github.com/chakra-ui/chakra-ui)
