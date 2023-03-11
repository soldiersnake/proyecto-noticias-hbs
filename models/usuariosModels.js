const pool = require('./../bd');

async function getUserByEmailAndPassdword(u, p){
    try{
        let query = "select id_usuario, nombre from usuario where mail = ? and password = ?";
        const rows = await pool.query(query,[u,p]);
        return rows;
    }catch(error){
        throw error;
    }
};

module.exports = {getUserByEmailAndPassdword};