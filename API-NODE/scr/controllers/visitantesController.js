const conexao = require("../config/database");

async function cadasVisitante(req, res){
    try{
        const {nome, email, tel} = req.body;

        if (!nome || !email){
            return res.status(400).json({
                mensagem: "Nome e email sao obrigatorios."
            });
        }
        const sql = `
            INSERT INTO visitantes (nome, email, tel)
            VALUES (?, ?, ?)
        `;
        
        const [resultado] = await conexao.execute(sql, [
            nome,
            email,
            tel || null
        ]);
        
        return res.status(201).json({
            mensagem: "Visitante cadastrado com sucesso!",
            visitanteID: resultado.insertId
        });
    } catch (erro) {
        console.error(erro);

        return res.status(500).json({
            mensagem: "Erro ao cadastrar visitante."
        });
    }
    
}


module.exports = {cadasVisitante};



