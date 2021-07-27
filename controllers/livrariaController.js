const { Livro } = require("../models");

const livrariaController= {
    show: async( req, res)=>{
        const livros = await Livro.findAll();
        
     return res.json(livros);
    },
    
    editarLivro: async (req, res) =>{

        const {id} = req.params;
        const {estoque} = req.body;

        let livroEditado = await Livro.findByPk(id);
        
        livroEditado = await Livro.update({
            estoque
        },{
            where:{
                id
            }
        });
        
        return res.json(livroEditado);
    }

}

module.exports = livrariaController;