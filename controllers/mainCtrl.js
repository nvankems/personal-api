var name = {"name": "Donald Duck"},
    location = {"location": "Timbuktu"},
    occupations = ["Thwarting Bugs Bunny", "Tomfoolery"],
    hobbies = [{"name": "Watching cartoons", "type": "current"}, {"name": "Quacking", "type": "past"}],
    skillz = [
        {
            "id": 1,
            "name": "Node",
            "experience": "Novice"
        },
        {
            "id": 2,
            "name": "Javascript",
            "experience": "Advanced"
        },
        {
            "id": 3,
            "name": "Twerking",
            "experience": "Novice"
        }
    ];

module.exports = {

    getName: function (req, res) {
        res.send(name);
    },

    getLocation: function (req, res) {
        res.send(location)
    },

    getOccupation: function (req, res) {
        if (req.query.order === 'asc') {
            res.send({"occupations": occupations.sort()})
        } else if (req.query.order === 'desc') {
            res.send({"occupations": occupations.sort().reverse()});
        } else {
            res.send({"occupations": occupations});

        }
    },

    getLatest: function (req, res) {
        res.send({"latestOccupation": occupations[occupations.length - 1]});
    },

    getHobbies: function (req, res) {
        res.send({"hobbies": hobbies})
    },

    getHobby: function (req, res) {
        var newArr = [];
        for (var i = 0; i < hobbies.length; i++) {
            if (hobbies[i].type === req.params.type) {
                newArr.push(hobbies[i])
            }
        }
        res.send(newArr);
    },

    changeName: function (req, res) {
        name = req.body;
        res.send(name);
    },

    changeLoc: function (req, res) {
        location = req.body;
        res.send(location);
    },

    addHobby: function (req, res) {
        hobbies.push(req.body);
        res.send(hobbies);
    },

    addOcc: function (req, res) {
        occupations.push(req.body.occupation);
        res.send(occupations);
    },

    getSkillz: function (req, res) {
        if (req.query.experience) {
            var newArr= [];
            for (var i = 0; i < skillz.length; i++) {
                if (skillz[i].experience === req.query.experience)
                    newArr.push(skillz[i]);
        }
        res.send(newArr);
    } else {
            res.send(skillz);
        }

    },

    postSkillz: function (req, res) {
        var Id = skillz.length + 1;
        skillz.push({
            id: Id,
            name: req.body.name,
            experience: req.body.experience
        });
        res.send(skillz);
    },

    getSecrets: function (req, res) {
        res.send({});
    }
};