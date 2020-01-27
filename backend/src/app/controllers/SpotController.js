import User from '../schemas/User';
import Spot from '../schemas/Spot';

class SpotController {
  async index(req, res) {
    const { tech } = req.query; //TODO pegar informações dos parametros da requisição

    const spots = await Spot.find({ techs: tech }); //TODO buscar spots que tem a informação vinculada

    return res.json(spots); //TODO retorna os spots
  }

  async store(req, res) {
    const { filename } = req.file; //TODO pegar informações do campo de arquivos da requisição
    const { company, techs, price } = req.body; //TODO pegar informações do corpo da requisição
    const { user_id } = req.headers; //TODO pegar informações do cabeçalho de arquivos

    const user = await User.findById(user_id); //TODO buscar um usuario pelo seu id

    //TODO verificar se o usuario existe
    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    //TODO criar um spot
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price,
    });

    return res.json(spot); //TODO retornar as informações do spot
  }
}

export default new SpotController();
