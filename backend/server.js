const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const tapRoutes = require('./routes/tap');
const referralRoutes = require('./routes/referral');
const withdrawRoutes = require('./routes/withdraw');
const adminRoutes = require('./routes/admin');

require('dotenv').config();
require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/tap', tapRoutes);
app.use('/api/referral', referralRoutes);
app.use('/api/withdraw', withdrawRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
