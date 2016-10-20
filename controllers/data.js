var _data = {
    people: [{
        name: "Callum Leahy",
        emoticon: 'https://www.placecage.com/200/300',
        bio: "Proud problem solver. Future teen idol. Twitter fan. Unable to type with boxing gloves on. Social media guru. Entrepreneur. Hardcore food lover. Zombie buff.",
        rating: 100,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "Jeff Bridges",
        emoticon: 'https://www.placecage.com/gif/200/300',
        bio: "Evil music ninja. Travel enthusiast. Proud internet fanatic. Professional problem solver. Tv advocate. Zombie geek.",
        rating: 63,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "Colin Jones",
        emoticon: 'https://www.placecage.com/c/200/300',
        bio: "Organizer. Alcohol expert. Total beer trailblazer. Certified food specialist. Devoted analyst. Bacon advocate.",
        rating: 34,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "Adam Willerton",
        emoticon: 'https://fillmurray.com/g/200/300',
        bio: "Extreme twitter aficionado. Creator. Communicator. Hardcore travel fanatic.",
        rating: 84,
        email: 'callumleahy23@googlemail.com',
        isLiked: false

    }, {
        name: "Trevor Stephens",
        emoticon: 'https://www.placecage.com/c/200/300',
        bio: "Beer maven. Professional twitter ninja. Tv guru. Explorer. Social media advocate. Alcohol fan. Hipster-friendly reader. Analyst. Internet trailblazer.",
        rating: 78,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "William Wallace",
        emoticon: 'https://fillmurray.com/200/300',
        bio: "Future teen idol. Professional bacon maven. Subtly charming twitter buff. Music aficionado.",
        rating: 57,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "Phil Peters",
        emoticon: 'https://stevensegallery.com/g/200/300',
        bio: "Problem solver. Proud travel evangelist. Friendly internet geek. Alcohol maven. Explorer.",
        rating: 92,
        email: 'callumleahy23@googlemail.com',
        isLiked: false
    }, {
        name: "Kevin Smith",
        emoticon: 'https://stevensegallery.com/200/300',
        bio: "Student. Subtly charming tv practitioner. Friendly analyst. Friend of animals everywhere.",
        rating: 70,
        email: 'callumleahy23@googlemail.com',
        isLiked: false

    }],
    jobs: [{
        title: 'Software Engineer',
        company: 'Sky Betting And Gaming',
        location: 'Leeds'
    }, {
        title: 'Checkout Supervisor',
        company: 'Asda',
        location: 'Sheffield'
    }, {
        title: 'Business Advisor',
        company: 'BJSS',
        location: 'Leeds'
    }, {
        title: 'Mechanical Engineer',
        company: 'BMW',
        location: 'Wakefield'
    }, {
        title: 'Aerospace Engineer',
        company: 'RocketTech',
        location: 'Manchester'
    }, {
        title: 'Salesperson',
        company: 'Dixons',
        location: 'Wakefield'
    }]
    favourites: [],
    authUser: [{
        user: 'test',
        password: 'test',
        type: 'employer',
        favourites: []
    }, {
        user: 'test1',
        password: 'test1',
        type: 'employee',
        favourites: []
    }],
    compareUser: {},
    loggedIndex: 0
}

function indexGet(req, res) {
    res.send(_data);
}

function postGame(req, res) {
    console.log(req.body);
    _data = req.body;
    res.send(req.body);
}
module.exports = {
    index: indexGet,
    post: postGame
};