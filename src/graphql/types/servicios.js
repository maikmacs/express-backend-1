import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

export const ServiciosType = new GraphQLObjectType({
  name: 'Servicios',
  description: 'Descripcion de servicios con los que cuenta la propiedad',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type: GraphQLString
    },
    descripcion: {
      type: GraphQLString
    }
  })
});

export const ServiciosInputType = new GraphQLInputObjectType({
  name: 'addServicios',
  description: 'Mutation para agregar propiedades',
  fields: () => ({
    nombre: {
      type: GraphQLString
    },
    descripcion: {
      type: GraphQLString
    }
  })
});
