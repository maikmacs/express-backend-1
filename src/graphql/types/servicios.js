import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

export const ServiciosType = new GraphQLObjectType({
  name: 'Servicios',
  description: 'Descripcion de servicios con los que cuenta la propiedad',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    nombe: {
      type: GraphQLString
    },
    descripcion: {
      type: GraphQLString
    }
  })
});
