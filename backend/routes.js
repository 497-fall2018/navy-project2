const Lost = require('./models/lost');
const Found = require('./models/found');

module.exports = (app) => {

	//route to add new lost item to DB
	//need to add image upload at some point
	app.post('/api/lost/create', (req, res) => {
		const item = new Lost();
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
		Lost.findById(item_id, (error, item) => {
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
			console.log(items)
			for (let i = 0; i < items.length; i++) {
				if (!(items[i].location in locations)) {
					console.log('New item')
					locations[items[i].location] = 1;
				} else {
					locations[items[i].location] = locations[items[i].location] + 1;
				}
			}
			console.log(locations);
			return res.json({ success: true, data: locations });
		});
	});

	// found items routes //

	//route to add new found item to DB
	//need to add image upload at some point
	app.post('/api/found/create', (req, res) => {
		const item = new Found();
		//get found item info from the frontend
		const { name, location, email, description, school, question, password } = req.body;
		//const image = req.file.filename;
		if (!name || !location || !description || !school || !question) { //set this later
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
		item.question = question;
		item.password = password;

		item.save(err => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		});

	});
	//update a found item given you have the password for it
	app.put('/api/found/update/:id/:password', (req, res) => {
		const _id = req.params.id;
		const password = req.params.password;
		const { body } = req;

		item_fields = [name, location, email, description, school, question, password];

		Found.find({ _id: req.params.id }, (error, item) => {
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
	//delete a found item post given you have the password for it
	app.delete('/api/found/delete/:id/:password', (req, res) => {
		const item_id = req.params.id;
		const password = req.params.password;
		if (!item_id) {
			return res.json({ success: false, error: 'No id provided' });
		}
		Found.remove({ _id: item_id }, (error, item) => {
			if (error) return res.json({ success: false, error });
			return res.json({ success: true });
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
					console.log('New item')
					locations[items[i].location] = 1;
				} else {
					locations[items[i].location] = locations[items[i].location] + 1;
				}
			}
			console.log(locations);
			return res.json({ success: true, data: locations });
		});
	});

	//frontend
};