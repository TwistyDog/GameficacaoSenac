const conexao = require("../config/database");

async function listarCursos(req, res){
    try{
        const sql = `
             SELECT id, nome, descricao
             FROM cursos
             WHERE ativo = TRUE
        
        
        
        
        `;
        const [cursos] = await conexao.execute(sql);

        return res.status(200).json(cursos);
    } catch (error){
        console.error(erro);

        return res.status(500).json({
            mensagem: "Error ao consultar cursos."
        });
    }


}


module.exports = {listarCursos};