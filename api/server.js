const express = require('express');
const authRoute = require('../auth/authRoute');
const helmet = require("helmet");
const cors = require("cors");
const Trips = require("./tripModel");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());



server.get("/", (req, res) => {
    res.json({ message: "👋🌎🌍🌏, root dir sanity check" });
  });

server.use('/', authRoute);

server.get('/trips', async (req, res) => {
    try {
        const trip = await Trips.getAll()
        res.status(200).json(trip)
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }
});

server.get('/trips/:id', async (req, res) => {
    try {
        const trip = await Trips.getById(id = req.params.id);
        if(!trip) {
            return res.status(404).json({error:"No trip found with this id"});
        } else {
            return res.status(200).json(trip);
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

server.post('/trips', async (req, res) => {
    const{tripType, tripName, durationStart, durationEnd, privPro, datePosted, location,} = req.body;
    if(!tripType || !tripName || !durationStart || !durationEnd || !privPro || !datePosted || !location)
    return res.status(422).json({message:'you need to provide proper fields'})
    try {
        const newTrip = await Trips.insert(req.body);
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(500).json({message:'internal sever error'})
    }
   
  });

  server.delete('/trips/:id', async (req, res) => {
    try {
		const trip = await Trips.remove(id= req.params.id );
		if (!trip) {
			return res.status(404).json({ error: "No trip found for that Id." });
		} else {
			return res.status(204).end();
		}
	} catch (error) {
		res.status(500).json({ error: "Internal error." });
	}
  })


module.exports = server;
