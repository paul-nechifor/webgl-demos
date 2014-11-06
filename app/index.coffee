module.exports =
  routes:
    index: (req, res) ->
      opts = demoName: req.params.demo or ''
      res.render res.locals.app.views.layout, opts
