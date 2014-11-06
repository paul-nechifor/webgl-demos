webglWorld = require 'webgl-world'

examples =
  plasma: webglWorld.examples.Plasma

main = ->
  example = examples[window.demoName]
  return showIndex() unless example
  world = new example {}
  world.start()
  $('header').remove()
  $('.readable').remove()
  $('footer').remove()

showIndex = ->
  ul = $ '#demo-list'
  for name in Object.keys(examples).sort()
    $('<li/>').appendTo ul
    .append $('<a/>').attr('href', rootPath + name).text name
  return

$ main
