'use strict';

var util = require('util');
var DefaultRegistry = require('undertaker-registry');
var vfs = require('vinyl-fs');
var through = require('through2');
var semver = require('semver');

function BumpRegistry() {

  DefaultRegistry.call(this);

  this.set('ng:src/bump', function(cb) {
    var config = this, pkg = this.pkg;
    var version = semver.inc(pkg.version, 'patch');
    return vfs.src(['./bower.json', './component.json', './package.json'], {cwd: config.cwd, allowEmpty: true})
      .pipe(through.obj(function(file, encoding, next) {
        var contents = JSON.parse(file.contents);
        contents.version = version;
        file.contents = new Buffer(JSON.stringify(contents, null, 2) + '\n', encoding);
        next(null, file);
      }))
      .pipe(vfs.dest(config.cwd));
  });

}

util.inherits(BumpRegistry, DefaultRegistry);

module.exports = BumpRegistry;
