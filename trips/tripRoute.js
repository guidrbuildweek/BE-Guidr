const Trips = require("../api/tripModel");
// const Profile = require('./profileModel');
const express = require("express");
const router = express.Router();
const db = require('../data/dbConfig');


router.get('/trips', async (req, res) => {
    try {
        const trip = await Trips.getAll()
        res.status(200).json(trip)
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }
});

router.get('/trips/:id', async (req, res) => {
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

//   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update 
router.put('/trips/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    db('trips')
      .where({ id })
      .update(update)
      .then(trip => {
        res.status(200).json({ trip });
      })
      .catch(error => {
        errorHandler(res, 500, 'There was an error updating the message.', error);
      });
  });


// POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST 
router.post('/trips', async (req, res) => {
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

//   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE 
  router.delete('/trips/:id', async (req, res) => {
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
// TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END // TRIP CRUD END 

module.exports = router;