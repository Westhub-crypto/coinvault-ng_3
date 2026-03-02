const pool = require('../config/db');

class Referral {
    static async add(referrerId, refereeId, level, commission){
        return pool.query(
            'INSERT INTO referrals(referrer_id, referee_id, level, commission) VALUES($1,$2,$3,$4)',
            [referrerId, refereeId, level, commission]
        );
    }
}

module.exports = Referral;
