const express = require('express');
const router = express.Router();

// Example withdrawal request
router.post('/:userId', async (req, res) => {
    res.json({ success: true, message: 'Withdrawal requested' });
});

module.exports = router;
