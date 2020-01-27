import User from '../schemas/User';

class SessionController {
  async store(req, res) {
    const { email } = req.body; //TODO pegar informação do corpo da requisição

    let user = await User.findOne({ email }); //TODO buscar unico usuario com essa informação

    //TODO verifica se não existe um usuario na consulta acima
    if (!user) {
      user = await User.create({ email }); //TODO cria um novo usuario
    }

    return res.json(user); //TODO retorna o usuario
  }
}

export default new SessionController();
