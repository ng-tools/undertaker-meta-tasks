
# undertaker-meta-tasks [![Project Status](https://img.shields.io/badge/status-experimental-orange.svg?style=flat)](https://github.com/ng-tools/undertaker-meta-tasks)

Bundle of [undertaker](https://github.com/phated/undertaker) meta tasks, packaged as [undertaker-registry](https://github.com/phated/undertaker-registry) objects.

This module exposes a `{tasks: [registries...], index: registry}` interface that shall be auto-loaded by [ng-factory](https://github.com/ng-tools/ng-factory)


## Installation

In your ng-factory powered project:

```bash
$ npm install undertaker-meta-tasks --save-dev
```

## Tasks

```bash
$ tree -L 1 lib/tasks
lib/tasks
├── bump.js
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
