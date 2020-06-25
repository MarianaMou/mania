const should = require('chai').should();
var server = require('./../../src/app/NodeJS/server');
const test = require('chai');
var chaiHttp = require('chai-http');
test.should();
test.use(chaiHttp);

describe("Tester le login", function(){


  it("Vérifie que le mot de passe est faux", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Shishis"

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

  it("Vérifie que Shania existe dans la base de données", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Shania25"

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

  it("Vérifie que Shania existe dans la base de données", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Shania25"

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

  it("Vérifie que mot de passe entré correspond à celui dans la base de données", function(done){
    var loginInfo = {
      email: "sha@yahoo.com",
      password: "Shania25"

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



});


