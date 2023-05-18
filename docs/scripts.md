# Scripts

All scripts are located inside [scripts directory](../scripts).

## 1. Formats

- **Bash**: to make use of shell syntax in our scripts
- **Node.js**: with `.mjs` files for more complicated logics.

## 2. Sub folders

### 2.1. Cache

Cache scripts are for updating and deleting cached API responses.

We cache the response of those API's that need to be called many times at build time(for SSG) and they always return the same response for every call.

For example the GMV API matches this definition.

### 2.2. OPS (Operations)

This folder contains operational scripts. we will walk through all of them:

#### 2.2.1. Production Build

Commands: `yarn build`, `bash scripts/ops/build.sh`

This script is for building our app an will do the following processes in order:

1. Cleaning up nextjs's cached build chunks
2. Cleaning up API's cached responses
3. Caching build time APIs(if there is any)
4. [Generating stylesheets](./stylesheets/global-styles.md) for current platform
5. Building the app using the `next` command
6. Cleaning up API's cached responses [again]

#### 2.2.2. Running On Development Mode

Commands: `yarn dev` | `bash scripts/ops/dev.sh`

This script is for running our app in development mode.

The steps are pretty much the same as build script, except that the development mode doesn't require caching APIs and will skip that step.

#### 2.2.3. Testing

##### 2.2.3.1. [test.sh](../scripts/ops/test.sh)

Commands: `yarn test` | `bash scripts/ops/test.sh`

This script is for running automated tests on our app.

##### 2.2.3.2. [test-dev.sh](../scripts/ops/test-dev.sh)

This script is for running the automated tests for our app on watch mode. it also accepts a match pattern and passes it directly to [jest command](https://jestjs.io/docs/cli#running-from-the-command-line).

### 2.3. Stylesheets

Read [the global styles documentation](./stylesheets/global-styles.md) to get informed.
