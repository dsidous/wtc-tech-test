# WTC Technical Test

## Run the application

`yarn && yarn start`

## Run Tests

`yarn test application-name`

Example:

`yarn test fe-wtc-tech-test`

## Run E2E Tests

`yarn e2e application-name`

Example:

`yarn e2e fe-wtc-tech-test-e2e`

## Run Linter

`yarn lint application-name`

Example:

`yarn lint fe-wtc-tech-test`

## Import files

Libraries are sharable across libraries and applications. They can be imported as:

`@mono-nx-test-with-nextjs/mylib-name`.

You can go in tsconfig.json and look at the paths property for more info.

Example:

`import { componentUi1, componentUi2 } from @mono-nx-test-with-nextjs/ui`
