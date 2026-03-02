const express = require('express');
const router = express.Router();

// Example referral API
router.get('/:userId', async (req, res) => {
    res.json({ success: true, referrals: [] });
});

module.exports = router;
