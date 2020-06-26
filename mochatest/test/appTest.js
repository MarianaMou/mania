const should = require('chai').should();
var server = require('./../../src/app/NodeJS/server');
const test = require('chai');
var chaiHttp = require('chai-http');
test.should();
test.use(chaiHttp);

describe("Tester le login", function(){


  it.skip("Vérifie que le mot de passe est faux lors de la connexion", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Jzu"

    };
    test.request(server)
    .post('/api/login')
    .send(loginInfo)
    .end(function(err,res){
      should.exist(res.body);
      res.body.should.have.property('status');
      res.body.should.have.property('message');
      res.body.message.should.be.a("string");
      res.body.message.should.equal('mot de passe incorrect');
      res.body.status.should.equal(false);
      done();
          })

  })

  it.skip("Vérifie que Shania existe dans la base de données", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Bouu"

    };
    test.request(server)
    .post('/api/login')
    .send(loginInfo)
    .end(function(err,res){
      should.exist(res.body);
      res.body.should.have.property('status');
      res.body.should.have.property('message');
      res.body.message.should.be.a("string");
      res.body.message.should.equal('true');
      res.body.status.should.equal(true);
      done();
          })

  })

  it.skip("Vérifie que le mot de passe correspond", function(done){
    var motdePasseinfo = {
      email: "sha@yahoo.com",
      actuel_mdp: "Bouu",
      nouveau_mdp:"Je sais"

    };
    test.request(server)
    .post('/api/mdp')
    .send(motdePasseinfo)
    .end(function(err,res){
      should.exist(res.body);
      res.body.should.have.property('status');
      res.body.should.have.property('message');
      res.body.message.should.be.a("string");
      res.body.message.should.equal('Mot de passe modifié avec succès');
      res.body.status.should.equal(true);
      done();
          })

  })

  it.skip("Vérifie que le mot de passe ne correspond pas", function(done){
    var motdePasseinfo = {
      email: "sha@yahoo.com",
      actuel_mdp: "ShaSha",
      nouveau_mdp:"new"

    };
    test.request(server)
    .post('/api/mdp')
    .send(motdePasseinfo)
    .end(function(err,res){
      should.exist(res.body);
      res.body.should.have.property('status');
      res.body.should.have.property('message');
      res.body.message.should.equal('Mot de passe incorrect');
      res.body.status.should.equal(false);
      done();
          })

  })

  it("Vérifie si la personne n'a pas entrée une adresse", function(done){
    var loginInfo = {
      email: "a@yahoo.com",
      password: ""

    };
    test.request(server)
    .post('/api/login')
    .send(loginInfo)
    .end(function(err,res){
      should.exist(res.body);
      res.body.message.should.equal('entrer un email');
      res.body.status.should.equal(false);
      done();
          })

  })


});


