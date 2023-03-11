const pool = require('./../bd');

async function getNoticias(){
    try{
        let query = "select * from noticia";
        let rows = await pool.query(query);
        return rows;
    }catch(error){
        throw error;
    }
}

module.exports = {getNoticias};