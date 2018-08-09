import user from './user';
import propiedades from './propiedades';
import caracteristicas from './caracteristicas';
import servicios from './servicios';
import reservaciones from './reservaciones';

export default {
  ...user,
  ...propiedades,
  ...caracteristicas,
  ...servicios,
  ...reservaciones
};
