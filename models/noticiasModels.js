const pool = require("./../bd");

async function getNoticias() {
  try {
    let query =
      "select *, DATE_FORMAT(fecha_creacion, '%d/%m/%Y') as fecha from noticia where estado = 1 order by id asc";
    let rows = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
};

async function getComentariosById(id){
  try {
    let query = "select * from comentario where id_noticia = ? order by id desc";
    const rows = await pool.query(query, id);
    return rows;
  } catch (error) {
    throw error;
  }
};

async function crearComentario(obj){
  try {
    let query = "insert into comentario set ?";
    const rows = await pool.query(query,[obj]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getNoticiasById(id) {
  try {
    let query =
      "select *, DATE_FORMAT(fecha_creacion, '%d/%m/%Y') as fecha from noticia where id = ?";
    // el ? se reemplaza con informacion a la hora de ejecutar la query
    let rows = await pool.query(query, [id]);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getNoticias, getNoticiasById, crearComentario, getComentariosById };
