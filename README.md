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
{
  "!name": "testdata/simple.js",
  "!define": {
    "g.!local": {
      "0": {
        "j": {
          "!span": "146[10:12]-147[10:13]"
        }
      },
      "3": {
        "h": {
          "!span": "116[8:17]-117[8:18]"
        },
        "i": {
          "!type": "number",
          "!span": "127[9:6]-128[9:7]"
        }
      }
    },
    "z.x.y.!local": {
      "0": {
        "zz": {
          "!type": "number",
          "!span": "184[14:25]-186[14:27]"
        }
      }
    },
    "!local": {
      "testdata/simple`js": {
        "0": {
          "c": {
            "!span": "40[2:13]-41[2:14]"
          },
          "d": {
            "!span": "53[3:8]-54[3:9]"
          }
        },
        "3": {
          "f": {
            "!span": "87[5:19]-88[5:20]"
          }
        },
        "6": {
          "a": {
            "!type": "number",
            "!span": "20[1:6]-21[1:7]"
          },
          "b": {
            "!type": "fn(c: ?)",
            "!span": "38[2:11]-39[2:12]"
          },
          "e": {
            "!type": "fn(f: ?)",
            "!span": "74[5:6]-75[5:7]"
          }
        },
        "g": {
          "!type": "fn(h: ?)",
          "!span": "103[8:4]-104[8:5]"
        },
        "z": {
          "!type": "z",
          "!span": "163[14:4]-164[14:5]"
        }
      }
    }
  },
  "g": {
    "!type": "fn(h: ?)",
    "!span": "103[8:4]-104[8:5]"
  },
  "z": {
    "x": {
      "y": {
        "!type": "fn(zz: number)",
        "!span": "172[14:13]-173[14:14]"
      },
      "!span": "168[14:9]-169[14:10]"
    },
    "!span": "163[14:4]-164[14:5]"
  }
}
```


## Running tests

Run `npm test`.


## Authors

Contributions are welcome! Submit a GitHub issue or pull request.

* [Quinn Slack (sqs)](https://sourcegraph.com/sqs)
