gulp = require 'gulp'
{exec} = require 'child_process'

gulp.task 'default', (cb) ->
  exec """
    mkdir -p static/js
    cp -r bower_components/threejs/build/three.min.js static/js/three.js
  """, cb
