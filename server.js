var  express = require('express'),
	 app = express(),
	 bodyParser = require('body-parser'),
	 middleware = require('./controllers/middleware.js'),
	 port = 9000;

app.use(bodyParser.json());
app.use(middleware.setHeaders);

require('./routes/apiRoutes.js')(app);

app.listen(port, function() {
	console.log('Listening on ' + port);
});