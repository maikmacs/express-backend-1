import { graphql } from 'graphql';

import { setUpTest } from './helpers';
import schema from '../graphql';
import User from '../models/users';
import createToken from '../resolvers/createToken';

describe('Prueba de User', async () => {
  beforeEach(async () => await setUpTest());

  it('Probando query sin token deberia ser null', async () => {
    const query = `
        query{
            me{
                _id
                username
                nombre
                correo
            }
        }
      `;

    const result = await graphql(schema, query, {}, {});
    console.log('RESULT', result);
    const { data } = result;
    expect(data.me).toBe(null);
  });
});

it('Suma de 2 mas 2', () => {
  expect(2 + 2).toBe(4);
});
