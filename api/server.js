const express = require('express');
const authRoute = require('../auth/authRoute');
const tripRoute = require('../trips/tripRoute');
const profileRoute = require('../profile/profileRoute');
const helmet = require("helmet");
const cors = require("cors");
const Trips = require("./tripModel");
const Profile = require('./profileModel');
const db = require('../data/dbConfig');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.get("/", (req, res) => {
    res.json({ message: "👋🌎🌍🌏, root dir sanity check" });
  });

server.use('/', authRoute);
server.use('/', tripRoute);
server.use('/', profileRoute);

module.exports = server;


// // TRIP CRUD START // TRIP CRUD START // TRIP CRUD START // TRIP CRUD START // TRIP CRUD START // TRIP CRUD START 
// //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET //GET 

// server.get('/trips', async (req, res) => {
//     try {
//         const trip = await Trips.getAll()
//         res.status(200).json(trip)
//     } catch (error) {
//         res.status(500).json({message:'internal server error'})
//     }
// });

// server.get('/trips/:id', async (req, res) => {
//     try {
//         const trip = await Trips.getById(id = req.params.id);
//         if(!trip) {
//             return res.status(404).json({error:"No trip found with this id"});
//         } else {
//             return res.status(200).json(trip);
//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update 
// server.put('/trips/:id', (req, res) => {
//     const id = req.params.id;
//     const update = req.body;
  
//     db('trips')
//       .where({ id })
//       .update(update)
//       .then(trip => {
//         res.status(200).json({ trip });
//       })
//       .catch(error => {
//         errorHandler(res, 500, 'There was an error updating the message.', error);
//       });
//   });


// // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST 
// server.post('/trips', async (req, res) => {
//     const{tripType, tripName, durationStart, durationEnd, privPro, datePosted, location,} = req.body;
//     if(!tripType || !tripName || !durationStart || !durationEnd || !privPro || !datePosted || !location)
//     return res.status(422).json({message:'you need to provide proper fields'})
//     try {
//         const newTrip = await Trips.insert(req.body);
//         res.status(201).json(newTrip);
//     } catch (error) {
//         res.status(500).json({message:'internal sever error'})
//     }
   
//   });

// //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE 
//   server.delete('/trips/:id', async (req, res) => {
//     try {
// 		const trip = await Trips.remove(id= req.params.id );
// 		if (!trip) {
// 			return res.status(404).json({ error: "No trip found for that Id." });
// 		} else {
// 			return res.status(204).end();
// 		}
// 	} catch (error) {
// 		res.status(500).json({ error: "Internal error." });
// 	}
//   })
// // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END 

// // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START 
// // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET 

// server.get('/profile', async (req, res) => {
//     try {
//         const profile = await Profile.getAll()
//         res.status(200).json(profile)
//     } catch (error) {
//         res.status(500).json({message:'internal server error'})
//     }
// });

// server.get('/profile/:id', async (req, res) => {
//     try {
//         const profile = await Profile.getById(id = req.params.id);
//         if(!profile) {
//             return res.status(404).json({error:"No profile found with this id"});
//         } else {
//             return res.status(200).json(profile);
//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

// //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update 
// server.put('/profile/:id', (req, res) => {
//     const id = req.params.id;
//     const update = req.body;
  
//     db('profile')
//       .where({ id })
//       .update(update)
//       .then(profile => {
//         res.status(200).json({ profile });
//       })
//       .catch(error => {
//         errorHandler(res, 500, 'There was an error updating the message.', error);
//       });
//   });

// // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST 
// server.post('/profile', async (req, res) => {
//     const{name, tagline, age, experience} = req.body;
//     if(!name || !tagline || !age || !experience)
//     return res.status(422).json({message:'you need to provide proper fields'})
//     try {
//         const newProfile = await Profile.insert(req.body);
//         res.status(201).json(newProfile);
//     } catch (error) {
//         res.status(500).json({message:'internal sever error'})
//     }
   
//   });

// //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE 
// server.delete('/profile/:id', async (req, res) => {
//     try {
// 		const profile = await Profile.remove(id= req.params.id );
// 		if (!profile) {
// 			return res.status(404).json({ error: "No trip found for that Id." });
// 		} else {
// 			return res.status(204).end();
// 		}
// 	} catch (error) {
// 		res.status(500).json({ error: "Internal error." });
// 	}
//   })




