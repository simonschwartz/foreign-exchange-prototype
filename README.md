# foreign-exchange-prototype

[![Build Status](https://travis-ci.org/simonschwartz/foreign-exchange-prototype.svg?branch=master)](https://travis-ci.org/simonschwartz/foreign-exchange-prototype)

> A Vue.js project

This project uses live foreign exchange data from [fixer.io](http://fixer.io/)

This prototype is for demonstration purposes only.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment Setup

This project uses a Continuous deployment pipeline using [TravisCI](https://travis-ci.org/)

> All pull requests should be made against `master`

`master` branch is automatically tested and deployed to http://foreign-exchange-prototype.surge.sh/

All other branches are automatically tested. All build logs for this project and publicly viewable at [travis-ci.org/simonschwartz/foreign-exchange-prototype/builds](https://travis-ci.org/simonschwartz/foreign-exchange-prototype/builds)
