import Spot from '../schemas/Spot';

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers; //TODO pegar informações do cabeçalho da requisição

    const spots = await Spot.find({ user: user_id }); //TODO buscar os spots vinculados ao usuario acima

    return res.json(spots); //TODO retornar os spots
  }
}

export default new DashboardController();
