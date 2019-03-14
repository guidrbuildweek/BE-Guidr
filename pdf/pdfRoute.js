const fs = require ('fs');
const PDF = require('pdfkit');
const express = require("express");
const router = express.Router();
const PDF = require('../api/pdfModel');


function guideMainInfo (guide) {
    const guideMainInfo = {
        name: guide.name,
        tagline: guide.tagline,
        age: guide.age,
        experience: guide.experience,
        tripName: guide.tripName,
        tripType: guide.tripType,
        location:  guide.location,
        durationStart: guide.durationStart,
        durationEnd: guide.durationEnd,
        privPro: guide.privPro,
        datePosted: guide.datePosted,
    }
    let i = 1000;
    reutrn (
        guides.forEach((guide) => {
            i++;
            let doc = new PDF();
            doc.pipe(fs.createWriteStream(`pdf-files/${i}-${guide.name}.pdf`));
        
            doc.text(`ID: ${i}\nName: ${guide.name}\nSummary ${guide.tagline}\nAge: ${guide.age}\nExperience: ${guide.experience} years experience as a guide.`, 100, 100);

            doc.text(`Trip Name: ${guide.tripName}\nTrip Type: ${guide.tripType}\nLocation: ${guide.location}\nTrip Start: ${guide.durationStart}\nTrip End: ${guide.durationEnd}\nPrivate/Professional: ${guide.privPro}\nDatePosted: ${guide.datePosted}`)
        
            doc.end();
        
            console.log(`PDF created for ${guide.name}!`)
        })
    )
}
    


// const guides = [
//     {name: 'Susana', tagline:'Experienced trail guide in the pacific northwest, specializing in long intensive excursions.', age: 34, experience:'12' },
//     {name: 'Jodhi', tagline:'Professional rock climber.  Guiding free solo, dry tooling and bouldering adventures.', age: 27, experience:'5'},
//     {name: 'Robert', tagline:'Whitewater rafting instructor.', age: 45, experience:'20'}
// ];



// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const port = 4000;
// const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`server running on the port!`)
// })