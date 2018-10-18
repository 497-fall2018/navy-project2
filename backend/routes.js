import LostItem from './models/lost';
import FoundItem from '/models/found';

module.exports = (app) => {
	//backend
	app.get('/api/hello', (req, res) => {
		res.json({ "hello": "world" });
	});
	//route to add new lost item to DB
	app.post('/api/lost/', (req, res) => {
		const item = new Lost();
		//get lost item info from the frontend
		const { name, location, email, description, school, reward, password } = req.body;
		//const image = req.file.filename;
		if (false) { //set this later
			return res.json({
				success: false,
				error: 'You must provide a name, caption, and image.'
			});
		}
		//just the important ones for first demo
		item.name = name;
		item.location = location;
		item.description = description;
		item.reward = reward;

		item.save(err => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true });
		});

	});
	//get list of lost items
	app.get('/api/lost', (req, res) => {
		LostItem.find((err, comments) => {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: items });
		});
	});
	//frontend
};