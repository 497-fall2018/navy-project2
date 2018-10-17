module.exports = (app) => {
	//backend
	app.get('/api/hello', (req, res) => {
		res.json({ "hello": "world", })
	});
	//frontend
};