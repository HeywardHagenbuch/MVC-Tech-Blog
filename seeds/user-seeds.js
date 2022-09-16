const { User } = require('../models');

const userData = [
    {
        username: "mike_marin",
        twitter: "mikemarin",
        github: "mikejmarin25",
        email: "mikemarin@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "heyward_h",
        twitter: "heywardh",
        github: "heywardh",
        email: "heyward_h@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "luke_s",
        twitter: "skywalker",
        github: "lwalker",
        email: "luke_s@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "martin_f",
        twitter: "martinfry3",
        github: "martinfry3",
        email: "martin_f@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "test",
        twitter: "test",
        github: "test",
        email: "test@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;