module.exports = function(app, controller) {

// Static Routes ==================
  app.route('/')
  	.get( controller.index );

  app.route(/./)
  	.get( controller.download );
};
