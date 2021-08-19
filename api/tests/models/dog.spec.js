const { Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Temperament.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if name column is not defined', (done) => {
        Temperament.create({algo: 'valor'})
          .then(() => done(new Error('No deberia crearse')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Temperament.create({ name: 'Jugeton' });
      });
    });
  });
});
