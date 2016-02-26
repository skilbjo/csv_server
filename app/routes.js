module.exports = function(app, controller) {

// Static Routes ==================
  app.route('/')
  	.get( controller.index );

  app.route('/csv')
  	.get( controller.csv );
};
