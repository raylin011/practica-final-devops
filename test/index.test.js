const chai = require('chai');
const expect = chai.expect;
const app = require('../app');

describe('App', () => {
  it('Debería devolver ¡Hola, mundo! al hacer una solicitud GET a /', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('¡Hola, mundo!');
        done();
      });
  });
});