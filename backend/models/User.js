const pool = require('../config/db');

class User {
    static async findById(id){
        const res = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
        return res.rows[0];
    }
}

module.exports = User;
