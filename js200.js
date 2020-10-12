

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
  
}