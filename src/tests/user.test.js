import { graphql } from 'graphql';

import { setUpTest } from './helpers';
import schema from '../graphql';
import User from '../models/users';
import createToken from '../resolvers/createToken';

describe('Prueba de User', async () => {
  beforeAll(async () => await setUpTest());
  it('Probando query de me sin token deberia ser null', async () => {
    //language=GraphQL
    const query = `
      query {
          me{
              _id
               nombre
              username
          }
      }
      `;
    const result = await graphql(schema, query, {}, {});
    const { data } = result;
    expect(data.me).toBe(null);
  });

  it('Probando query de me que deberia ser un usuario', async () => {
    //console.log('Iniciando el test 2');
    //language=GraphQL
    const query = `
    
      query{
          me{
              _id,
              nombre
          }
      }
  
  `;
    //console.log('Paso const query');

    const user = new User({
      nombre: 'user',
      apellidos: 'user3',
      correo: 'test@test.com',
      fecha_nacimiento: '1990-06-19',
      password: 'test123',
      username: 'user4',
      genero: 'Masculino',
      pais: 'Mexico',
      ubicacion: 'casa',
      rol: 'USER'
    });
    const newUser = await user.save();
    const context = { user: newUser };
    const result = await graphql(schema, query, {}, context);
    const { data } = result;
    expect(data.me._id).toBe(newUser._id.toString());
  });
});

it('Suma de 2 mas 2', () => {
  expect(2 + 2).toBe(4);
});
