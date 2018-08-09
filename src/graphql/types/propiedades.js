import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import { UserType } from './users';
import User from '../../models/users';

import { CaracteristicasType } from './caracteristicas';
import Caracteristica from '../../models/caracteristicas';

import { ServiciosType } from './servicios';
import Servicio from '../../models/servicios';

export const CalificacionType = new GraphQLObjectType({
  _id: {
    type: GraphQLNonNull(GraphQLID)
  },
  comentario: {
    type: GraphQLString
  },
  estrellas: {
    type: GraphQLInt
  }
});

export const PropiedadesType = new GraphQLObjectType({
  name: 'Propiedades',
  description: 'Descripcion de Propiedades',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    nombe: {
      type: GraphQLString
    },
    descripcion_corta: {
      type: GraphQLString
    },
    descripcion_larga: {
      type: GraphQLString
    },
    ubicacion: {
      type: GraphQLString
    },
    pais: {
      type: GraphQLString
    },
    user: {
      type: UserType,
      resolve(propiedad) {
        const { user } = propiedad;
        return User.findById(user).exec();
      }
    },
    tipo: {
      type: GraphQLInt
    },
    precio: {
      type: GraphQLInt
    },
    calificacion: {
      type: new GraphQLList(CalificacionType)
    },
    caracteristicas: {
      type: new GraphQLList(CaracteristicasType),
      resolve(propiedad) {
        const { caracteristicas } = propiedad;
        return Caracteristica.find({ _id: { $in: caracteristicas } }).exec();
      }
    },
    servicios: {
      type: new GraphQLList(ServiciosType),
      resolve(servicio) {
        const { servicios } = servicio;
        return Servicio.find({ _id: { $in: servicios } }).exec();
      }
    },
    fotos: {
      type: GraphQLList(GraphQLString)
    },
    disponibilidad_inicial: {
      type: GraphQLList(GraphQLString)
    },
    disponibilidad_final: {
      type: GraphQLList(GraphQLString)
    }
  })
});
