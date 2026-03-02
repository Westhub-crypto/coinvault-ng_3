const pool = require('../config/db');

class FraudLog {
    static async log(userId, ip, device, riskScore){
        return pool.query(
            'INSERT INTO fraud_logs(user_id, ip, device, risk_score) VALUES($1,$2,$3,$4)',
            [userId, ip, device, riskScore]
        );
    }
}

module.exports = FraudLog;
