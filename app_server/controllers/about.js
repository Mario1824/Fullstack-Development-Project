/* GET ABOUT */
const about = (req, res) => {
    res.render('about', {title: 'Travlr Gateways'});
};
module.exports = {
    about
};