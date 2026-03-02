const pool = require('../config/db');

class TapCoin {
    static async add(userId, coins){
        return pool.query(
            'INSERT INTO tap_coins(user_id, coins_earned) VALUES($1,$2)',
            [userId, coins]
        );
    }
}

module.exports = TapCoin;
