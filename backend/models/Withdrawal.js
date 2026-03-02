const pool = require('../config/db');

class Withdrawal {
    static async request(userId, amount){
        return pool.query(
            'INSERT INTO withdrawals(user_id, amount, status) VALUES($1,$2,$3)',
            [userId, amount, 'pending']
        );
    }
}

module.exports = Withdrawal;
