const assert = require ('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const R = require ('../app');


// il fallait séparer les 2 modules exports

/*sayHelloResult = app.sayHello(); // éviter les répétitions
addNumbersResult = app.addNumbers(5,5);

describe('App',function (){
  describe('sayHello', function(){
    it('sayHello should return hello', function(){
      //let result = sayHello();
      assert.equal(sayHelloResult,'hello');
      });


      it('sayHello should return type string',function(){
        //let result = sayHello();
        assert.typeOf(sayHelloResult, 'string');
      });
  });


   describe('addNumbers', function(){
    it ('addNumbers should be above 5', function(){
      //let result = addNumbers(5,5);
      assert.isAbove(addNumbersResult,5)
    })


    it('addNumbers should return type number',function(){
     // let result = addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    });
   })
});


// méthode où on va faire le test
describe('Field test for killer robot',function(){
  let num = 6;
  let str = 'heyyy';
//dans it , on décrit ce qu'on attend de la fonction, ce que ça doit retourner
  it('check that num is numeric', function(){
//inside here Assert is used, it says whether or not the test works
//mocha takes all the tests that we are going to run
//mocha considers each of the "it" as an individual test and will say if you passed one or you failed one
assert.isNumber(num);
  });

  it('check that str is a string', function(){
 assert.isBoolean(str);
  })
});*/

describe("Field test for killer robot", function(){
  let robot = R;
//it.skip (ignorer un test pour run un autre)
  it.skip("check that robot talks strings", function(){

    assert.isString(robot.talk(),'string');
  })

  it.skip('check that robot uses allowed phrases', function(){
    for(let i=0; i<8; i++) {
      let phrase = robot.talk();
      assert.oneOf(phrase,robot.phrases);
    }

  })

  it('make sure robot has ammo to fire',function(){
  for(let i=0; i<5;i++){
    robot.fireCannon();
    assert.isAtLeast(robot.ammo,0);
  }


  })
});




