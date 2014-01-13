# tern-local-scope-condense-plugin

A [tern](http://ternjs.net) plugin for including local scope entries in
condenser output.

The tern condenser is designed to "condense" a set of JavaScript files into a
concise and type-inferred description of their public API. It doesn't include
local variables or any other entries not reachable by an external caller.

This plugin hooks into the condenser to output such information. It's useful if
you wish to have a near-complete representation of the structure of a JavaScript
program, for static analysis tools (such as
[Sourcegraph](https://sourcegraph.com)).

**[Documentation on Sourcegraph](https://sourcegraph.com/github.com/sourcegraph/tern-local-scope-condense-plugin)**

[![Build Status](https://travis-ci.org/sourcegraph/tern-local-scope-condense-plugin.png?branch=master)](https://travis-ci.org/sourcegraph/tern-local-scope-condense-plugin)
[![status](https://sourcegraph.com/api/repos/github.com/sourcegraph/tern-local-scope-condense-plugin/badges/status.png)](https://sourcegraph.com/github.com/sourcegraph/tern-local-scope-condense-plugin)
[![authors](https://sourcegraph.com/api/repos/github.com/sourcegraph/tern-local-scope-condense-plugin/badges/authors.png)](https://sourcegraph.com/github.com/sourcegraph/tern-local-scope-condense-plugin)
[![Total views](https://sourcegraph.com/api/repos/github.com/sourcegraph/tern-local-scope-condense-plugin/counters/views.png)](https://sourcegraph.com/github.com/sourcegraph/tern-local-scope-condense-plugin)


## Usage

To install dependencies, run `npm install`.


### With the tern condenser

Load the plugin:

```bash
$ node_modules/tern/bin/condense --plugin local-scope-condense testdata/simple.js
```

You'll see information about local scope entries in the condensed output:

```json
TODO```


## Running tests

Run `npm test`.


## Authors

Contributions are welcome! Submit a GitHub issue or pull request.

* [Quinn Slack (sqs)](https://sourcegraph.com/sqs)
