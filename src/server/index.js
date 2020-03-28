const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const port = process.env.PORT || 8080;

const DIST_DIR = path.join(__dirname, '../../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
// Serve the static files from the React app
app.use(express.static(DIST_DIR));

app.get('/api/getUsername', (req, res) =>
	res.send({
		username: os.userInfo().username
	})
);

app.get('/', (req, res) => {
	res.sendFile(path.join(HTML_FILE));
});

app.listen(port, function() {
	console.log('App listening on port: ' + port);
});
