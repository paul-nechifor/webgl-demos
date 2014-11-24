webglWorld = require 'webgl-world'

examples =
  plasma: webglWorld.examples.Plasma
  moire: webglWorld.examples.Moire
  disapproval: webglWorld.examples.Disapproval

main = ->
  example = examples[window.demoName]
  return showIndex() unless example
  cleanupPage()
  prefix = staticPath + '/data/' + window.demoName
  example.loadResources prefix, ->
    world = new example {}
    world.start()

showIndex = ->
  ul = $ '#demo-list'
  for name in Object.keys(examples).sort()
    $('<li/>').appendTo ul
    .append $('<a/>').attr('href', rootPath + name).text name
  return

cleanupPage = ->
  $('header').remove()
  $('.readable').remove()
  $('footer').remove()

$ main
