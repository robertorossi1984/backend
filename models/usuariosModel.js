var pool = require('./bd'); // llamando datos BD
var md5 = require('md5');
const { ASCII_GENERAL_CI } = require('mysql/lib/protocol/constants/charsets');
const async = require('hbs/lib/async');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }