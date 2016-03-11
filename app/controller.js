var path = require('path'),
	fs = require('fs'),
	devDir = '/Users/jskilbeck/Code/Node/aqtl/csv',
	prodDir = '/home/skilbjo/node/app/aqtl/csv',
	csvdir = prodDir
	;

exports.index = function(req, res) {
	res.send('Hello world');
};

exports.download = function(req, res){
	var dir = req.originalUrl
		,folder = dir.split(path.sep)[dir.split(path.sep).length - 2],
		file = dir.split(path.sep).pop()
		;

	console.log({
		'request_dir': dir
		,'folder': folder,
		'file': file,
		'full_file_path': path.join(csvdir,dir+'.csv')
		});

	res.sendFile(path.join(csvdir,dir+'.csv'));
};

