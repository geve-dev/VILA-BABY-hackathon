const repo = require('../models/feed_models');

const GetFeed = async (req, res) => {
    try {
        const feed = await repo.getFeed();
        res.json(feed);
    }catch (error) {
    console.error(error);

    res.status(500).json({
        error: error.message
    });
}
};

module.exports = {
    GetFeed
}