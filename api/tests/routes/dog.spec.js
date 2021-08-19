/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id: '762ce62c-c8eb-4347-b2cd-675d26956f24',
  name: 'scoby',
  height: '15-22',
  weight: '5-12',
  life_span: '15 years',
  image: 'www.fotodeperro.com/1.jpg',
  temperamentsArr: [1,2]
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs, debe poder guardar en la BD una nueva raza', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
  describe('GET /dog/id, deberia retornar status 200 si existe el ID de Raza', () => {
    it('should get 200', () =>
      agent.get('/dogs/9').expect(200)
    );
  });
  describe('GET /dog?name=xxx, deberia retornar status 200 si existe el nombre de Raza', () => {
    it('should get 200', () =>
      agent.get('/dogs?name=terrier').expect(200)
    );
  });
});
