var mainCtrl = require('../controllers/mainCtrl.js'),
    middleware = require('../controllers/middleware.js');

module.exports = function(app) {

    app.route('/api/name')
        .get(mainCtrl.getName);

    app.route('/api/location')
        .get(mainCtrl.getLocation);

    app.route('/api/occupations')
        .get(mainCtrl.getOccupation);

    app.route('/api/occupations/latest')
        .get(mainCtrl.getLatest);

    app.route('/api/hobbies')
        .get(mainCtrl.getHobbies);

    app.route('/api/hobbies/:type')
        .get(mainCtrl.getHobby);

    app.route('/api/name')
        .put(mainCtrl.changeName);

    app.route('/api/location')
        .put(mainCtrl.changeLoc);

    app.route('/api/hobbies')
        .post(mainCtrl.addHobby);

    app.route('/api/occupations')
        .post(mainCtrl.addOcc);

    app.route('/api/skillz')
        .get(mainCtrl.getSkillz);

    app.route('/api/skillz')
        .post(mainCtrl.postSkillz);

    app.route('/api/secrets/:username/:pin')
        .get(middleware.verifyUser, mainCtrl.getName)
};