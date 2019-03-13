const fs = require ('fs');
const PDF = require('pdfkit');

const guides = [
    {name: 'Susana', tagline:'Experienced trail guide in the pacific northwest, specializing in long intensive excursions.', age: 34, experience:'12' },
    {name: 'Jodhi', tagline:'Professional rock climber.  Guiding free solo, dry tooling and bouldering adventures.', age: 27, experience:'5'},
    {name: 'Robert', tagline:'Whitewater rafting instructor.', age: 45, experience:'20'}
];

let i = 1000;

guides.forEach((guide) => {
    i++;

    let doc = new PDF();

    doc.pipe(fs.createWriteStream(`pdf-files/${i}-${guide.name}.pdf`));

    doc.text(`ID: ${i}\nName: ${guide.name}\nSummary ${guide.tagline}\nAge: ${guide.age}\nExperience: ${guide.experience} years experience as a guide.`, 100, 100);

    doc.end();

    console.log(`PDF created for ${guide.name}.`)
})