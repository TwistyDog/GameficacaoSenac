const conexao = require("../config/database");

async function registarInteresse(req, res){
    try{
        const {visitanteId, cursoId} = req.body;

        if (!visitanteId || !cursoId) {
            return res.status(400).json({
                mensagem: "Informe o visitante e o curso."
            });
        }

        const sql = `
          INSERT INTO interesses (visitante_id, curso_id)
          VALUES (?,?)
        
        
        `;

        const [resultado] = await conexao.execute(sql, [
            visitanteId,
            cursoId
        ]);


        return res.status(201).json({
            mensagem: "Interesse registrado",
            insertId: resultado.insertId
        });
    } catch (erro){
        if (erro.code === "ER_DUP_ENTRY"){
            return res.status(409).json({
                mensagem: "Este curso ja foi registrado para o visitante."
            });
        }

        console.error(erro);

        return res.status(500).json({
            mensagem: "Erro ao registrar interesse"
        });
    }
}


module.exports = {registarInteresse};