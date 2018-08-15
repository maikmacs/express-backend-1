import mongoose from 'mongoose';

process.env.NODE_ENV = 'test';

const config = {
  db: {
    test:
      'mongodb://db_AIRtest:AIRtest1234!@ds121312.mlab.com:21312/airbnbtesting'
  },
  connection: null
};

function connect() {
  return new Promise((resolve, reject) => {
    if (config.connection) {
      return resolve();
    }

    const mongoUri =
      'mongodb://prueba:prueba123@ds221242.mlab.com:21242/testing';

    mongoose.Promise = Promise;

    const options = {
      server: {
        auto_reconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
      },
      useNewUrlParser: true
    };

    mongoose.connect(
      mongoUri,
      options
    );

    config.connection = mongoose.connection;

    config.connection.once('open', resolve).on('error', e => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);

        mongoose.connect(
          mongoUri,
          options
        );
      }

      console.log(e);
      reject(e);
    });
  });
}

function clearDataBase() {
  return new Promise(resolve => {
    let cont = 0;
    let max = Object.keys(mongoose.connection.collections).length;
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {
        cont++;
        if (cont >= max) {
          resolve();
        }
      });
    }
  });
}

export async function setUpTest() {
  await connect();
  await clearDataBase();
}
