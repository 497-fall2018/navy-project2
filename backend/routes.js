const Lost = require('./models/lost');
const Found = require('./models/found');

module.exports = (app) => {

	//route to add new lost item to DB
	//need to add image upload at some point
	app.post('/api/lost/create', (req, res) => {
		const item = new Lost();
		//get lost item info from the frontend
		const { name, location, email, description, reward, password } = req.body;
		//const image = req.file.filename;
		if (!name || !location || !description || !reward) { //set this later
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
		const item_fields = ['name', 'location', 'email', 'description', 'reward', 'password'];
		Lost.findById(item_id, (error, item) => {
			if (error) return res.json({ success: false, error });
			if (item.password != password) {
				return res.json({ success: false, error: 'Incorrect password' });
			}
			//check to see which fields we got from frontend and update only those
			for (let i = 0; i < item_fields.length; i++) {
				if (body[item_fields[i]]) {
					item[item_fields[i]] = body[item_fields[i]];
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
		let item_password;
		if (!item_id) {
			return res.json({ success: false, error: 'No id provided' });
		}
		Lost.findById(req.params.id, (error, item) => {
			if (error) return res.json({ success: false, error });
			item_password = item.password;
		});
		if (item_password !== password) {
			return res.json({ success: false, error: 'Incorrect password' });
		}
		Lost.remove({ _id: item_id }, (error, item) => {
			if (error) return res.json({ success: false, error });
			return res.json({ success: true });
		});
	});
	//get list of lost items
	app.get('/api/lost', (req, res) => {
		Lost.find((err, items) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: items });
		});
	});

	//get all of the lost locations in use and their frequency
	//returns a locations object which keys being the location and value the frequency
	app.get('/api/lost/locations', (req, res) => {
		Lost.find((err, items) => {
			if (err) return res.json({ success: false, error: err });
			let locations = {}
			for (let i = 0; i < items.length; i++) {
				if (!(items[i].location in locations)) {
					locations[items[i].location] = 1;
				} else {
					locations[items[i].location] += 1;
				}
			}
			return res.json({ success: true, data: locations });
		});
	});

	// found items routes //

	//route to add new found item to DB
	//need to add image upload at some point
	app.post('/api/found/create', (req, res) => {
		const item = new Found();
		//get found item info from the frontend
		const { name, location, email, description,  question, password } = req.body;
		//const image = req.file.filename;
		if (!name || !location || !description || !question) { //set this later
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
		item.question = question;
		item.password = password;

		item.save(err => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		});

	});
	//update a found item given you have the password for it
	app.put('/api/found/update/:id/:password', (req, res) => {
		const id = req.params.id;
		const password = req.params.password;
		const { body } = req;

		const item_fields = ['name', 'location', 'email', 'description', 'question', 'password'];

		Found.findById(req.params.id, (error, item) => {
			if (error) return res.json({ success: false, error });
			if (item.password !== password) {
				return res.json({ success: false, error: 'Incorrect password' });
			}
			//check to see which fields we got from frontend and update only those
			for (let i = 0; i < item_fields.length; i++) {
				if (body[item_fields[i]]) {
					item[item_fields[i]] = body[item_fields[i]];
				}
			}
			item.save(error => {
				if (error) return res.json({ success: false, error });
				return res.json({ success: true });
			});
		});
	});
	//delete a found item post given you have the password for it
	app.delete('/api/found/delete/:id/:password', (req, res) => {
		const item_id = req.params.id;
		const password = req.params.password;
		let item_password;
		if (!item_id) {
			return res.json({ success: false, error: 'No id provided' });
		}
		Found.findById(req.params.id, (error, item) => {
			if (error) return res.json({ success: false, error });
			item_password = item.password;
			if (item_password !== password) {
				return res.json({ success: false, error: 'Incorrect password' });
			}
			Found.remove({ _id: item_id }, (error, item) => {
				if (error) return res.json({ success: false, error });
				return res.json({ success: true });
			});
		});
	});
	//get list of found items
	app.get('/api/found', (req, res) => {
		Found.find((err, items) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: items });
		});
	});

	//get all of the found locations in use and their frequency
	//returns a locations object which keys being the location and value the frequency
	app.get('/api/found/locations', (req, res) => {
		Found.find((err, items) => {
			if (err) return res.json({ success: false, error: err });
			let locations = {}
			console.log(items)
			for (let i = 0; i < items.length; i++) {
				if (!(items[i].location in locations)) {
					locations[items[i].location] = 1;
				} else {
					locations[items[i].location] += 1;
				}
			}
			console.log(locations);
			return res.json({ success: true, data: locations });
		});
	});

	//frontend
};
