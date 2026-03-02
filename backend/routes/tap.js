const express = require('express');
const router = express.Router();

// Example tap-to-earn route
router.post('/:userId', async (req, res) => {
    res.json({ success: true, coinsEarned: 10 });
});

module.exports = router;
