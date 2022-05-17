const mysql = require("mysql");
const config = require("config");

/**
 * Pool de conexiones de MySQL.
 * Las configuraciones en config/default.json:mysql sobrescriben las dadas aquí.
 * Los compos tipo BIT y JSON reciben tratamiento especial.
 */
const pool = mysql.createPool(
    Object.assign(
        {
            connectionLimit: 100,
            multipleStatements: true,
            typeCast: function castField(field, useDefaultTypeCasting) {
                if (field.type === "BIT" && field.length === 1) {
                    const bytes = field.buffer();
                    return bytes[0] === 1;
                }
                if (field.type === "JSON" && field.length > 0) {
                    const bytes = field.buffer();
                    return bytes ? JSON.parse(bytes.toString()) : null;
                }
                return useDefaultTypeCasting();
            }
        },
        config.has("mysql") ? config.get("mysql") : {}
    )
);

/**
 * Ejecuta una consulta de MySQL.
 * @param {string} sql
 * @param {any[]} params
 */
exports.query = async (sql, params = null) => {
    return await new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
                reject(err);
            }
            connection.query(sql, params, function (err, result) {
                connection.release();
                if (err) {
                    console.log(err);
                    reject(err);
                }
                if (result && result[0]) resolve(JSON.parse(JSON.stringify(result[0])));
                else resolve(null);
            });
        });
    });
};
