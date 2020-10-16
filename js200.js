

{
    var family = {
        'address': 'Seoul',
        members: {},
        addFamily: function(age, name, role) {
          this.members[role] = {
            age: age,
            name: name
          };
        },
        getHeadcount: function() {
          return Object.keys(this.members).length;
        }
      };
      
      family.addFamily(30, 'kay', 'queen');
      family.addFamily(31, 'bomi', '붕붕');
      family.addFamily(10, 'dangdangi', 'dog');
      family.addFamily(30, 'chloe', 'aunt');
      family.addFamily(3, 'lyn', 'niece');
    
      
      var printMembers = function() {
        var members = family.members;
        for (role in members) {
          console.log('role: ' + role + ', name: ' + members[role].name
           + ', age: ' + members[role].age);
        }
      };
      printMembers();
      
    var members = family.members;
    members['queen'] = {age: 20, name: 'ellsa'};
    members.붕붕 = {age: 32, name: 'bomi'};
    delete members.dog;
    delete members['niece'];
    printMembers();
}

//단축 속성명으로 재작성
{
    const address = 'busan';
    let members = {};
    let addFamily = function(age, name, role) {
        this.members[role] = {age, name};     
        };
    
    const getHeadcount = function() {
        return Object.keys(this.members).length;
      };
    
    let family = {address, members, addFamily, getHeadcount};
    
    family.addFamily(30, 'kay', 'queen');
    family.addFamily(31, 'bomi', '붕붕');
    family.addFamily(10, 'dangdangi', 'dog');
    family.addFamily(30, 'chloe', 'aunt');
    family.addFamily(3, 'lyn', 'niece');
    
    console.log(family.getHeadcount());
}

{
// 속성 게산명 

let obj = {};
for(let i = 0; i < 4; i++){
    obj['key' +  i] = i;
}
console.log(obj);

const profile =  'kay:30';
let person = {
    [profile] : true,
    [profile.split(':') [0]] : [profile.split(':') [1]]
};
console.log(person);

}
console.clear();


// 10. 08
{
  // 비구조 할당

  let obj = {a: 1 , b: 2, c: 30, d: 44};

  let {a, c} = obj;
  console.log(`a >>> ${a}`);
  console.log(`c >>> ${c}`);

  let {a:newA = 10, f: newF = 5} = obj;
  console.log(`newA >>> ${newA}`);
  console.log(`newAF >>> ${newF}`);

}

{
    // 배열 비구조화 할당 {}을 []로 바꾸어 쓰면 댐
    let arr = [1, 2, 30, 44, 5]

    let [b, c, ...rest] = arr;
    console.log(`0) b >>> ${b}`);
    console.log(`0) c >>> ${c}`);
    console.log(`rest >>> ${rest}`);
  // ...은 나머지 변수 지시자

  let [ a=10, f=9,] = [1];
  console.log(`1) a >>> ${a}`);
  console.log(`1) f >>> ${f}`);


  [ a, f,] = [f, a];
  console.log(`2) a >>> ${a}`);
  console.log(`2) f >>> ${f}`);

  }
  console.clear();

  // 10.09
{
  //심볼형
  const nationality =  Symbol('nationality');
  const user = {
    name : 'kay',
    age: 12

  };
  user[nationality] = 'korean';
  console.log(user[nationality]);

for (let key in user) {
  console.log(key);
}
// 유저안에 있는 키가 반복되어 콘솔에 찍힘
//for-in루프로는 키의 내용을 가지고 올수 읎다

console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));
// 마찬가지 키안에 들은 내용물 못가져와

const SymbolProperties = Object.getOwnPropertySymbols(user);
console.log(SymbolProperties);
console.log(user[SymbolProperties[0]]);
//이렇게 가져올수 있음
}

{
  // 예외처리
  // throw와 try-catch-finally가 있다
  // 예상치 못한 에러와 개발자가 의도한 에러가 있다. (코드에서 잘못될 가능성을 예상하고 발생시키는 에러)
  // 개발자가 의도한 에러에는 throw를 사용해서 예외 상황임을 알림 throw가 실행되면 실행되던 블록을 빠져나오게 됨

  // throw
  function checkNumber (val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 되었습니다');
  }

  checkNumber(100); 
  //맞아서 로그가 잘 찍힘
  // checkNumber('wrong'); 
  //문자타입이기 때문에 예외사항 에러메세지로 이 블록을 빠져나감. 하단 완료메세지는 실행되지 않음
  console.log('완료');

  //위의 에러발생의 해결책으로 나온것이  try-catch-finally
  //예상치 못한 에러와 의도한 에러 둘다 대응가능
  
}

{
  //  try-catch-finally
  // try 에서 에러를 잡아내고 catch블록에서 제어권을 넘긴다 
  // try블록에서 발생된 에러는 catch의 변수로 전달되기 때문에 개발자는 프로그램 종료없이 어떤에러인지 확인가능
  // finally 는 에러발생 여부와 상관없이 실행되는 블록

  function checkNumber (val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 되었습니다');
  }

 try{
  checkNumber(100);
  checkNumber('wrong');
 } catch (e){
   console.log(`에러가 발생했습니다 >>> ${e}`);
  //  변수 e에 에러 정보 전달 
 } finally{
  console.log('완료');
 }
}

{
  // argument객체 이해
  // argument 는 함수가 호출될때 전달되는 값
  // 매개변수 paramieter or property는 함수 선언시 작성되는 변수
  
  function sum(){
    let total = 0; 
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(arguments instanceof Array);
    // arguments 는 배열이 아님을 확인
    return total;
  }

  let sumOf1to3 = sum (1,2,3);
  console.log(sumOf1to3);

  function testArg(){
    const newArr = Array.prototype.slice.call(arguments);
    // argument 를 배열로 바꾸기위해 slice를 호출 call
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    // console.log(arguments.indexOf('b'));
    // arguments는 배열이 아님 에러남
  }
  testArg('a', 'b');
}

console.clear();

{
  // 함수 기본 매개 변수 처리
  function drawChart(width = 200, height = 400){
    // 넓이와 높이에 아무 인자가 들어오지 않을 경우 기본 으로 할당될 값지정
    console.log(`${width} x ${height}를 그립니다.`);
  }
  drawChart(100);
  // 인자로 100 전달
  drawChart();

  function drawChart2(width = 200, height = width / 2){
    // 넓이와 높이에 아무 인자가 들어오지 않을 경우 기본 으로 할당될 값지정
    console.log(`${width} x ${height}를 그립니다.`);
  }
  drawChart2(300);
  // 인자로 100 전달
  drawChart2();
}

{
  // 함수 나머지 매개변수 이해하기

  function sum(...arg) {
    let total = 0; 
    for (let i = 0; i < arg.length; i++) {
      total += arg[i];
    }
    console.log(arg.indexOf(1));
    return total;
  }
console.log(sum(1,2,3));

// 1,2,3 은 arg의 배열이 되면서 total변수값과 합쳐짐


function sum2(a,b,...others){
  let total = a + b;

  for(let i = 0; i < others.length; i++) {
    total += others[i];
  }
  return total;

}
console.log(sum2(1,2));
console.log(sum2(1,2,3,4));
//a, b의 매개 변수를 가지고 있음 
// 함수 호출시 a b에 인자를 전달 이때 others는 빈배열이 됨
// 더많은 인자 전달시 a b에는 인자가 전달되고 나머지는 others에 배열의 요소로 전달됨
}


{
  //스코프 이해하기 -  유효 범위 변수와 매개변수가 어디까지 유효한지 나타낸다 

  let a = 10;
  console.log(a);

function print() {
  let b = 20;
  if(true)  {
    var c = 30;
    // let 으로 선언시 if문 밖으로 나가서 호출하면 안불러와짐
  }
  console.log(c);
}

print();
// console.log(b);


// 스코프는 일반적으로 렉시컬 스코프와 다이나믹 스코프가 있는데 자스는 렉시컬  
// 렉시컬 스코프는 코드가 작성되는 시점에 스코프가 결정됨 정적 스코프
}

{
let a = 'global';

function print1 (){
  console.log(a);
}

function print2 (){
  let a = 'local';
  print1();

}

print1();
// 함수 블록이 실행됨 함수내부에서 a를 찾을수 없기 때문에 전역변수로 지정된 a의 값을 가져옴
print2();
// 함수 내부에서 print1을 호출하고 잇기 때문에 print1의 값을 호출해옴 
// a 가 print2의 내부에서 가져올지 아니면 print1이 사용한 것을 가져올지에 따라 렉시컬과 다이내믹이 갈림
// 렉시컬은 코드를 작성하는 시점의 것을 가져옴
// 그래서 print1을 작성했을때는 이미 할당받은것이 전역변수의a이기때문에 전역변수a를 그대로 가져옴

}


{
 // 함수 호이스팅
// 함수를 선언하기 전에 호출 가능 끌어올리기
hello();
function hello(){
  console.log('hello');

}

  // hello2();
  let hello2 = function (){
    console.log('hello');
  }
  // 에러발생 실제로 호이스팅이 이루어졋지만 여기엔 언디파인드가 할당 언디파인드는 호출불가기때문에 에러발생


// let 선언문= 변수 선언시 유효범위가 블록이 됨 값을 재할당 가능
// const 유효범위 블록 재할당 불가능 - 보통 대문자로 작성 변하지 않는 값을 정의하기 때문
// const로 정의된 객체는 불변객체는 아니다 불변객체는 정의된 후에도 값을 바꿀수없는게 불변객체

const CONST_USER = {name: 'kay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = 'bomi';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
// 이런식으로 객체 내부에 속성에 담긴 값을 변화시키기 가능

// CONST_USER = {name: 'bobo'};
// 이런식의 재할당이나 새로운 객체를 추가하거나 바꾸는건 안댐

}

console.clear();
{ 
  // 스코프 체인- 스코프가 연결 되어 잇는것
  // 실행 컨텍스트와 렉시컬 환경을 알아야함
  // 샐행 컨텍스트는 코드가 실행되기 위해 팔요한 정보를 가지고 잇다.  실행가능한 코드가 실행될때 생성됨
  //실행가능한 코드는 전역 코드와 함수코드
  //전역코드가 먼저 실행됨 전역 컨텍스트를 만들고 전역코드를 순차적으로 평가
  //함수호출문을 만나면 새로운 실핼컨텍스트가 만들어지면서 함수 실행부의 코드를 순차적 평가
  //이떼 스택을 이용해 실행 컨텍스트 관리  새로운 컨텍스트가 생성되면 스택에 쌓고 실행중인 코드가 종료되면 스텍에서 제거

  let person = 'kay';

  function print (){
    let person2 = 'jay';

     function innerPrint (){
      console.log(person);
      console.log(person2);
     }

     innerPrint();
     console.log('print finished');
  }

print();
console.log('finished');

//안쪽부터 출력되는 구조

}

{
  //클로저 이해하기
  //클로저란 함수가 정의될때 렉시컬 환경을 기억하는 함수
function creatCounterCloser (){
let count = 0;
  return{
    increase: function(){
      count++;
    },
    //increase 클로저
    getCount: function(){
      return count;
    }
    //getCount 클로저
  };
}

const counter1 = creatCounterCloser();
const counter2 = creatCounterCloser();

counter1.increase();
counter1.increase();
console.log(`counter1: ${counter1.getCount()}`);
//counter1.increase();가 두번실행된 것을 기억
counter2.increase();
console.log(`counter2: ${counter2.getCount()}`);

}


{
  // 객체 속성 기술자 이해
   //속성 기술자-- 객체 속성은 자신의 정보를 여기에 가지고 있음 속성기술자는 객체로 표현됨 
   let user = {
     name: 'bomi'
   };
   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
   console.log(descriptor);
  //  getOwnPropertyDescriptor로 가져올수 있음

  
// Object.defineProperty로 해당 객체의 속성 정의
// Object.defineProperty(속성을 정의할 객체, 속성명, 속성기술자)
// 속성기술자 - value: 값, enumerable: 속성의 나열 가능 여부 (true/false), 
// writable: 값을 변경할수 있는지, configurable: 속성기술자를 변경할수 있는지.
let user2 = {};
Object.defineProperty(user2,"name",{
  value: 'kay',
  enumerable: true,
  configurable: true,
  writable: false
});
console.log(user2.name);
user2.name = 'bobo';
console.log(user2.name);
// writable: false 이기 때문에 뒤에 값을 bobo로 바꿔도 kay가 나옴


let user3 = {
  name: 'jinny',
  toString(){
    return this.name;
  }
};
Object.defineProperty(user3, 'toString', {
  enumerable: false
});
// 여기서 toString의 메소드는 enumerable: 속성의 나열 가능 하지 않게 설정해놈 그래서 속성명만 출력됨
for(let key in user3) {
  console.log(key);
}
//모든 속성에 접근해서 속성이름은 출력하지만 그 안에 나열은 하지 않음

let user4 = {};
Object.defineProperty(user4, 'name', {
  value: 'bomi',
  configurable: false
});

delete user4.name
console.log(user4);
//속성기술자를 변경할수 없게 configurable: false 해놔서 지워지지않고 리턴됨
Object.defineProperty(user4, 'name', {
  // writable: true
});
//속성변경이 불가능하기때문에 에러뜸
}

console.clear();

{
  //get, set 을 통한 속성 접근관리
  let user =  {};
  Object.defineProperty(user,'age',{
    get: function (){
      return this._age;
    },
    //get 메소드는 속성에 접근할때 호출
    set: function(age){
      if(age < 0) {
        console.error('0보다 작은 값은 올 수 없다.');
      } else {
        this._age = age;
      }
      //set 은 값을 대입할때 호출
    },
    enumerable: true
  });

  user.age = 10;
  console.log(user.age);
  user.age = -1;

  
  let user2 = {
    get name(){
      return this._name;
    },
    set name(val){
      if (val.length < 2) {
        throw new Error('2자 이상이어야 함');
      }
        this._name = val;
    }
  }
//  속성이름에 _를 붙이는 것은 암묵적으로 비공개 속성임을 나타낸다.
user2.name = 'kay';
console.log(user2.name);
// user2.name = 'k';
}

{
  //화살표 함수 arrow function
  // function키워드를 안쓰고 화살표의 연산자 사용 
  // 매개변수가 하나 이상일 졍우 인자를 정의할떄 괄호 생략
  // 매개 변수가 없거나 둘 이상일 경우 괄호 작성
  // 코드 블록{}을 지정하지 않고 한문장으로 작성시 return문을 사용하지 않아도 됨
  //{}을 지정했을 경우 return 작성해주기

  const double = x => x + x;
  console.log(double(2));
    // 매개변수가 하나 이상일 졍우 인자를 정의할떄 괄호 생략
    // 코드 블록{}을 지정하지 않고 한문장으로 작성시 return문을 사용하지 않아도 됨
    //매개변수 x를 지정받아 x+x를 반환하는 함수에 변수를 2지정
    // function double (x){return x + x;}임

  const add = (a, b) => a + b;
  console.log(add(1, 2));
    // 매개 변수가 없거나 둘 이상일 경우 괄호 작성
  // 코드 블록{}을 지정하지 않고 한문장으로 작성시 return문을 사용하지 않아도 됨

  const printArguments = () => {
    console.log(arguments);
  }
  // printArguments(1, 2, 3);

  //  return문이 없기때문에 반환값이 없음
  //{}을 지정했을 경우 return 작성해주기
  //에러가 뜨는 이유는 arguments의 객체가 만들어지지 않앗기때문이다


  const sum = (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++){
      total += args[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3));
  //나머지연산자를 통해 매개변수 정의
  // args는 전달받은 인자 목록을 배열로사용가능

  setTimeout(() => {
    // console.log('화살표 함수!');
  }, 10);
// 매개변수 없어서 괄호작성
}

{
  //객체지향 프로그래밍 이해
  // 프로그램을 객체들로 구성 객체들간에 상호작용하도록 작성하는 방법
  //객체는 식별 가능한 구체적인 사물 또는 추상적인 개념
  //객체는 특징적인 행동(메소드=함수값으로 가지는 속성)과 변경가능한 상태(그밖에 다른 값)를 가짐

  const teacherJay = {
    name: 'jay',
    age: 30,
    teachJavascript: function(student) {
      student.gainExp();
    }
  }

  const studentBbo = {
    name: 'bbo',
    age: 20,
    exp: 0,
    gainExp: function (){
      this.exp++;
    }
  }
  console.log(studentBbo.exp);
  teacherJay.teachJavascript(studentBbo);
  console.log(studentBbo.exp);
}

{
  //모든 객체는 다른 객체의 prototype(원형)이 될수있다. 특징을 묘사하는 원형 객체를 만들고 이 원형 객체에 기반하는
  // 여러 객체들을 만들면 모두 같은 특징을 가질수 있다.

  const studentProto = {
    gainExp: function (){
      this.exp++;
    }
  }

  const harin = {
    name: '하린',
    age: 20,
    exp: 0,
    __proto__: studentProto
  };

  const kay = {
    name: 'kay',
    age: 30,
    exp: 10,
    __proto__: studentProto
  };

  harin.gainExp();
  kay.gainExp();
  kay.gainExp();
  console.log(kay);
  console.log(harin);
}

{
  //생성자 함수이해
  // 생성자 함수는 new라는 키워드를 꼭 사용해야함 리턴문이 없어도 새로운 객체가 반환됨 함수명은 대문자로시작!
// 객체에 타입이 적용되면 그건 인스턴스라고 부름 앞예문의 두 학생은 학생타입의 인스턴스 
// new로 만들어진 객체는 해당타입의 인스턴스

function Teacher (name, age, subject){
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.teach = function(student) {
    console.log(`${student}에게 ${this.subject}를 가르친당`);
  };
}

const jay = new Teacher('jay', 31, 'js');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay2', 23, 'js');
console.log(jay2);
console.log(age);
// 이때 this는 전역객체를 가리킴 전역변수 age를 참조해 23 찍힘
// 새로운 객체는 반환되지 않아 jay2는 undefined

// 생성자 함수 new 호출을 통한 객체 생성 과정
//1. 빈 객체를 만든다.
//2. 만든 빈 객체를 this에 할당
//3. 생성자 함수 바디의 코드를 실행 (this에 속성 및 메소드 추가)
// 4. 만든 빈 객체의 __proto__에 생성자 함수의 프로토타입 대입
// 5. this를 생성자의 반환 값으로 변환
}

console.clear();
{
  //프로토 타입 기반 상속 이해
  // 모든 객체는 __proto__ 속성을 가진다. 해당객체를 생성한 생성자 함수의 prototype 객체
  //그래서 생성자 함수를 통해서 타입을 정의할 수 있음
  function Storage(){
    this.dataStore = {};
  }
  Storage.prototype.put = function(key, data){
    this.dataStore[key] = data;
  }
  Storage.prototype.getData = function(key){
    return this.dataStore[key];
  }
  // Storage생성자 함수 정의 내부 속성으로 dataStore을 가지고 빈객체 할당
  //put메소드 추가 주어진 키에 해당하는 값을 dataStore에 할당
  //get 메소드추가 매개변수의 값을 키로 해서 dataStore 속성에서 찾아 반환

  const productStorage = new Storage();
  productStorage.put('id001',{name: '키보드', price: 2000});
  console.log(productStorage.getData('id001'));

  function RemovableStorage (){
    Storage.call(this);
  }
  //   RemovableStorage라는 생성자 함수 정의
// 이때 호출하면서  this를 전달 --이렇게 되면 Storage 생성자 함수가 호출됨
// 그래서 dataStore가 속성으로 추가됨
  RemovableStorage.prototype = Object.create(Storage.prototype);
  RemovableStorage.prototype.removeAll = function(){
    this.dataStore = {};
  }
  //Object.create메소드는 주어진 인자를 __proto__에연결한 새로운 객체 반환. 간단히 상속관게를 형성할수있다
  // Object.create(Storage.prototype)를 할당하면 Storage함수의 프로토타입 객체가 
  // RemovableStorage함수의 프로토타입 객체에 할당 상속관계 형성

  const productStorage2 = new RemovableStorage();
  productStorage2.put('id001',{name: '키보드', price: 2000});
  productStorage2.removeAll();
  const item2 = productStorage2.getData('id001');
  console.log(item2);
// RemovableStorage생성자 함수에 의해 만들어지는 인스턴스들은 내부에 없는 매소드를 
// RemovableStorage의 프로토타입에서 먼저 찾고 없으면 Storage프로토타입에서 찾음
// 나아가 Object.prototype에서까지 찾음
// 이런 연결을 프로토타입 체인이라고 함
}

{
  //클래스 정의
  // 별도 타입의 객체를 생성하는 설계도면--붕어빵틀 (객체--붕어빵)
  // 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의 

  class Cart {
    constructor () {
      this.store = {};
    }

    addProduct(product){
      this.store[product.id] = product;
    }

    getProduct(id){
      return this.store[id];
    }
  }

  const cart1 = new Cart();

  cart1.addProduct({id:1, name: '노트북'});
  console.log(cart1.store);

 const p = cart1.getProduct(1);
console.log(p);

}
{
  //클래스 상속 이해
  class Chart {
    constructor (width, height){
      this.width = width;
      this.height = height;
    }

    drawLine (){
      console.log('draw line');
    }
  }

  // 클래스 상속은 extends키워드 이용
  class BarChart extends Chart {
    constructor (width, height){
      super(width, height)
      //상속을 하면 생성자 함수에서 상속한 부모 클래스의 생성자 호출해야하는데 이때
      // 사용하는 키워드는 super
    }

    draw (){
      this.drawLine();
      console.log(`draw ${this.width} x ${this.height} barChart`);
    }
  }

  const barChart1 = new BarChart(100, 100);
  barChart1.draw();
}

{
  // 클래스 정적 메소드와 속성 정의ㅡ정적메소드는 클래스를 ㅌㅇ해 직접호출
  // (일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출)
  class Product {
    static build (name, price) {
      const id = Math.floor(Math.random() * 1000);
      return new Product(id, name, price);
    }
     // static키워드를 사용해서 build를 정적메소드로 정의
  //  --난수를 아이디로하는 상품의 인스턴스

    static getTaxPrice (product){
      return (product.price * 0.1 ) + product.price;
    }
 //세금을 계산하고 반환하는 정적메소드
    constructor (id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
    // 상품클래스의 생성자 함수를 정의

  }
  class DeposableProduct extends Product {
    depose (){
      this.deposed = true;
    }
  }
  //페기가 가능한 삼품을 클래스로 정의

  const gum = Product.build('껌', 1000);
  console.log(gum);

  const clothes = new DeposableProduct(1, '옷', 2000);
  const taxPrice = DeposableProduct.getTaxPrice(clothes);
  console.log(taxPrice);
}

{
class ProductWithCode {
  static get CODE_PREFIX(){
    return 'PRODUCT='
  }

  constructor(id){
    this.id
    this.code = ProductWithCode.CODE_PREFIX + id;
  }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);
}
{
  // this 이해
  
}