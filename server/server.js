const http = require('http');

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.setHeader("Access-Control-Expose-Headers", "*");
	res.setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	if(req.url === '/api/test') {
		res.end(JSON.stringify({
			data: [1, 2, 3]
		}));
	} else {
		res.end(JSON.stringify({
			data: 'Hello World'
		}));
	}
}).listen(8080, () => {
	console.log('server is running');
});