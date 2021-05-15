# Lerna/Yarn/Vite/TypeScript/React Monorepo

## Setup Yarn v2 (VSCode, .gitignore)
- https://yarnpkg.com/getting-started

## Setting up the monorepo
- Run `npx lerna init --independent`
- Install yarn (check above link)
- Configure `lerna.json` and `package.json` to support Yarn Workspaces

### root/
- Contains some default configuration such as `tsconfig, eslint...`

### packages/button
- Package containing a `Button.jsx` component
- Regular node package intialized with `yarn init`
- Update the `package.json (name, version, main, types)` fields
- `tsconfig.json` extends the default config
- `yarn tsc` compiles the code

### packages/core-app
- Vite app initiliazed with `yarn create @vite/app core-app --template react-ts`
- `yarn add @lerna-monorepo/button` links the button package to the core-app
- The button can be used in the Vite app without further configuration since [Vite is able to handle linked-deps on its own](https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies)


## Resources
- https://github.com/alejandroq/vite-react-typescript-monorepo
- [Chakra is a good example of monorepo](https://github.com/chakra-ui/chakra-ui)
