const dbService = require('../services/dbService');

const getFeedbacks = (req, res) => {
    const feedbacks = dbService.getFeedbacks();
    res.json(feedbacks);
}

module.exports = {
  getFeedbacks
};
