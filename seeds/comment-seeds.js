const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is awesome!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, I cant believe this works"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Great, I am great"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We have one follower, and it's me!!!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep it up!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Ok I am bored!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;