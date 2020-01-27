import Booking from '../schemas/Booking';

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers; //TODO pegar informações do cabeçalho da requisição
    const { spot_id } = req.params; //TODO pegar informações doa parametros da requisição
    const { date } = req.body; //TODO pegar informações do corpo da requisição

    //TODO criar uma reserva
    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    //TODO trazer todas as informações do usuario e do spot
    await booking
      .populate('spot')
      .populate('user')
      .execPopulate();

    return res.json(booking);
  }
}

export default new BookingController();
