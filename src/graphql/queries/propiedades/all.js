import { GraphQLList } from 'graphql';

import Propiedad from '../../../models/propiedades';
import { PropiedadesType } from '../../types/propiedades';

const queryAllPropiedades = {
  type: new GraphQLList(PropiedadesType),
  resolve() {
    const propiedad = Propiedad.find().exec();
    if (!propiedad) throw new Error('Error al traer los usuarios de la BD');
    return propiedad;
  }
};

export default queryAllPropiedades;
