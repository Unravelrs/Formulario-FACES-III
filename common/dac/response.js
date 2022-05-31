/** @module */
const self = module.exports;

const sql = require("./helper/sql");
const cache = require("./helper/cache");

const _key = "action.list";

/**
 * Obtiene la lista de acciones.
 * @returns {Promise<Action[]>}
 */
exports.list = async () => {
    let o = cache.get(_key);
    if (o) return o;
    o = await sql.query("CALL ActionList()");
    for (let a of o)
        a.regex = new RegExp(
            "^" +
                a.URL.replace(/\./g, "\\.")
                    .replace(/\//g, "\\/")
                    .replace("*", ".*")
                    .replace("@", "(\\w*)") +
                "$"
        );
    cache.set(_key, o);
    return o;
};

/**
 * Obtiene la acción en base al ID.
 * @param {number} id
 * @returns {Promise<Action>}
 */
exports.get = async id => {
    const res = (await self.list()).find(o => o.ID == id);
    return res;
};

/**
 * Obtiene la acción en base al endpoint.
 * @param {string} method
 * @param {string} url
 * @returns {Promise<Action>}
 */
exports.find = async (method, url) => {
    const list = await self.list();
    const action = list.find(o => {
        return o.Verb == method && o.regex.test(url);
    });
    return action;
};


exports.insert=async(data)=>{
    o=await sql.query(`CALL formularioFACES.insertData(?,?,?,?,?,?,?,?,?,?,?,?)`, [data.apellido1,data.apellido2,data.edad,data.nombre,data.nss,data.ocupacion,data.resnones,data.respares,data.sexo,data.resparesclasif,data.resnonesclasif,data.funcionfam])
    return o;
}
/**
 * @typedef Action
 * @property {number} ID
 * @property {string} Verb
 * @property {string} URL
 * @property {string} Description
 * @property {string} Permission
 * @property {boolean} Authenticate
 * @property {boolean} Audit
 * @property {RegExp} regex Expresión regular para detectar Pattern
 */
