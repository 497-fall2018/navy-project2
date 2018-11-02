const lostItem = require('./models/lost');
const foundItem = require('./models/found');

module.exports = (app) => {
	//backend
	app.get('/api/hello', (req, res) => {
		res.json({ "hello": "world" });
	});
	//route to add new lost item to DB
	//need to add image upload at some point
	app.post('/api/lost/create', (req, res) => {
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
	//update a lost item given you have the password for it
	app.put('/api/lost/update/:id/:password', (req, res) => {
		const item_id = req.params.id;
		const password = req.params.password;
		const { body } = req;
		if (!item_id) {
			return res.json({ success: false, error: 'No id provided' });
		}
		item_fields = [name, location, email, description, school, reward, password];
		console.log('h');
		lostItem.findById(item_id, (error, item) => {
			console.log('l');
			if (error) return res.json({ success: false, error });
			if (item.password !== password) {
				return res.json({ success: false, error: 'Incorrect password' });
			}
			console.log(body);
			//check to see which fields we got from frontend and update only those
			for (let i = 0; i < item_fields.length; i++) {
				if (body[i]) {
					item[i] = body[i];
					console.log('fixed');
				}
			}
			item.save(error => {
				if (error) return res.json({ success: false, error });
				return res.json({ success: true });
			});
		});
	});
	//delete a lost item post given you have the password for it
	app.delete('/api/lost/delete/:id/:password', (req, res) => {
		const item_id = req.params.id;
		const password = req.params.password;
		if (!item_id) {
			return res.json({ success: false, error: 'No id provided' });
		}
		lostItem.remove({ _id: item_id }, (error, item) => {
			if (error) return res.json({ success: false, error });
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