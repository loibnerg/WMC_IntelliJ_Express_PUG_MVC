/* GET 'home' page */
const homeList = (req, res) => {
    res.render('index', {title: 'Home'});
}

/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', {title: 'Location info'});
}

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', {title: 'Add review'});
}

const path = require('path');
const getPlain = (req, res) =>{
    res.sendFile(path.join(__dirname, '/../views/plain.html'));
}

module.exports = {
    homeList,
    locationInfo,
    addReview,
    getPlain
}