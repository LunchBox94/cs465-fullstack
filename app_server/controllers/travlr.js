/* Load the modules needed for this controller */
const fs = require('fs');
const path = require('path');

/* Read the trip information from the JSON file */
const trips = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../data/trips.json'),
    'utf8'
  )
);

/* Display the Travel page with the trip data */
const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips
  });
};

/* Make the travel controller available to other files */
module.exports = {
  travel
};