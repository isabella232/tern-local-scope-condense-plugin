var assert = require('assert');
var execFile = require('child_process').execFile;
var fs = require('fs');
var path = require('path');

describe('tern condense output', function() {
  [
    {name: 'simple'},
    {name: 'arguments'},
    {name: 'nodejs', args: ['--plugin', 'node']},

    // requirejs test is disabled until tern mainline has requirejs condense support.
    // {name: 'requirejs', args: ['--plugin', 'requirejs={"baseURL": "testdata"}']},
  ].forEach(function(file) {
    it(file.name + ' (with args: ' + (file.args || []).join(' ') + ')', function(done) {
      var expFile = './testdata/' + file.name + '.json';
      var want = require(expFile);
      var args = ['node_modules/tern/bin/condense'];
      if (file.args) args.push.apply(args, file.args);
      args.push('--plugin', 'local-scope-condense', 'testdata/' + file.name + '.js')
      execFile(process.execPath /* node */, args, function(err, stdout, stderr) {
        if (stderr) console.error(stderr);
        assert.ifError(err);
        var got = JSON.parse(stdout);
        if (process.env['EXP']) {
          var pp = JSON.stringify(got, null, 2);
          fs.writeFile(expFile, pp + '\n', function(err) {
            assert.ifError(err);
            assert(false); // don't let test pass when writing expectation
            done();
          });
          return;
        }
        if (process.env['DEBUG']) console.log(JSON.stringify(got, null, 2));
        assert.deepEqual(got, want);
        done();
      });
    });
  });
});
