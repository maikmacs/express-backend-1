import { GraphQLList } from 'graphql';

import Caracteristica from '../../../models/caracteristicas';
import { CaracteristicasType } from '../../types/caracteristicas';

const queryAllCaracteristicas = {
  type: new GraphQLList(CaracteristicasType),
  resolve() {
    const caracteristicas = Caracteristica.find().exec();
    if (!caracteristicas)
      throw new Error('Error al traer las caracteristicas de la BD');
    return caracteristicas;
  }
};

export default queryAllCaracteristicas;
