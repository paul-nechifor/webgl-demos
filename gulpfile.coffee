gulp = require 'gulp'
{exec} = require 'child_process'

gulp.task 'default', (cb) ->
  exec """
    mkdir -p static/js
    cp -r bower_components/threejs/build/three.min.js static/js/three.js
    cp bower_components/threejs/examples/js/loaders/OBJLoader.js static/js
    cp -r node_modules/webgl-world/data/ static/data/
  """, cb
