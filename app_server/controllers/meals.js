/* GET HOMEPAGE */
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Gateways'});
};
module.exports = {
    meals
};