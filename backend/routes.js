const lostItem = require('./models/lost');
const foundItem = require('./models/found');

module.exports = (app) => {
	//backend
	app.get('/api/hello', (req, res) => {
		res.json({ "hello": "world" });
	});
	//route to add new lost item to DB
	//need to add image upload at some point
	app.post('/api/lost', (req, res) => {
		const item = new lostItem();
		//get lost item info from the frontend
		const { name, location, email, description, school, reward, password } = req.body;
		//const image = req.file.filename;
		if (!name || !location || !description || !school || !reward) { //set this later
			return res.json({
				success: false,
				error: 'You must provide a name, caption, and image.'
			});
		}
		//set all of the fields we got from the fontend
		item.name = name;
		item.location = location;
		item.email = email;
		item.description = description;
		item.school = school;
		item.reward = reward;
		item.password = password;

		item.save(err => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		});

	});
	//get list of lost items
	app.get('/api/lost', (req, res) => {
		lostItem.find((err, items) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: items });
		});
	});
	//frontend
};