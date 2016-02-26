var
	path = require('path'),
	app = require('express')()
	;

// controller ===
var controller = require('./app/controller.js')

require('./app/routes.js')(app, controller);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
	console.log('Server started on port: ',app.get('port'));
});



