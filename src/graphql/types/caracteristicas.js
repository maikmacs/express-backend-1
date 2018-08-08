import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

export const CaracteristicasType = new GraphQLObjectType({
  name: 'Caracteristicas',
  description: 'Caracteristicas de la propiedad',
  fields: () => ({
    _id: {
      type: GraphQLNonNull(GraphQLID)
    },
    nombe: {
      type: GraphQLString
    },
    numero: {
      type: GraphQLInt
    }
  })
});
