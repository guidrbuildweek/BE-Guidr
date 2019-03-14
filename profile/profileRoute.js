// const Trips = require("./tripModel");
const Profile = require('../api/profileModel');
const express = require("express");
const router = express.Router();
const db = require('../data/dbConfig');


// PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START // PROFILE CRUD START 
// GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET 

router.get('/profile', async (req, res) => {
    try {
        const profile = await Profile.getAll()
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }
});

router.get('/profile/:id', async (req, res) => {
    try {
        const profile = await Profile.getById(id = req.params.id);
        if(!profile) {
            return res.status(404).json({error:"No profile found with this id"});
        } else {
            return res.status(200).json(profile);
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

//   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update //   Update 
router.put('/profile/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
  
    db('profile')
      .where({ id })
      .update(update)
      .then(profile => {
        res.status(200).json({ profile });
      })
      .catch(error => {
        errorHandler(res, 500, 'There was an error updating the message.', error);
      });
  });

// POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST // POST 
router.post('/profile', async (req, res) => {
    const{name, tagline, age, experience} = req.body;
    if(!name || !tagline || !age || !experience)
    return res.status(422).json({message:'you need to provide proper fields'})
    try {
        const newProfile = await Profile.insert(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(500).json({message:'internal sever error'})
    }
   
  });

//   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE //   DELETE 
router.delete('/profile/:id', async (req, res) => {
    try {
		const profile = await Profile.remove(id= req.params.id );
		if (!profile) {
			return res.status(404).json({ error: "No trip found for that Id." });
		} else {
			return res.status(204).end();
		}
	} catch (error) {
		res.status(500).json({ error: "Internal error." });
	}
  });

  module.exports = router;