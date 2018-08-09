import { GraphQLList } from 'graphql';

import Servicio from '../../../models/servicios';
import { ServiciosType } from '../../types/servicios';

const queryAllServicios = {
  type: new GraphQLList(ServiciosType),
  resolve() {
    const servicio = Servicio.find().exec();
    if (!servicio) throw new Error('Error al traer los servicios de la BD');
    return servicio;
  }
};

export default queryAllServicios;
