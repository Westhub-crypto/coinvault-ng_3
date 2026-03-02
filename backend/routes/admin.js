const express = require('express');
const router = express.Router();
require('dotenv').config();

// Example admin login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
        res.json({ success: true, token: 'admin-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
