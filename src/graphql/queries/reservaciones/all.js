import { GraphQLList } from 'graphql';

import Reservacion from '../../../models/reservaciones';
import { ReservacionesType } from '../../types/reservaciones';

const queryAllReservaciones = {
  type: new GraphQLList(ReservacionesType),
  resolve() {
    const reservacion = Reservacion.find().exec();
    if (!reservacion)
      throw new Error('Error al traer las reservaciones de la BD');
    return reservacion;
  }
};

export default queryAllReservaciones;
